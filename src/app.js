
// a alma da aplicação: app.js


// 1. IMPORTAR O EXPRESS
        const express = require( 'express' )

// 2. DECLARAR A VARIÁVEL APP ATRIBUINDO O MÉTODO (FUNÇÃO) EXPRESS
        const app = express()


// 3. IMPORTAR AS ROTAS
        const rotas = require('./router/gamesRouter')

        
// 4. USAR O ARQUIVO DE ROTA CRIADO

        app.use('/', rotas)
        app.get('*', (req, res) => {
            res.status(404).sendFile('./views/404.html', { root: __dirname})
        });


// 5. EXPORTAR O APP PRONTO

        module.exports = app;