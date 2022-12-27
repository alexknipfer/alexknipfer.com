import { Factory } from 'rosie';
import { faker } from '@faker-js/faker';

import {
  Context,
  ExternalUrls,
  SpotifyNowPlayingResponse,
  SpotifyArtist,
  SpotifyAlbum,
  SpotifyImage,
  SpotifySong,
} from '@/models/Spotify';

export const SpotifyNowPlayingFactory =
  Factory.define<SpotifyNowPlayingResponse>(
    'spotify-now-playing-response-factory',
  )
    .attr('timestamp', () => faker.date.past().getTime())
    .attr('context', () => SpotifyContextFactory.build())
    .attr('progress_ms', () => faker.date.past().getUTCMilliseconds())
    .attr('item', () => SpotifySongFactory.build())
    .attr('currently_playing_type', () => faker.random.word())
    .attr('is_playing', () => faker.datatype.boolean());

const SpotifyContextFactory = Factory.define<Context>('spotify-context-factory')
  .attr('href', () => faker.internet.url())
  .attr('type', faker.random.word)
  .attr('uri', () => faker.internet.url())
  .attr('external_urls', () => SpotifyExternalUrlsFactory.build());

const SpotifyExternalUrlsFactory = Factory.define<ExternalUrls>(
  'spotify-external-urls-factory',
).attr('spotify', () => faker.internet.url());

const SpotifyArtistFactory = Factory.define<SpotifyArtist>(
  'spotify-artist-factory',
)
  .attr('external_urls', () => SpotifyExternalUrlsFactory.build())
  .attr('href', () => faker.internet.url())
  .attr('id', () => faker.datatype.uuid())
  .attr('name', faker.name.firstName())
  .attr('type', faker.random.word())
  .attr('uri', () => faker.internet.url());

const SpotifySongFactory = Factory.define<SpotifySong>('spotify-song-factory')
  .attr('album', () => SpotifyAlbumFactory.build())
  .attr('artists', () => SpotifyArtistFactory.buildList(2))
  .attr('available_markets', () => faker.datatype.array(3))
  .attr('disc_number', () => faker.datatype.number())
  .attr('duration_ms', () => faker.datatype.number())
  .attr('explicit', () => faker.datatype.boolean())
  .attr('external_ids', () => ({
    isrc: faker.random.word(),
  }))
  .attr('external_urls', () => SpotifyExternalUrlsFactory.build())
  .attr('href', () => faker.internet.url())
  .attr('id', () => faker.datatype.uuid())
  .attr('is_local', () => faker.datatype.boolean())
  .attr('is_playable', () => faker.datatype.boolean())
  .attr('name', () => faker.random.word())
  .attr('popularity', () => faker.datatype.number())
  .attr('preview_url', null)
  .attr('track_number', () => faker.datatype.number())
  .attr('type', () => faker.random.word())
  .attr('uri', () => faker.internet.url());

const SpotifyAlbumFactory = Factory.define<SpotifyAlbum>(
  'spotify-album-factory',
)
  .attr('album_type', () => faker.random.word())
  .attr('artists', () => SpotifyArtistFactory.buildList(5))
  .attr('available_markets', () => faker.datatype.array(5))
  .attr('external_urls', () => SpotifyExternalUrlsFactory.build())
  .attr('href', () => faker.internet.url())
  .attr('id', () => faker.datatype.uuid())
  .attr('name', () => faker.random.word())
  .attr('release_date', () => faker.date.past().toISOString())
  .attr('release_date_precision', () => faker.date.past().toISOString())
  .attr('total_tracks', () => faker.datatype.number())
  .attr('type', () => faker.random.word())
  .attr('images', () => SpotifyImageFactory.buildList(2))
  .attr('uri', () => faker.internet.url());

const SpotifyImageFactory = Factory.define<SpotifyImage>(
  'spotify-image-factory',
)
  .attr('height', () => faker.datatype.number())
  .attr('width', () => faker.datatype.number())
  .attr('url', () => faker.image.imageUrl());
