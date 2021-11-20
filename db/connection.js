const mysql = require("mysql2");
require('dotenv').config();

const connectionInfo = require('./dbInfo');


const connection = mysql.createConnection({
  host: connectionInfo.db_host,
  port: connectionInfo.db_port,
  user: connectionInfo.db_user,
  password: connectionInfo.db_pass,
  database: "employee_tracker",
});

connection.connect(function (err) {
  if (err) throw err;
})

module.exports = connection;

