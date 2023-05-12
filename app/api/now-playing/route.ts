import { NextResponse } from 'next/server';

import { spotifyService } from '../../../lib/spotifyService';

export async function GET() {
  try {
    const nowPlayingTrack = await spotifyService.getNowPlayingTrack();

    return NextResponse.json(nowPlayingTrack);
  } catch (error) {
    return NextResponse.json(
      {
        error: {
          message:
            error instanceof Error
              ? error.message
              : 'Unknown error has occured',
        },
      },
      { status: 400 },
    );
  }
}
