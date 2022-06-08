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

// CRUD OPERATION
app.get("/clients", (req, res) => {
  const qry = "select * from clients";
  db.query(qry, (err, result) => {
    if (result.length > 0) {
      res.send({
        message: "Clienti trovati",
        data: result,
      });
    } else {
      res.send({
        message: "Clienti non trovati",
      });
    }
  });
});

app.post("/new/client", (req, res) => {
  const client = req.body;
  console.log(client);
  const qry = `INSERT INTO clients (name, surname, business_name, p_iva, email,phone) VALUES ('${client.name}', '${client.surname}', ' ${client.company_name}', '${client.p_iva}', '${client.email}', '${client.phone_number}');`;
  console.log(qry);
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        message: "Nuovo cliente aggiunto con successo",
      });
    }
  });
});

// server port
app.listen(3000, () => {
  console.log("Server is running...");
});
