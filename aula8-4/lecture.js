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