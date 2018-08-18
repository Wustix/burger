// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);

}
else {
  connection = mysql.createConnection({
    host: "blonze2d5mrbmcgf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "eq08nggujumeqhsc",
    password: "nb8316frc0eo7o5l",
    database: "cpm19hfkwnitbw3c"
  });
};

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;