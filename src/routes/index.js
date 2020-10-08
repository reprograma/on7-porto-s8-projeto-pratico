const express = require('express');
const router = express.Router();

router.get('/series', (req, res) => {
    res.send({
        titulo: 'Séries',
        informações: 'Contém informações acerca do genero e temporadas'
    
    })
});

module.exports = router;