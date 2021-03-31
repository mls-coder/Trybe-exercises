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