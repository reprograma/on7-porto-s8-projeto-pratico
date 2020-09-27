// Hierarquia de arquivos

// ./ retorna arquivos ou pastas do mesmo diretório
// ../ retorna arquivos ou pastas de um diretório acima

const musicas = require("../model/musicas.json");

const getAllMusics = (req, res) => {
    res.status(200).send(musicas)
};

const getMusicByID = (req, res) => {
    const id = req.params.id

    // método find retorna o primeiro resultado que passar na condição
    // método filter retorna um array de resultados
    // como ID é um identificador único, é mais indicado utilizar FIND
    const musicaFiltrada = musicas.find((musica) => musica.id == id)

    res.status(200).send(musicaFiltrada)
}

const getAllArtists = (req, res) => {
    // usamos o método map para mapear e trazer todos os valores do campo artista da lista musicas.json
    const artistas = musicas.map((musica) => musica.artista)
    
    res.status(200).send(artistas)
}

const getArtistByName = (req, res) => {
    const artista = req.params.nome
    const musicasFiltradasPorArtista = musicas.filter((musica) => musica.artista == artista)

    res.status(200).send(musicasFiltradasPorArtista);
}

const getAllAlbuns = (req, res) => {
    const albuns = musicas.map((musica) => musica.album)
    
    res.status(200).send(albuns)
}

const getAlbumByTitle = (req, res) => {
    const album = req.params.titulo
    const musicasFiltradasPorAlbum = musicas.filter((musica) => musica.album == album)

    res.status(200).send(musicasFiltradasPorAlbum);
}

// Bônus \o/
const getMusicsSingle = (req, res) => {
    const musicasFiltradasPorSingle = musicas.filter((musica) => musica.single === true)
    
    res.status(200).send(musicasFiltradasPorSingle)
}

module.exports = {
    getAllMusics,
    getMusicByID,
    getAllArtists,
    getArtistByName,
    getAllAlbuns,
    getAlbumByTitle,
    getMusicsSingle
} 
