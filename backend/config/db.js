const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',      // Database host
  user: 'root',  // Database username
  password: 'Fly@12345', // Database password
  database: 'cnnct'  // Database name
});

db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }
    console.log("Connected to the MySQL database.");
  });
  

module.exports = db;
