const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "kemer",
  password: "pg@password",
  port: "5432",
});
module.exports = pool;
