if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const Conn = require("./models/conn/conn");

const app = express();

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);

app.use(express.json());

const port = 3000;

const filme = require("./routers/filmes.routes");
app.use("/filmes", filme);

app.listen(process.env.PORT || port, () => {
  console.info(`Servidor conectado na porta ${port}`);
});
