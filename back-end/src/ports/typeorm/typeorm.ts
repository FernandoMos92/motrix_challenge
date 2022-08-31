import { DataSource } from 'typeorm';
import { Content } from './models/content';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'motrix',
  password: 'motrix',
  database: 'motrix',
  synchronize: true,
  logging: true,
  entities: [Content],
});
