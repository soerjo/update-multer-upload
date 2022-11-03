require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
});

const dbConnection = () => {
  return new Promise((res) => {
    db.connect((err) => {
      if (err) console.error(err);
      res(console.log("connected do db success..."));
    });
    db.on("error", (err) => {
      process.exit(1);
    });
  });
};

const execQuery = (query, params) => {
  return new Promise((resolve, reject) => {
    try {
      db.query(query, params, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { dbConnection, execQuery };
