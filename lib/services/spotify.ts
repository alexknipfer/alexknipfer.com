import { appConfig } from '@/lib/appConfig';

class SpotifyService {
  private static readonly TOKEN_ENDPOINT =
    'https://accounts.spotify.com/api/token';
  private static readonly NOW_PLAYING_ENDPOINT =
    'https://api.spotify.com/v1/me/player/currently-playing';

  public async getNowPlayingTrack() {
    const { access_token } = await this.getAccessToken();

    return fetch(SpotifyService.NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  }

  private async getAccessToken() {
    const response = await fetch(SpotifyService.TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${this.getAuthToken()}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: appConfig.spotify.refreshToken,
      }),
    });

    return response.json();
  }

  private getAuthToken() {
    return Buffer.from(
      `${appConfig.spotify.clientId}:${appConfig.spotify.clientSecret}`,
    ).toString('base64');
  }
}

export const spotifyService = new SpotifyService();
