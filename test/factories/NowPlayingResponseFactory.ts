import { Factory } from 'rosie';
import { faker } from '@faker-js/faker';
import { NowPlayingResponse } from 'pages/api/now-playing';

export const NowPlayingFactory = Factory.define<NowPlayingResponse>(
  'now-playing-factory',
).attrs({
  id: faker.datatype.uuid(),
  type: 'spotify',
  attributes: () => NowPlayingAttributesFactory.build(),
});

export const NowPlayingAttributesFactory = Factory.define<
  NowPlayingResponse['attributes']
>('now-playing-attributes-factory')
  .attr('isPlaying', () => faker.datatype.boolean())
  .attr('songName', () => faker.random.word())
  .attr('artists', () => faker.name.firstName())
  .attr('album', () => faker.lorem.word())
  .attr('albumImage', () => faker.image.imageUrl())
  .attr('songUrl', () => faker.internet.url());
