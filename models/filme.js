const mongoose = require('mongoose');

const filmeModel = new mongoose.Schema({
    nome: { type: String, required: true },
    urlPoster: { type: String, required: true},
    sinopse: { type: String, require:true },
    duracao: { type: String, default: "não registrado"},
    dataCriacao: { type: String, default: Date.now }
})

const Filme = mongoose.model("filmes", filmeModel);

module.exports = Filme