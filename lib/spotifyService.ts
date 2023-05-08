import { appConfig } from '@/lib/appConfig';
import { Fetch } from '@/lib/fetch';
import {
  SpotifyNowPlayingResponse,
  SpotifyTokenResponse,
} from '@/models/Spotify';

class SpotifyService {
  private fetch: Fetch;
  private static readonly TOKEN_ENDPOINT =
    'https://accounts.spotify.com/api/token';
  private static readonly NOW_PLAYING_ENDPOINT =
    'https://api.spotify.com/v1/me/player/currently-playing';

  constructor() {
    this.fetch = new Fetch();
  }

  public async getNowPlayingTrack() {
    const { access_token } = await this.getAccessToken();

    try {
      const response = await this.fetch.get<SpotifyNowPlayingResponse>(
        SpotifyService.NOW_PLAYING_ENDPOINT,
        new Headers({
          Authorization: `Bearer ${access_token}`,
        }),
      );

      if (!response.is_playing) {
        return null;
      }

      const trackDetails = response.item;

      return {
        artists: trackDetails.artists.map((a) => a.name).join(', '),
        songName: trackDetails.name,
        album: trackDetails.album.name,
        albumImage: trackDetails.album.images[0].url,
        songUrl: trackDetails.external_urls.spotify,
      };
    } catch (error) {
      console.error(error);

      return null;
    }
  }

  private async getAccessToken(): Promise<SpotifyTokenResponse> {
    return this.fetch.post(
      SpotifyService.TOKEN_ENDPOINT,
      new Headers({
        Authorization: `Basic ${this.getAuthToken()}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: appConfig.spotify.refreshToken,
      }),
    );

    // const response = await fetch(SpotifyService.TOKEN_ENDPOINT, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Basic ${this.getAuthToken()}`,
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: new URLSearchParams({
    //     grant_type: 'refresh_token',
    //     refresh_token: appConfig.spotify.refreshToken,
    //   }),
    // });

    // return response.json();
  }

  private getAuthToken() {
    return Buffer.from(
      `${appConfig.spotify.clientId}:${appConfig.spotify.clientSecret}`,
    ).toString('base64');
  }
}

export const spotifyService = new SpotifyService();
