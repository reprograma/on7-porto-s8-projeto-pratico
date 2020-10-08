const express = require('express');
const route = express.Router();
const controller = require('../controller/seriesController')

route.get('/series', controller.getAll);

route.get('/series/:id', controller.getByID);

route.get('/series/temporadas/:temporadas', controller.getByTemporadas)

route.get('/genero/:genero', controller.getByGenero)

module.exports = route;
