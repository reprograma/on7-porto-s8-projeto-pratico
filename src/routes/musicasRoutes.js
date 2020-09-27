// passo-a-passo

// 1. Importar o Express
// 2. Criar o route atribuindo o express.Router()
// 3. Importar o musicasController
// 4. Criar a rota que traz todos os itens
// 5. Adicionar as rotas de acordo com o contrato
// 6. Exportar o router

const express = require('express');
const route = express.Router();
const controller = require('../controller/musicasController');

route.get('/musicas', controller.getAllMusics);
route.get('/musica/:id', controller.getMusicByID);

route.get('/artistas', controller.getAllArtists);
route.get('/artista/:nome', controller.getArtistByName);

route.get('/albuns', controller.getAllAlbuns);
route.get('/albuns/:titulo', controller.getAlbumByTitle);

// Bônus \o/
route.get('/musicas/single', controller.getMusicsSingle);

module.exports = route