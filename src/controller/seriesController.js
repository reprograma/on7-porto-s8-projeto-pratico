const series = require('../model/series.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(series);
};

const getByID = (req, res) => {
    const id = req.params.id

    const serieFiltrada = series.find((serie) => {
        return serie.id == id
    })

    res.status(200).send(serieFiltrada)
}

const getBySeries = (req, res) => {
    const nome = req.params.nome;
    const nomeFiltrado = series.filter((series) => series.nome == nome)
    
    res.status(200).send(nomeFiltrado);
} 

const getAllSeries = (req, res) => {
    const tipo = series.map((serie) => serie.nome)

    res.status(200).send(tipo)
}

module.exports = { getAll, getByID, getBySeries, getAllSeries };