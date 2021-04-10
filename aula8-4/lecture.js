const numbers = [1,5,3,9,5,7,6];
//somando os numbers com for

const somador = arr => {
    let accumulator = 0;
    for (let i = 0; i < arr.length; i++) accumulator += numbers[i];
    return accumulator;
};
console.log(`O resultado da soma com for é ${somador(numbers)}`);

// reduce - se o segundo parametro não for passado, o acumulador na primeira iteração será o primeiro valor e o valor atual é o segundo
const numbers = [1,5,3,9,5,7,6];
const somadorReduce = numbers.reduce((accumulator, value) => accumulator += value);
console.log(somadorReduce);

const epic = ['A long', 'time', 'ago', 'in a', 'galaxy', 'far', 'far', 'away...'];
console.log(`Usando join: ${epic.join(' ')}`);
const epicPhrase = epic.reduce((acc, cur) => acc + cur);
console.log(epicPhrase);
const epicPhrase2 = epic.reduce((acc, cur) => `${acc} ${cur}`);
console.log(epicPhrase2);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const players = [
    {fullName: 'Cristiane Rozeira de Sousa Silva', email: 'criscris@futebol.br'},
    {fullName: 'Marta Vieira da Silve', email: 'rainhamarta@futebol.br'},
    {fullName: 'Ronaldo de Assis Moreira', email: 'bruxo@futebol.br'},
    {fullName: 'Ronaldo Luís Nazário de Lima', email: 'cortedocascao@futebol.br'}
];

const newObj = arr => arr.reduce((acc, cur) => {
    acc[cur.fullName] = cur.email;
    return acc;
}, {});


console.table(newObj(players));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//sem initialValue
const reduce = (arr, action) => {
    let acc = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let cur = arr[i];
        console.log(`accumulator = ${acc} current = ${cur}`);
        acc = action(acc, cur);
    }
    return acc;
};
const numbers = [1,2,3,4,5];
console.log(reduce(numbers, (accumulator, current) => accumulator + current));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////// com initialValue

const reduce = (arr, action, initialValue) => {
    let acc = initialValue;
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i];
        console.log(`accumulator = ${acc} current = ${cur}`);
        acc = action(acc, cur);
    }
    return acc;
};
const numbers = [1,2,3,4,5];
console.log(reduce(numbers, (accumulator, current) => accumulator + current, 0));
////////////////

const reduce = (arr, action, initialValue) => {
    let acc = initialValue;
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i];
        // console.log(`accumulator = ${acc} current = ${cur}`);
        acc = action(acc, cur);
    }
    return acc;
};

const players = [
    {fullName: 'Cristiane Rozeira de Sousa Silva', email: 'criscris@futebol.br'},
    {fullName: 'Marta Vieira da Silve', email: 'rainhamarta@futebol.br'},
    {fullName: 'Ronaldo de Assis Moreira', email: 'bruxo@futebol.br'},
    {fullName: 'Ronaldo Luís Nazário de Lima', email: 'cortedocascao@futebol.br'}
];

console.log(reduce(players, (newArr, curPlayer) => {
    newArr[curPlayer.fullName] = curPlayer.email;
    return newArr;
}, {}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const reduce = (arr, action, initialValue) => {
    let acc, index;
    if (initialValue === undefined) {
        acc = arr[0];
        index = 1;
    } else {
        acc = initialValue;
        index = 0;
    }
    for (let i = index; i < arr.length; i++) {
        let cur = arr[i];
        // console.log(`accumulator = ${acc} current = ${cur}`);
        acc = action(acc, cur);
    }
    return acc;
};

const players = [
    {fullName: 'Cristiane Rozeira de Sousa Silva', email: 'criscris@futebol.br'},
    {fullName: 'Marta Vieira da Silve', email: 'rainhamarta@futebol.br'},
    {fullName: 'Ronaldo de Assis Moreira', email: 'bruxo@futebol.br'},
    {fullName: 'Ronaldo Luís Nazário de Lima', email: 'cortedocascao@futebol.br'}
];
const numbers = [1,2,3,4,5];
console.log(reduce(players, (acc, cur) => {
    acc[cur.fullName] = cur.email;
    return acc;
}, {}));
console.log(reduce(numbers, (acc, cur) => acc + cur));