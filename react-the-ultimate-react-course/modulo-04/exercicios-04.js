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

  Exiba no console o valor da propriedade "moviePublicationDate" do objeto "lordOfTheRingsBook". Ps: O valor retornado deve ser "undefined".

  Crie uma constante de nome "updatedBook" e usando o operador spread, faça com que a constante "updatedBook" receba todos os valores do objeto "lordOfTheRingsBook" e mais uma nova propriedade com a chave: "moviePublicationDate" e valor: "2001-12-19".

  Exiba no console o valor da propriedade "moviePublicationDate" do objeto "updatedBook".

*/

/*

07) Aula 19 - Operador rest/spread:

  Exiba no console o valor da propriedade "pages" do objeto "updatedBook".

  Crie uma constante de nome "updatedBook2" e usando o operador spread, faça com que a constante "updatedBook2" receba todos os valores do objeto "updatedBook" mas com o valor da propriedade "pages" atualizado para: *1220*.

  Exiba no console o retorno da expressão que acessa a propriedade "pages" do objeto "updatedBook2".

*/

/*

08) Aula 20 - Template literals:

  Crie uma variável "myBook" com a palavra-chave "let" que recebe o retorno da invocação da função "getBook", passando como argumento da função um número de sua escolha entre 1 e 4 (incluindo o 1 e o 4) que representa o id de um dos objeto do array "data".

  Use a sintaxe de destructuring assignment para obter os valores das propriedades "title", "author", "pages" e "publicationDate" que estão no objeto "myBook" e mude o nome das variáveis seguindo o padrão em que a variável "title" passa a ser "bookTitle" e assim por diante.

  Crie uma constante de nome "summary" que recebe o valor: "TITULO_DO_LIVRO, a NUMERO_DE_PÁGINAS-page long book, was written by AUTOR_DO_LIVRO and published in DATA_DA_PUBLICAÇÃO."

  Insira os valores corretos que foram extraidos do objeto "myBook" na string acima através de interpolações usando template literals. 

  Exiba o resultado da constante "summary" no console.

*/

/*

09) Aula 20 - Template literals:

  Faça com que a variável "myBook" receba o mesmo valor da questão acima, com a diferença que a expressão que retorna o valor da "DATA_DA_PUBLICAÇÃO", retorne apenas o ano do livro.

  Use o método "split" para isso.

*/

/*

10) Aula 21 - Operador ternary:

  Crie uma constante chamada "pagesRange" que recebe o resultado de uma expressão utilizando o operador ternário. Para isso, utilize a variável "bookPages" da questão 20 e faça essa expressão retornar o valor "over 1000" caso o valor da variável seja maior que 1000. Caso seja menor que 1000, a expressão deve retornar o valor "less than 1000".

  Exiba a constante "pagesRange" no console.

*/

/*

11) Aula 21 - Operador ternary:

  Exiba no console a string "The book has over 1000 pages" caso o valor da variável "bookPages" seja maior que 1000. Caso seja menor, exiba a string "The book has less than 1000 pages". 

  Faça uma interpolação utilizando Template Literals e coloque diretamente na interpolação, a expressão que retorna uma das duas strings acima.

*/

/*

12) Aula 22 - Arrow functions:

  Faça com que a variável "myBook" receba o mesmo valor da questão *09*.

  Dessa vez, crie uma constante "getYear" que armazena uma arrow function e recebe como argumento, uma string no modelo "ano-mês-dia" e retorna apenas o ano.

  Use a função para substituir a "DATA_DA_PUBLICAÇÃO" pelo valor correto.

*/

/*

13) Aula 23 - Short-Circuiting e operadores lógicos &&, ||, ??:

  And operator &&:
    Crie uma variável "andOperatorResult" que recebe o retorno de uma expressão que compara um valor truthy: "'Hello'" e um valor falsy: *0* usando o operador "And".

    Tente adivinhar qual valor a expressão irá retornar antes de exibir a variável no console.

    Agora faça a "andOperatorResult" receber o retorno de uma expressão com os valores invertidos osando o mesmo operador e exiba a "andOperatorResult" no console.

  Or operator ||:
    Crie uma variável "userName" que recebe o retorno de um "prompt" com a mensagem: "Digite seu nome:". Caso o valor seja truthy, a expressão deve retornar o valor do nome, e caso seja falsy, a expressão deve retornar o valor "Nome de usuário inválido". Use o operador "or" para isso.

    Exiba no console a string "O nome do usuário é NOME_DO_USUÁRIO" substituindo pelo valor correto.

    Perceba que o operador "or" retorna o primeiro valor caso seja do tipo truthy, ou o segundo valor caso o primeiro seja falsy.
    
  Nullish Coalescing operator ??:
    Crie uma constante "students" que redebe o array: "[{name: 'Ricardo', grade: 7.5}, {name: 'Carla', grade: null}, {name: 'João', grade: 0}]".

    Através de uma iteração, exiba no console a string "O aluno NOME_DO_ALUNO recebeu a nota NOTA_DO_ALUNO." para cada aluno do array.

    Caso a nota seja do tipo null, exiba a string "'NOTA NÃO DISPONÍVEL'".

    Use o operador Nullish Coalescig para isso.

*/

