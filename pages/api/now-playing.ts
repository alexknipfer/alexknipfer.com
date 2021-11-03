import { NextApiResponse, NextApiRequest } from 'next';

import { SpotifyNowPlayingResponse } from '@/models/Spotify';
import { getNowPlayingTrack } from '@/lib/spotify';
import { serialize } from '@/serializers/nowPlayingSerializer';
import { HttpStatusCode } from '@/models/Http';
import { APIError, SpotifyError } from '@/models/errors';
import { errorHandler } from '@/utils/errorHandler';

export interface NowPlayingResponse {
  id: string;
  type: 'spotify';
  attributes: {
    isPlaying: boolean;
    songName: string;
    artists: string;
    album: string;
    albumImage: string;
    songUrl: string;
  };
}

export default async (
  _: NextApiRequest,
  res: NextApiResponse<NowPlayingResponse | APIError>,
) => {
  const response = await getNowPlayingTrack();

  if (response.status === 204 || response.status > 400) {
    return errorHandler(
      res,
      new SpotifyError(
        'Unable to fetch currently playing track',
        HttpStatusCode.BAD_REQUEST,
      ),
    );
  }

  const nowPlayingResponse: SpotifyNowPlayingResponse = await response.json();

  return res.status(HttpStatusCode.SUCCESS).json(serialize(nowPlayingResponse));
};
