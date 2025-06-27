const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
const database = process.env.DATABASE_NAME;

const port = process.env.DATABASE_PORT;
const host = process.env.DATABASE_HOST;

module.exports = {
  username,
  password,
  database,
  port,
  host,
};
