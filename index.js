const express = require("express");
const Conn = require("./models/conn/conn");

const app = express();
// Conn("localhost", 27017, "filmes");
Conn()

app.use(express.json());

const port = 3000;

const filme = require("./routers/filmes.routes");
app.use("/filmes", filme);

app.listen(process.env.PORT || port, () => {
  console.info(`Servidor conectado na porta ${port}`);
});
