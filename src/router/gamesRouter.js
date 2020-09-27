// criando os endereços que a usuária vai digitar: Router


// 1. IMPORTAR O EXPRESS
        const express = require('express')

// 2. IMPORTAR O ROUTER DO EXPRESS (O QUE FAZ O ROUTER?)
        const route = express.Router()

// 3. IMPORTAR O CONTROLLER
        const controller = require ('../controller/gamesController')


// 4. CRIAR AS ROTAS (ENDEREÇOS) QUE TRAZEM O QUE EU QUERO

        //route.get ('/', AINDA VAZIO)
        
        route.get('/games/names',controller.getAllNames);
        route.get('/games',controller.getAll);
        route.get('/games/:id',controller.getByID);

        route.get('/artistas',controller.getAllArtists);
        


// EXPORTAR O ROUTE PRONTO
module.exports = route