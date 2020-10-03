const express = require('express');
const router = express.Router();
const controller = require('../controller/seriesController')

router.get("/series", controller.getAll);
router.get('/series/:id', controller.getByID);
router.get('/series/nome/:nome', controller.getBySeries);
router.get('/nome', controller.getAllSeries);

module.exports = router;