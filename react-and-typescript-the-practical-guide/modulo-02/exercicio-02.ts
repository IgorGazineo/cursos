/*

01) Aula 09 - Configurando e usando typescript:

    Descomente o alert abaixo, abra o terminal integrado e rode o comando 'npx tsc' + o nome do arquivo para invocar o compilador e gerar o arquivo javascript.

    Abra o arquivo html no browser para ver o pop up do alert sendo exibido.

*/

// alert('Hello, TypeScript');

/*

02) Aula 10 - Trabalhando com tipagem: anotação de inferência de tipagem explicita:

    Descomente o código das linhas 21 e 22 e faça com que a declaração da variável 'myAge' aceite a reatribuição de qualquer tipo de dados.

    Descomente o código da linha 26 a 28 e faça com que a declaração da variável 'myName' não aceite a reatribuição de um tipo que não seja 'string'.

*/

// let myAge = '36';
// myAge = 37;

// let myName;
// myName = 'Igor'
// myName = 38

/*

03) Aula 13 - Combinando união de tipagens:

    Descomente o código abaixo e faça com que a declaração da variável 'userID' aceite apenas a reatribuição do tipo number ou string.

*/

// let userID = "abc1";
// userID = 123;

/*

04) Aula 14 - Trabalhando com objetos: 

    Descomente o código abaixo e mude a declaração da variável "user" tipando ela de modo que seja um objeto que siga os seguintes tipos de dado para cada propriedade:
        name -> string
        age -> number
        isAdmin -> boolean
        id: string ou number

    Depois de declarar o objeto de forma correta, mude os valores das propriedades para eliminar o erro.

*/

// let user: object;

// user = {
//   name: "Max",
//   age: "34",
//   isAdmin: "true",
//   id: "abc",
// };
