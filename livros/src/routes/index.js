const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Alguns dos meus livros preferidos já lidos até hoje",
        data: "02/10/2020"
    });
})

module.exports = router;