/*

14) Aula 24 - Optional Chaining:

  Crie uma constante "studentsArray" que recebe o array: "[
        { name: "Ricardo", grades: { firstGrade: 7.5, secondGrade: 6.5 } },
        { name: "Carla" },
        { name: "João", grades: { firstGrade: 0, secondGrade: 3.5 } },
        { name: "Luara", grades: { firstGrade: 9.5, secondGrade: 9.8 } },
      ]".

  Crie uma função chamada "getTotalGrade" que recebe por parâmetro um array de estudantes e retorna o valor total das notas deles.

  Passe como argumento o array "studentsArray" e exiba o resultado no console.

  Use o operador Optional Chaining para garantir que não aconteça um erro caso o objeto do aluno não possua uma propriedade com as notas.

*/

/*

15) Aula 25 - O método de array "Map":

  Crie uma constante com o nome "oneToTen" que recebe um array com os números de *1* até *10*.

  Com o método "map", crie uma expressão que retorna um array onde cada número do array tem o dobro do valor do array "oneToTen". Armazene o array em uma constante "oneToTenDoubled" e exiba no console.

  Crie uma constante "arrayOfBooks", e armazene o array de livros através da função "getBooks".

  Usando o método "map", crie uma expressão que retorna um array com os títulos de cada livro e utilizando "Destructuring" e o operador "rest", crie 3 constantes, uma para armazenar o primeiro título, uma para p segundo título e a outra para os outros títulos e exiba as constantes no console.

  Crie uma constante "essentialData" que armazena um array contendo apenas o título e o autor do livro em cada elemento. Utilize o método "map" para criar essa expressão e ao armazenar na constante, exiba o resultado no console.

*/

/*

16) Aula 26 - O método de array "Filter":

  Crie uma constante "evenNumbers" e armazene um array com os números pares de *5* até *10*. Utilize o array "oneToTen" e o método "filter" para isso. Se for preciso, você pode encadear um segundo método "filter" após o primeiro. Tente fazer primeiro com a lógica completa na função de callback, e depois encadeando multiplos métodos. Exiba o resultado de "evenNumbers" no console.

  Exiba no console a quantidade de elementos que a constante "arrayOfBooks" armazena. Agora crie uma constante "longBooks" que armazena apenas os livros com mais de 500 páginas que a constante "arrayOfBooks" armazena. Use o método "filter" para isso, e exiba o resutado de "longBooks" no console.

*/

/*

17) Aula 27 - O método de array "Reduce":

  Crie uma constante "pagesOfAllBooks" que recebe o valor ta soma de todas as páginas do array "arrayOfBooks". Utilize o método "reduce" para isso e exiba a "pagesOfAllBooks" no console.

*/

/*

18) Aula 28 - O método de array "Sort":

  Crie uma constante "randomNumbers" que recebe o array: "[1, 5, 4, 12, 30, 22, 34, 17]". Crie uma constante "sortedNumbers1" que recebe o valor do array "randomNumbers" com os números ordenados de forma crescente. Use o método "sort" para isso. Exiba o resultado das constantes "randomNumbers" e "sortedNumbers1".

  Crie uma constante "sortedNumbers2" que recebe o valor do array "randomNumbers" com os números ordenados de forma decrescente. Exiba o resultado das constantes "randomNumbers" e "sortedNumbers2".

  Crie uma constante "sortedNumbers2" que recebe o valor do array "randomNumbers" com os números ordenados de forma crescente mas dessa vez, faça com que o array "randomNumbers" não sofra mutação. Exiba o resultado das constantes "randomNumbers" e "sortedNumbers2".

*/
