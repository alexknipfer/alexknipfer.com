import { pick, pipe, map, join, head, prop } from 'ramda';
import { NowPlayingResponse } from 'pages/api/now-playing';

import { SpotifyArtist, SpotifyNowPlayingResponse } from '@/interfaces/Spotify';

const spotifyItemPicks = ['name', 'artists', 'album', 'external_urls', 'id'];

export function serialize(
  spotifyNowPlayingResponse: SpotifyNowPlayingResponse,
): NowPlayingResponse {
  const attributes = pick(spotifyItemPicks, spotifyNowPlayingResponse.item);
  const commaDelimitedArtists = pipe(
    map((a: SpotifyArtist) => a.name),
    join(', '),
  );

  return {
    id: attributes.id,
    type: 'spotify',
    attributes: {
      isPlaying: spotifyNowPlayingResponse.is_playing,
      songName: attributes.name,
      artists: commaDelimitedArtists(attributes.artists),
      album: attributes.album.name,
      albumImage: prop('url', head(attributes.album.images)),
      songUrl: attributes.external_urls.spotify,
    },
  };
}
