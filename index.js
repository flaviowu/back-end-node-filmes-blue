if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const Conn = require("./models/conn/conn");
const cors = require("cors")

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions))

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);

const port = 3005;

const filme = require("./routers/filmes.routes");
app.use("/filmes", filme);

app.listen(process.env.PORT || port, () => {
  console.info(`Servidor conectado na porta ${port}`);
});
