const mysql = require("mysql");
if (process.env.CLEARDB_DATABASE_URL) {
  connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "heroku_635e6d7eed5b116"
  });
}
connection.connect();
module.exports = connection;
