"use strict";
const dotenv = require("dotenv");
dotenv.config();

// PORT
const PORT = process.env.PORT || "3000";
// DATABASE
const SQL_USER = process.env.SQL_USER;
const SQL_PASSWORD = process.env.SQL_PASSWORD;
const SQL_DATABASE = process.env.SQL_DATABASE;
const SQL_SERVER = process.env.SQL_SERVER;

module.exports = {
  port: PORT,
  database: {
    user: SQL_USER,
    password: SQL_PASSWORD,
    database: SQL_DATABASE,
    host: SQL_SERVER,
  },
};
