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
  database: "prodigy_crm",
  port: 3306,
});

app.get("/", (req, res) => {
  const qry = "select * from clients";
  db.query(qry, (err, result) => {
    console.log(result);
    res.send({
      message: "Clienti",
      data: result,
    });
  });
});

// server port
app.listen(3000, () => {
  console.log("Server is running...");
});
