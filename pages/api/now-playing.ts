import { NextApiResponse, NextApiRequest } from 'next';

import { SpotifyNowPlayingResponse } from '@/interfaces/Spotify';
import { getNowPlayingTrack } from '@/lib/spotify';
import { serialize } from '@/serializers/nowPlayingSerializer';

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
  res: NextApiResponse<NowPlayingResponse>,
) => {
  const response = await getNowPlayingTrack();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({
      id: '',
      type: 'spotify',
      attributes: {
        isPlaying: false,
        songName: '',
        artists: '',
        album: '',
        albumImage: '',
        songUrl: '',
      },
    });
  }

  const nowPlayingResponse: SpotifyNowPlayingResponse = await response.json();

  return res.status(200).json(serialize(nowPlayingResponse));
};
