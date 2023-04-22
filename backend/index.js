const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "queryselects",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados: ", err);
    return;
  }
  console.log("Conexão estabelecida com sucesso ao banco de dados!");
});

app.get("/api/tbl/:id", (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM tblboxes WHERE boxId = ${id}`;
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Erro ao executar a consulta: ", error);
      res.status(500).send("Erro ao executar a consulta!");
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

//futuramente utilizar
// app.get("/api/tbl/:table/:id", (req, res) => {
//   const { table, id } = req.params;
//   const query = `SELECT * FROM ${table} WHERE ${complement} = ${id}`;
//   connection.query(query, (error, results) => {
//     if (error) {
//       console.error("Erro ao executar a consulta: ", error);
//       res.status(500).send("Erro ao executar a consulta!");
//       return;
//     }
//     res.json(results);
//   });
// });
