// Passo-a-Passo

// 1. Importar o Express
// 2. Importar o Router
// 3. Importar o Controller
// 4. Criar a rota que traz todos os itens
// 5. Exportar o router

const express = require('express');
const router = express.Router();
const controller = require('../controller/livrosController');
const index = require('../routes/index');

router.get('/', index);
router.get('/livros', controller.getAll);
router.get('/livros/:id', controller.getById);
router.get('/livros/autor/:autor', controller.getByAuthor);
router.get('/autores/', controller.getAllAuthors);

module.exports = router;