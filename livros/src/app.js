// passo-a-passo

//1. Importar o express
//2. Declarar a variável app atribuindo o express
//3. Importar a rota
//4. Usar a rota criada
//5. Exportar o app

const express = require ('express');
const app = express ();

app.use(express.static('public'));

const livros = require ('./routes/livrosRoute');

app.use ('/', livros);

app.get('*', (req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
})

module.exports = app;
