const express = require("express");
const router = express.Router();
const Filme = require("../models/filme.js");
const validate = require("../controllers/filmes.controller");

router.post("/add", async (req, res) => {
  const filme = req.body;
  if (validate.model(filme)) {
    await Filme.create(req.body)
      .then(() => {
        res.status(200).send("Filme adicionado com Sucesso!");
      })
      .catch((err) => {
        res.status(400).send("Algo deu errado. Tente Novamente");
        console.error(err);
      });
  } else {
    res
      .status(400)
      .send(
        "Há algo errado com o seu filme. Verifique os dados e tente novamente"
      );
  }
});

router.get("/", async (req, res) => {
  await Filme.find({})
    .then((filme) => {
      res.status(200).send(filme);
    })
    .catch((err) => {
      res.status(400).send("Algo tdeu errado na requisição, tente novamente");
      console.error(err);
    });
});

router.get("/find/:nome", async (req, res) => {
  await Filme.find({ nome: req.params.nome })
    .then((filme) => {
      res.status(200).send(filme);
    })
    .catch((err) => {
      res.status(400).send("Algo deu errado na requisição, tente novamente");
      console.error(err);
    });
});

router.put("/update/:nome", async (req, res) => {
  await Filme.updateOne({ nome: req.params.nome }, req.body)
    .then(() => {
      res.status(200).send(`Filme Atualizado com Sucesso`);
    })
    .catch((err) => {
      res.status(400).send("Algo deu errado na requisição, tente novamente");
      console.error(err);
    });
});

router.delete("/delete/:nome", async (req, res) => {
  await Filme.deleteOne({ nome: req.params.nome })
    .then(() => {
      res.status(200).send(`Filme Deletado com Sucesso`);
    })
    .catch((err) => {
      res.status(400).send("Algo deu errado na requisição, tente novamente");
      console.error(err);
    });
});

module.exports = router;
