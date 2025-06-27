const typeorm = require("typeorm");
const db = require("./db");

const User = require("../db/models/User");

const dataSource = new typeorm.DataSource({
  ...db,
  type: "postgres",
  entities: [User],
});

module.exports = {
  dataSource,
};
