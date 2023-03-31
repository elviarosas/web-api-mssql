const sql = require("mssql");
const dotenv = require("dotenv");
dotenv.config();

const config = {
  user: process.env.DB_USER,
  server: process.env.DB_SERVER,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Connected to MSSQL");
    return pool;
  })
  .catch((err) => console.log("Database Connection Failed! Bad Config: ", err));

module.exports = {
  sql,
  poolPromise,
};

/*
const Pool = pg.Pool;

const pool = new Pool({
  user: process.env.DB_USER,
  server: process.env.DB_SERVER,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

const querypromise = (sql) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results.rows);
    });
  });
};

module.exports = {
  pool,
  querypromise,
};*/
