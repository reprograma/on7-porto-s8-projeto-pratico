const musicas = require('../model/musicas.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.send(musicas);
};

const getByID = (req, res) => {
    const id = req.params.id

    const musicaFiltrada = musicas.find((musica) => {
        return musica.id == id
    })

    res.status(200).send(musicaFiltrada)
}

const getByArtists = (req, res) => {
    const artista = req.params.artista;
    const artistaFiltrado = musicas.filter((musicas) => musicas.artista == artista)
    
    res.status(200).send(artistaFiltrado);
} 

const getAllArtists = (req, res) => {
    const artists = musicas.map((musica) => musica.artista)

    res.status(200).send(artists)
}

module.exports = { getAll, getByID, getByArtists, getAllArtists };