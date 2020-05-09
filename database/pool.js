const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.SQL_USER,
  database: process.env.SQL_DATABASE,
  password: process.env.SQL_PASSWORD,
  host: "/cloudsql/" + process.env.INSTANCE_CONNECTION_NAME,
  port: 5432,
});

module.exports = pool;
