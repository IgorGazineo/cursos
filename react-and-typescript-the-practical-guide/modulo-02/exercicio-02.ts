/*

01) Aula 09 - Configurando e usando typescript:

    Descomente o alert abaixo, abra o terminal integrado e rode o comando 'npx tsc' + o nome do arquivo para invocar o compilador e gerar o arquivo javascript.

    Abra o arquivo html no browser para ver o pop up do alert sendo exibido.

*/

// alert('Hello, TypeScript');

/*

02) Aula 10 - Trabalhando com tipagem: anotação de inferência de tipagem explicita:

    Descomente o código das linhas 23 e 24 e faça com que a declaração da variável 'myAge' aceite a reatribuição de qualquer tipo de dados.

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

    Mude a declaração da variável "user" tipando ela de modo que seja um objeto que siga os seguintes tipos de dado para cada propriedade:
        name -> string
        age -> number
        isAdmin -> boolean
        id: string ou number

    Depois de declarar a variável de forma correta, descomente o código abaixo e mude os valores das propriedades para eliminar o erro.

*/

let user: object;

// user = {
//   name: "Max",
//   age: "34",
//   isAdmin: "true",
//   id: "abc",
// };

/*

05) Aula 15 - Trabalhando com arrays:

    Comente o código da linha 74 e mude a tipagem na declaração da variável "hobbies" de modo que ao descomentar o código onde a variável "hobbies" recebe um array de objetos, não seja detectado nenhum erro pelo typescript.

*/

let hobbies: string[];

hobbies = ["Sports", "Cooking", "Reading"];

// hobbies = [
//   {
//     name: "Max",
//     age: 34,
//   },
//   {
//     name: "Igor",
//     age: 36,
//   },
// ];

/*

06) Aula 16 - Adicionando tipagens a funções:

    Crie uma função "add" que vai receber 2 números como argumentos e retorna a soma desses números.

    Adicione tipagens do tipo "number" para os parâmetros e retorno da função.

    Exiba no console a chamada da função, passando como argumentos os números 12 e 30, compile o arquivo typescript e veja o resultado.

*/

/*

07) Aula 17 - Definindo tipagem e função:

    --- Criando a função ---

    Crie uma função "calculate" que tem 3 parâmetros: "a", "b" e "calcFn".

    Os parâmetros "a" e "b" serão do tipo "number" e o parâmetro "calcFn" será uma função.

    A função "calculate" deve retornar o chamamento da função "calcFn" com os parâmetros "a" e "b".

    --- Tipando a função ---

    Adicione tipagens do tipo "number" para o primeiro e segundo parâmetro dessa função. E para o terceiro parâmetro, adicione tipagens de modo que seja uma função que receba 2 argumentos do tipo "number" e returna um tipo "number". Use as variáveis "c" e "d" na tipagem da função.

    Exiba no console a chamada da função "calculate", passando como argumento os números 7 e 7 para os primeiros parâmetros e a função "add" (criada no exercício anterior) como terceiro argumento. Compile o arquivo .ts e veja o resultado que deve ser 14.

*/

/*

08) Aula 18 - Criando tipagem personalizada:

    Crie uma tipagem personalizada "AddFn" para a tipagem do parâmetro "calcFn" da função "calculate" do exercício acima, e faça a substituição. 

*/

/*

09) Aula 19 - Definindo tipagem em objetos com interfaces:

    Crie uma tipagem para um objeto usando a palavra-chave "interface". Dê o nome dessa tipagem de "Credentials" e use as seguintes "propriedades" e "tipagens" do objeto:

        password -> string
        email -> string

    Adicione essa tipagem na declaração da variável "creds" e atribua a essa variável um objeto que siga os padrões da tipagem que foi estabelecida.
    
*/

/*

10) Aula 20 - Interfaces vs types customizados:

    Crie uma classe "AuthCredentials" e implemente a tipagem "Credentials" que foi criada no exercício acima e adicione uma tipagem de propriedade "userName" do tipo "string".

    Crie uma função "login" que tem como parâmetro uma variável "credentials" com a tipagem "Credentials" criada acima. Invoque a função "login" passando como argumento a instância da classe "AuthCredentials".

    Abaixo da criação da interface "Credentials", adicione uma tipagem com uma propriedade "mode" do tipo "string". Pra isso, use a palavra-chave "interface".

*/

/*

11) Aula 21 - Unindo tipagens:

    Crie uma tipagem para um objeto "Admin" usando a palavra-chave "type", de um objeto que tem uma propriedade "permissions" que recebe um array de strings.

    Crie uma tipagem para um objeto "AppUser" usando a palavra-chave "type", de um objeto que tem uma propriedade "userName" que recebe uma string.

    Crie uma tipagem para um objeto "AppAdmin" usando a palavra-chave "type", que seja uma combinação das tipagens "Admin" e "AppUser".

    Crie uma variável "admin" que recebe a tipagem "AppAdmin" e depois atribua a essa variável um objeto com as tipagens que foram definidas.

    Comente o código criado nessa aula até aqui, e crie as mesmas tipagens usando a palavra-chave "interface".

*/

/*

12) Aula 22 - Sendo específico com tipagens literais:

    Crie uma variável "role" que a tipagem deve ser do tipo "string" e que só aceita os valores "user", "admin" ou "editor".

*/

/*

13) Aula 23 - Adicionando tipagens de guarda:

    Recorte e cole abaixo o código do exercício acima.

    Antes do código colado, crie uma tipagem "Role" usando a palavra-chave "type" que só aceita os valores "user", "admin" ou "editor".

    Substitua a tipagem da variável "rola" pela tipagem "Role" criada acima.

    Crie uma function "performAction" que tem os parâmetros "action" e "role". Tipe o parâmetro "action" com o tipo "string" ou "number" e o parâmetro "role" com a tipagem "Role".

    Dentro da função, crie uma condição que exiba no console a mensagem "O usuário tem permissão de admin" caso o parâmetro "action" seja do tipo "string" e o parâmetro "role" tenha o valor "admin".

    Invoque a função passando argumentos para testar e compile o arquivo ts para js para ver o resultado no console.

*/
