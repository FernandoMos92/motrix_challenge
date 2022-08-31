import { DataSource } from 'typeorm';
import { Content } from './models/content';
import { ContentHistory } from './models/contentHistory';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'montrix',
  password: 'montrix',
  database: 'montrix',
  synchronize: true,
  logging: true,
  entities: [Content, ContentHistory],
});
