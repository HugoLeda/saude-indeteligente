const express = require('express');
const routes = express.Router();

const CadastroController = require('./controllers/CadastroController');
const ContentController = require('./controllers/ContentController');

routes.post('/cadastro', CadastroController.create);
routes.get('/cadastro', CadastroController.read);
routes.delete('/cadastro/:id', CadastroController.delete);

routes.post('/contents/:id', ContentController.update);

module.exports = routes;