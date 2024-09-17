const mongoose = require('mongoose');

const CadastroDataSchema = new mongoose.Schema({
    nome: String,
    cpf: String,
});

module.exports = mongoose.model('Cadastro', CadastroDataSchema);