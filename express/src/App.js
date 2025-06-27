const express = require("express");

const { dataSource } = require("./config/typeorm");
const { port } = require("./config/server");
const usersRouter = require("./routes/users");

class App {
  constructor() {
    this.initServer = this.initServer.bind(this);
    this.initDatabase = this.initDatabase.bind(this);
  }
  start() {
    return this.initDatabase().then(this.initServer);
  }
  initServer() {
    const app = express();
    app.use(express.json());
    app.use(usersRouter);

    this.server = app;

    return new Promise((resolve) => {
      app.listen(port, () => {
        console.log(`Server started on port ${port}`);
        resolve();
      });
    });
  }
  initDatabase() {
    return dataSource.initialize().then(() => {
      console.log("Data source initialized");
    });
  }
}

module.exports = {
  App,
};
