const person = {
    name: 'Michelle',
    lastName: 'Srbek',
    nickName: 'Mi',
    age: 26,
    lovesChocolate: true,
    favShow: {
        firstPlace: 'The Lord of The rings',
        secondPlace: 'CCS'
    }
};

// console.table(person);
console.log(`Olá, ${person.nickName}! Como vai você?`);

person.favColor = 'black';
// console.table(person);

// console.log(Object.keys(person));
// console.log(Object.values(person));

console.log(`Existe cor favorita? ${Object.keys(person).includes('favColor')}`);
console.log(`Person values: ${Object.values(person)}`);
console.log(`Persona keys: ${Object.keys(person)}`);
console.log(`Person entries: ${Object.entries(person)}`);

// console.log(Object.keys(person.favShow));

const books = {
    book1: "The Hitchhiker's Guide to the Galaxy",
    book2: "The Restaurant at the End of the Universe",
    book3: "Life, the Universe and Everything",
    book4: "So Long, and Thanks for All the Fish",
    book5: "Mostly Harmless",
    book6: "And Another Thing..."
};

const author = {
    author: 'Douglas Adams'
};

Object.assign(books, author);
console.log(books); //books recebeu as entradas de author

const booksAuthor = Object.assign({}, books);
console.log(booksAuthor);
Object.assign(booksAuthor, author);
console.log(booksAuthor);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////




//   Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

//   Note que o parâmetro da função já está sendo passado na chamada da função.

//   Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."

//   Modifique o nome da pessoa compradora.
//   Modifique o valor total da compra para R$ 50,00.


const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    console.log(`Olá, ${order.order.delivery.deliveryPerson}! Entrega para: ${order.name}, Telefone ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.payment.total = 50;
    order.name = 'Luiz Silva';

    console.log(`Olá, ${order.name}! O total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00.`);
  }
  
  orderModifier(order);

