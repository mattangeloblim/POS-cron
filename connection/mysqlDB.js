require("dotenv").config();
const mysql = require("mysql");

let pool;

const initializeDB = () => {
  if (!pool) {
    pool = mysql.createPool({
      user: process.env.DB_USERNAME,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });
  }
};

const getDB = () => {
  initializeDB();
  // console.log("Success")
  return pool;
};

module.exports = getDB;
