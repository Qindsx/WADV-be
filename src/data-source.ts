import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entities/User';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'agricultural_statistics',
  synchronize: true,
  logging: false,
  entities: [__dirname + '/entities/*.ts'],
  migrations: [],
  subscribers: [],
});
 