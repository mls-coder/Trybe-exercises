const person = {
    name: 'Michelle',
    lastName: 'Srbek',
    nickName: 'Mi',
    age: 26,
    lovesChocolate: true,
    favShow: {
        firstPlace: 'The Lord of The rings',
        secondPlace: 'CCS',
    }
};

// console.table(person);
console.log(`Olá, ${person.nickName}! Como vai você?`);

///////////////////////////////////////////////////////////////////////////////////////////////////

person.favColor = 'black';
// console.table(person);

console.log(Object.keys(person));
console.log(Object.values(person));

console.log(`Existe cor favorita? ${Object.keys(person).includes('favColor')}`);