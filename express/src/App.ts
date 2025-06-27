import express, { type Express } from "express";
import { dataSource } from "./config/typeorm";
import { port } from "./config/server";

import { usersRouter } from './routes/users'

export class App {
  server?: Express

  constructor() {
    this.initServer = this.initServer.bind(this);
    this.initDatabase = this.initDatabase.bind(this);
  }
  async start() {
    await this.initDatabase();
    this.server = await this.initServer();
  }
  async initServer() {
    const app = express();
    app.use(express.json());
    app.use(usersRouter);

    return new Promise<Express>((resolve) => {
      app.listen(port, (error) => {
        if (error) {
          console.error('Error', error);
          return;
        }
        console.log(`Server started on port ${port}`);
        // resolve(app);
      });
    })
  }
  initDatabase() {
    return dataSource.initialize().then(() => {
      console.log("Data source initialized");
    });
  }
}
