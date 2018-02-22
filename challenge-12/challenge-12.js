(function() {
  /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  var person = {
    age: 32,
    lastname: 'Uliana',
    name: 'Felipe'
  };

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log('Propriedades de "person":', Object.keys(person));

  /*
  Crie um array vazio chamado `books`.
  */
  var books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  var hobbit = { name: 'The Hobbit', pages: 279 };
  var iRobot = { name: 'I, Robot', pages: 253 };
  var iAmLegend = { name: 'I Am Legend', pages: 160 };

  books.push(hobbit, iRobot, iAmLegend);

  /*
  Mostre no console todos os livros.
  */
  console.log('\nLista de livros:', books);

  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log('\nLivro que está sendo removido:', books.pop());

  /*
  Mostre no console os livros restantes.
  */
  console.log('\nAgora sobraram somente os livros:', books);

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  var stringBooks = [];

  for (var i = 0; i < books.length; i++) {
    stringBooks.push(JSON.stringify(books[i]));
  }

  /*
  Mostre os livros nesse formato no console:
  */
  console.log('\nLivros em formato string:', stringBooks);

  /*
  Converta os livros novamente para objeto.
  */
  var objBooks = [];

  for (i = 0; i < stringBooks.length; i++) {
    objBooks.push(JSON.parse(stringBooks[i]));
  }

  console.log('\nAgora os livros são objetos novamente:', objBooks);

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
  */
  for (i = 0; i < books.length; i++) {
    for (var property in books[i]) {
      console.log(property + ': ' + books[i][property]);
    }
  }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ['f', 'e', 'l', 'i', 'p', 'e'];

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log('\nMeu nome é:', myName.join(''));

  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log('\nMeu nome invertido é:', myName.reverse().join(''));

  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log('\nAgora em ordem alfabética:', myName.sort().join(''));
})();
