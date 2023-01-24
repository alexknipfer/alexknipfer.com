import { NextApiResponse, NextApiRequest } from 'next';

import { errorHandler } from '@/utils/errorHandler';
import { NowPlayingController } from '@/lib/controllers/nowPlaying';

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

export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    await NowPlayingController.index(request, response);
  } catch (error) {
    errorHandler(response, error);
  }
};
