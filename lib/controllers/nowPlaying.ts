import { Controller } from '@/models/Controller';
import { HttpStatusCode } from '@/models/Http';
import { SpotifyNowPlayingResponse } from '@/models/Spotify';
import { serialize } from '@/serializers/nowPlayingSerializer';
import { BadRequestError } from '@/models/errors';
import { spotifyService } from '@/lib/services/spotify';

type ControllerMethods = Pick<Controller, 'index'>;

export const NowPlayingController: ControllerMethods = {
  index: async (_, res) => {
    const response = await spotifyService.getNowPlayingTrack();

    if (!response.ok) {
      console.error('NOW PLAYING ERROR RESPONSE: ', await response.json());
      throw new BadRequestError('Unable to fetch currently playing track.');
    }

    const nowPlayingResponse: SpotifyNowPlayingResponse = await response.json();

    return res
      .status(HttpStatusCode.SUCCESS)
      .json(serialize(nowPlayingResponse));
  },
};
