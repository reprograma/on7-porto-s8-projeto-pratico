const express = require('express');
const app = express();

const series = require('./routes/seriesRoute');

app.use('/', series);


app.get('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root:__dirname});
})


module.exports = app;