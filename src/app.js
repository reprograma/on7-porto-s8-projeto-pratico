const express = require('express');
const app = express();

// importar os arquivos de rota

const musicas = require('./routes/musicasRoutes');
const series = require('./routes/seriesRoutes');

app.use('/', musicas);
app.use('/', series);

app.get('*', (req, res) => {
    res.status(400).sendFile('./views/404.html', { root: __dirname})
});

module.exports = app;