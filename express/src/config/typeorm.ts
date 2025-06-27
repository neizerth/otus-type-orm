import { DataSource } from 'typeorm';
import * as db from './db'
import { User } from '../db/models/User';

export const dataSource = new DataSource({
  ...db,
  type: "postgres",
  entities: [User],

});
