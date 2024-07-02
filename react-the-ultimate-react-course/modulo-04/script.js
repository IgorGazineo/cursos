//
//
// ------- *** VEJA AS INSTRUÇÕES ABAIXO *** -------

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//** Use os espaços entre uma questão e outra para a resolução **

/* 
   
  01) Aula 18 - Desestruturando objetos e arrays:

    Crie uma constante "books" que recebe o retorno da invocação da função "getBooks".
    Exiba no console o valor que a constante "books" recebeu.

*/

/*

  02) Aula 18 - Desestruturando objetos e arrays:

    Crie uma constante "book" que recebe o retorno da invocação da função "getBook", passando como argumento da função o número *2* que representa o id do segundo objeto do array "data".

    Use a sintaxe de destructuring assignment para obter os valores das propriedades "title", "author", "pages", "publicationDate", "genres" e "hasMovieAdaptation" que estão no objeto "book".

    Exiba o resultado delas no console.

*/

/*

  03) Aula 18 - Desestruturando objetos e arrays:

    Use a sintaxe de destructuring assignment para obter os valores do primeiro e segundo elemento do array "genres" que foi obtido na questão anterior.

    Você pode escolher os nomes das variáveis, ou pode usar como sugestão os nomes "primeiroElemento" e "segundoElemento".

    Exiba o resultado dos elementos no console.

*/

/*

04) Aula 19 - Operador rest/spread:

  Copie o código onde foi feito a desestruturação do array "genres", cole na seção abaixo e comente a linha de código da seção acima.

  Usando o operador rest, passe os valores restantes no array "genres" para uma variável de nome "otherGenres" e exiba os valores no console.

*/

/*

05) Aula 19 - Operador rest/spread:

  Crie uma constante de nome "newGenres" e usando o operador spread, faça com que os valores do array "genres" sejam passados para esse novo array, adicionando um elemento do tipo string com o valor: "epic fantasy". 

  Exiba o resultado do "newGenres" no console.

  Todos os elementos do novo array "newGenres" devem ser do tipo string.

*/

/*

06) Aula 19 - Operador rest/spread:

  Crie uma constante de nome "lordOfTheRingsBook" que recebe o retorno da invocação da função "getBook" passando o valor *1* como argumento.

  Exiba no console o retorno da expressão que acessa a propriedade "moviePublicationDate" do objeto "lordOfTheRingsBook". Ps: O valor retornado deve ser "undefined".

  Crie uma constante de nome "updatedBook" e usando o operador spread, faça com que a constante "updatedBook" receba todos os valores do objeto "lordOfTheRingsBook" e mais uma nova propriedade com a chave: "moviePublicationDate" e valor: "2001-12-19".

  Exiba no console o retorno da expressão que acessa a propriedade "pages" do objeto "updatedBook".

*/

/*

07) Aula 19 - Operador rest/spread:

 Exiba no console o retorno da expressão que acessa a propriedade "pages" do objeto "updatedBook".

  Crie uma constante de nome "updatedBook2" e usando o operador spread, faça com que a constante "updatedBook2" receba todos os valores do objeto "updatedBook" mas com o valor da propriedade "pages" atualizado para: *1220*.

  Exiba no console o retorno da expressão que acessa a propriedade "pages" do objeto "updatedBook2".

*/

/*

08) Aula 20 - Template literals:

  Crie uma variável "myBook" com a palavra-chave "let" que recebe o retorno da invocação da função "getBook", passando como argumento da função um número de sua escolha entre 1 e 4 (incluindo o 1 e o 4) que representa o id de um dos objeto do array "data".

  Use a sintaxe de destructuring assignment para obter os valores das propriedades "title", "author", "pages" e "publicationDate" que estão no objeto "myBook" e mude o nome das variáveis seguindo o padrão em que a variável "title" passa a ser "myTitle" e assim por diante.

  Crie uma constante de nome "summary" que recebe o valor: "TITULO_DO_LIVRO, a NUMERO_DE_PÁGINAS-page long book, was written by AUTOR_DO_LIVRO and published in DATA_DA_PUBLICAÇÃO."

  Insira os valores corretos que foram extraidos do objeto "myBook" na string acima através de interpolações usando template literals. 

  Exiba o resultado da constante "summary" no console.

*/

/*

09) Aula 20 - Template literals:

  Faça com que a variável "myBook" receba o mesmo valor da questão acima, com a diferença que a expressão que retorna o valor da "DATA_DA_PUBLICAÇÃO", retorne apenas o ano do livro.

  Use o método "split" para isso.

*/
