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
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "prodigy_crm",
  port: 3306,
});

// CRUD OPERATION

// CLIENTS
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

app.get("/client/:id/data", (req, res) => {
  const id = req.params.id;
  const queries = [
    "SELECT * FROM prodigy_crm.clients where id =" + id,
    "SELECT * FROM prodigy_crm.annotations where clients_id =" + id,
  ];
  db.query(queries.join(";"), (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send({
        client: result[0][0],
        annotations: result[1],
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

app.delete("/delete/client/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  const qry = `delete from clients where id = ${id}`;

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        message: `Client ${id} deleted succesfully`,
      });
    }
  });
});

//  OFFERS
app.get("/offers", (req, res) => {
  const qry = "select * from offers";
  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send({
        message: "Offerte trovate",
        data: result,
      });
    }
  });
});

// annotations
app.post("/create/client/:id/annotation", (req, res) => {
  const clientID = req.params.id;
  const annotations = req.body;
  const qry = `insert into annotations (title,description,clients_id) values('${annotations.title}','${annotations.description}','${clientID}')`;

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("annotation created");
    }
  });
});
// server port
app.listen(3000, () => {
  console.log("Server is running...");
});
