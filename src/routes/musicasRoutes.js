const express = require('express');
const router = express.Router();
const controller = require('../controller/musicasController')

router.get("/musicas", controller.getAll);
router.get('/musicas/:id', controller.getByID);
router.get('/musicas/artista/:artista', controller.getByArtists);
router.get('/artista', controller.getAllArtists);

module.exports = router;