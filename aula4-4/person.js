//object

let person = {
    name: 'Michelle',
    age: 26
};

person.address = {
    street: 'xablau',
    number:  '42',
    city: 'Isengard'
};

person['favFood'] = ['Icecream'];
person['nicknames'] = ['Mi', 'MisChief', 'Paprika'];

console.log(person);

// for in

for (key in person) {
    console.log(key);
}

for (value in person) {
    console.log(person[value]);
}

for (keyValue in person) {
    console.log(keyValue, person[keyValue]);
}