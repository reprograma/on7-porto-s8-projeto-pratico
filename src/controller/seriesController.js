const series = require('../model/series.json');

const getAll = (req, res) => {
    console.log(req.url);
    res.status(200).send(series);
}

// achar por ID

const getByID = (req, res) => {
    const id = req.params.id

    const seriesFiltrada = series.find((series) => 
        series.id == id 
    )
    res.status(200).send(seriesFiltrada)
}

const getByTemporadas = (req, res) => {
    const temporadas = req.params.temporadas

    const temporadasFiltrada = series.filter((series) => 
        series.temporadas == temporadas 
    )
    res.status(200).send(temporadasFiltrada);
}

const getByGenero = (req, res) => {
    const genero = req.params.genero

    const generoFiltrado = series.filter((series) => 
        series.genero == genero 
    )
    res.status(200).send(generoFiltrado);
}




module.exports = { getAll, getByID, getByTemporadas, getByGenero };