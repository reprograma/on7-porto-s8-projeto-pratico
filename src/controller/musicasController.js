// passo-a-passo

// 1: importar o JSON de músicas
// 2: criar o método para buscar todas as músicas
// 3: exportar o método

// ./ retorna arquivos ou pastas do mesmo diretório
// ../ retorna arquivos ou pastas de um diretório acima

const musicas = require("../model/musicas.json");

const getAll = (req, res) => {
    console.log(req.url);
    // verifica se a resposta tem status 200 (sucesso) e envia o JSON
    res.status(200).send(musicas);
}

module.exports = {
    getAll,
} 
