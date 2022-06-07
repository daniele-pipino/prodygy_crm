// import all the libraries
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

// server istance
const app = express();

// libarries use
app.use(cors());
app.use(bodyParser.json());

// db connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "crm",
  port: 3306,
});

// server port
app.listen(3000, () => {
  console.log("Server is running...");
});
