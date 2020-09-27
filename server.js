// a comunicação com o navegador: server.js


// 1. IMPORTAR O APP

        const app = require('./src/app')

// 2. DECLARAR A PORTA DENTRO DE UMA VARIÁVEL

        const port = 8080


// 3. "ESCUTAR" O APP NA PORTA CERTA

        app.listen(port, () => {
            console.log(`Executando em ${port}`)
        })

