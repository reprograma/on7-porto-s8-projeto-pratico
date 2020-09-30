// passo-a-passo

// 1. Importar o express
// 2. Declarar a variável app atribuindo o método do express
// 3. Importar a rota
// 4. Usar a rota '/' passando o arquivo de musicas como segundo parâmetro
// 5. Exportar o app

const express = require("express");
const app = express();

const musicas = require("./routes/musicasRoutes");

const cors = require("cors");
app.use(cors());

app.use('/', musicas);

// apresenta a lista de musicas em forma de tabela
app.get('/', (req, res) => {
    res.status(200).sendFile('./views/index.html', { root: __dirname })
})

module.exports = app;
