const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "us-cdbr-east-03.cleardb.com",
    user: "bfb4d7e6157abb",
    password: "dc82952c",
    database: "heroku_635e6d7eed5b116"
  });
}
connection.connect();
module.exports = connection;
