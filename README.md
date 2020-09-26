<h1 align="center">
  <br>
  <img src="assets/developer.png" alt="mulher negra usando computador" width="216">
  <br>
    <br>
    <p align="center">Projeto Prático - Semana 8<p>
</h1>

# Let's do this

Olá, estamos chegando na metade do curso e como você já deve ter percebido, passa <s>muito</s> rápido!

Atentando-se ao fato de sempre validarmos o conteúdo visto até determinado ponto do nosso curso, iremos trabalhar em um projeto desenvolvido por vocês.

## Temas

Escolha um dos temas abaixo com muito amor e carinho pois iremos desenvolver um projeto a partir deles.

Iremos descrever com calma e segurança cada um dos itens que esperamos que vocês desenvolvam, ok?

---

### Opção 1 - Jogos

```json
{
  "id": 1,
  "titulo": "Fall Guys",
  "dataLancamento": "2020"
}
```

#### Contratos que deverão ser entregues

| Recurso      | Descrição                         |
| ------------ | --------------------------------- |
| `/jogos`     | Retorna todos os jogos            |
| `/jogos/:id` | Retorna apenas um jogo específico |

---

### Opção 2 - Música

```json
{
  "id": 1,
  "titulo": "Evidências",
  "duracao": "04:39"
}
```

#### Contratos que deverão ser entregues

| Recurso        | Descrição                            |
| -------------- | ------------------------------------ |
| `/musicas`     | Retorna todas as músicas             |
| `/musicas/:id` | Retorna apenas uma música específica |

#### Contratos opcionais

| Recurso         | Descrição                                 |
| --------------- | ----------------------------------------- |
| `/artistas`     | Retorna a lista de artistas               |
| `/artistas/:id` | Retorna o artista e lista de músicas dele |

#### Contratos para ir ao infinito e além

| Recurso                   | Descrição                                            |
| ------------------------- | ---------------------------------------------------- |
| `/albuns`                 | Retorna o álbum com a lista de músicas daquele album |
| `/albuns/[nome-do-album]` | Retorna um álbum específico filtrado pelo nome       |

---

### Opção 3 - Séries

### Séries

```json
{
  "id": 1,
  "titulo": "Suits",
  "duracao": "9 temporadas"
}
```

#### Contratos que deverão ser entregues

| Recurso       | Descrição                           |
| ------------- | ----------------------------------- |
| `/series`     | Retorna todas as séries             |
| `/series/:id` | Retorna apenas uma série específica |

---

## Por onde começamos?

Vamos relembrar um pouco do que vimos até aqui? Não fique preocupada ou encanada em decorar todas as sintaxes e códigos existentes no mundo. Isso vem com o tempo, tá tudo bem!

Vamos começar relembrando nossa estrutura de uma maneira geral:

```
pasta-do-projeto
├── src
│   ├── controller
│   ├── model
│   ├── routes
│   ├── views
│   └── index.js
├── server.js
├── package.json
```

Agora vamos relembrar alguns conceitos importantes:

- **M**odel: é responsável pela leitura e escrita de dados, e também de suas validações. É onde está toda a lógica de negócio da aplicação.
- **V**iew: é a camada de interação com o usuário. Ela apenas faz a exibição dos dados, sendo ela por meio de um html ou xml.
- **C**ontroller: O responsável por receber todas as requisições do usuário. Seus métodos chamados actions são responsáveis por uma página, controlando qual model usar e qual view será mostrado ao usuário.

### Postman

Essa ferramenta permite testar serviços RESTful por meio do envio de requisições HTTP e da análise do seu retorno. Você pode salvar todas as suas _collections_ e facilitar o seu dia-a-dia como pessoa desenvolvedora!

### Github

Não podemos esquecer aquele commit bonitão para mostrar todo o esforço de vocês, não é mesmo?

---

E não fique preocupada quanto a não ter terminado os 3 exercícios. A ideia é justamente que você escolha um, mas que tenha um conteúdo extra maneiro para estudar, combinado?
