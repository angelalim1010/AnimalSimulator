const Pool = require("pg").Pool;

const host =
  process.env.NODE_ENV === "production"
    ? "/cloudsql/" + process.env.INSTANCE_CONNECTION_NAME
    : process.env.DB_HOST;

const pool = new Pool({
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  host,
  port: 5432,
});

module.exports = pool;
