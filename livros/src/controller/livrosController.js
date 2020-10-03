// Passo-a-passo
// 1. Importar JSON de livros
// 2. Criar o método para buscar todos os livros
// 3. Exportar o método

const livros = require('../model/livros.json');

const getAll = (req, res) => {
    console.log(req.url);

    res.status(200).send(livros);
}

const getById = (req, res) => {
    const id = req.params.id;

    const livroFiltrado = livros.find((livro) => livro.id == id);
    res.send(livroFiltrado);
};

// Criar método getAllAuthors
// Filtrar lista de livros por autores

const getByAuthor = (req, res) => {
    const autor = req.params.autor;
    const autorFiltrado = livros.filter((livro) => livro.autor == autor)

    res.status(200).send(autorFiltrado);
}

const getAllAuthors = (req, res) => {
    const authors = livros.map((livro) => livro.autor)
    res.status(200).send(authors)
}

module.exports = { getAll, getById, getByAuthor, getAllAuthors }