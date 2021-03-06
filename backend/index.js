// import all the libraries

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

// server istances
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
    "SELECT * FROM prodigy_crm.offers where clients_id =" + id,
    "SELECT * FROM prodigy_crm.estimates where clients_id =" + id,
  ];
  db.query(queries.join(";"), (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send({
        client: result[0][0],
        annotations: result[1],
        offers: result[2],
        estimates: result[3],
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

app.put("/modify/client/:id", (req, res) => {
  const clientId = req.params.id;
  const data = req.body;
  console.log(data);

  const qry = `UPDATE clients SET name = '${data.name}', surname = '${data.surname}', business_name = '${data.business_name}', p_iva = '${data.p_iva}', email = '${data.email}', phone = '${data.phone}' WHERE (id = ${clientId});`;

  db.query(qry, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Utente modificato");
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

// create
app.post("/create/client/:id/offer", (req, res) => {
  let clientId = req.params.id;
  let data = req.body;

  let qry = `insert into offers (name,description,price,clients_id) values ('${data.title}','${data.description}','${data.price}','${clientId}');`;

  db.query(qry, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Offerta creata");
    }
  });
});

app.put("/modify/offer/:id", (req, res) => {
  const offerId = req.params.id;
  const data = req.body;

  const qry = `update offers set name = '${data.name}',description = '${data.description}',price = '${data.price}' where id = ${offerId};`;

  db.query(qry, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("offerta modificata");
    }
  });
});

app.delete("/delete/offer/:id", (req, res) => {
  const offerId = req.params.id;
  const qry = `delete from offers where id = ${offerId};`;

  db.query(qry, (err, res) => {
    if (err) {
      console.log(er);
    } else {
      console.log("Offerta eliminata");
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

app.delete("/annotation/:id/delete", (req, res) => {
  const id = req.params.id;

  const qry = `delete from annotations where id =${id}`;

  db.query(qry, (err, res) => {
    if (err) {
      console.log(err);
    } else console.log("Annotazione eliminata");
  });
});

//estimates

app.post("/create/client/:id/estimate", (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const qry = `insert into estimates (name,description,price,clients_id) values ('${data.name}', '${data.description}', '${data.price}', ${id});`;

  db.query(qry, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Preventivo creato con successo");
    }
  });
});

app.put("/modify/estimate/:id", (req, res) => {
  const estimateId = req.params.id;

  const data = req.body;

  const qry = `update estimates set name= '${data.name}', description='${data.description}', price = '${data.price}' where id = ${estimateId};`;

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Preventivo modificato correttamente");
    }
  });
});

app.delete("/delete/estimate/:id", (req, res) => {
  const estimateId = req.params.id;
  const qry = `delete from estimates where id = ${estimateId}`;

  db.query(qry, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Preventivo eliminato");
    }
  });
});

//email

app.post("/send/email", (req, res) => {
  const data = req.body;

  const sgMail = require("@sendgrid/mail");
  const key =
    "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";
  sgMail.setApiKey(key);

  const msg = {
    to: `${data.to}`, // Change to your recipient
    from: `${data.sender}`, // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: `${data.message}`,
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  console.log(msg);

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
});
// server port
app.listen(3000, () => {
  console.log("Server is running...");
});
