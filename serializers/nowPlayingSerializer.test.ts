import { SpotifyNowPlayingFactory } from '@/test/factories/SpotifyAPIFactories';
import { serialize } from '@/serializers/nowPlayingSerializer';

test('should serialize spotify now playing response', () => {
  const spotifyReponse = SpotifyNowPlayingFactory.build();

  const serializedResponse = serialize(spotifyReponse);

  expect(serializedResponse).toEqual({
    id: spotifyReponse.item.id,
    type: 'spotify',
    attributes: {
      isPlaying: spotifyReponse.is_playing,
      songName: spotifyReponse.item.name,
      artists: spotifyReponse.item.artists
        .map((artist) => artist.name)
        .join(', '),
      album: spotifyReponse.item.album.name,
      albumImage: spotifyReponse.item.album.images[0].url,
      songUrl: spotifyReponse.item.external_urls.spotify,
    },
  });
});
