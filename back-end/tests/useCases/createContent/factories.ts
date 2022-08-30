import { Content } from '@/entities/content';
import { faker } from '@faker-js/faker';

export const makeContent = (input?: Partial<Content>): Content => ({
  id: faker.datatype.number(),
  title: faker.lorem.words(),
  body: faker.lorem.paragraphs(),
  createdAt: faker.date.past(),
  updatedAt: faker.date.recent(),
  ...input,
});
