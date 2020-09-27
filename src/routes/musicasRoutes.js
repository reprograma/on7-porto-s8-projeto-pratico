// passo-a-passo

// 1. Importar o Express
// 2. Importar o Router
// 3. Importar o Controller
// 4. Criar a rota que traz todos os itens
// 5. Exportar o router

const express = require('express');
const route = express.Router();
const controller = require('../controller/musicasController');

route.get('/', controller.getAll);

module.exports = route