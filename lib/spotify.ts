import querystring from 'querystring';

import { SpotifyTokenResponse } from '@/models/Spotify';
import { appConfig } from '@/lib/appConfig';

const authToken = Buffer.from(
  `${appConfig.spotifyClientId}:${appConfig.spotifyClientSecret}`,
).toString('base64');

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const getAccessToken = async (): Promise<SpotifyTokenResponse> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${authToken}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token: appConfig.spotifyRefreshToken,
    }),
  });

  return response.json();
};

export const getNowPlayingTrack = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
