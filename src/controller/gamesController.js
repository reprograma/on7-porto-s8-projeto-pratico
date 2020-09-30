// // o começo de tudo: controller


// 1: IMPORTAR TODOS OS JSON(S) QUE VOU USAR

        const games = require('../models/games.json');
        const artistas = require('../models/artistas.json');


// 2: CRIAR OS MÉTODOS PARA PEGAR AS INFORMAÇÕES NOS JSONS 

    // 2.1: MÉTODO PARA PEGAR TODOS OS JSONS

        const getAll = (req, res) => {
            console.log(`A req.url digitada foi ${req.url}`)
            //verifica se a resposta tem status 200 (sucesso) e envia o JSON
            res.status(200).send(games);
        }

        const getAllArtists = (req, res) => {
            console.log(`A req.url digitada foi ${req.url}`)
            res.status(200).send(artistas);
        }

    // 2.2: MÉTODO PARA FILTRAR PELO VALOR (FILTRANDO PELO ID DO JOGO)

        const getByID = (req, res) => {
            const id = req.params.id
            console.log(`A req.url digitada foi ${req.url}`)

        const gameFiltrado = games.find((game) => game.id == id)
        // método find retorna o primeiro elemento que passa na condição

        res.status(200).send(gameFiltrado)
        // Responder com o item que está dentro daquele ID
        }


    // 2.3: MÉTODO PARA FILTRAR PELA CHAVE (FILTRANDO PELO NOME)

        const getAllNames = (req, res) => {
            const names = games.map((game) => game.name)
            console.log(`A req.url digitada foi ${req.url}`)
     
        res.status(200).send(names)
        }
   


// 3: EXPORTE TODOS OS MÉTODOS

        module.exports = { getAll, getByID, getAllArtists, getAllNames }







