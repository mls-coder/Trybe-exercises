const sum = (value1, value2) => {
    if (typeof(value1) !== 'number' || typeof(value2) !== 'number') {
        throw new Error('Os valores informados devem ser do tipo number.');
    } 
    return value1 + value2;
}

console.log(sum(5,4));

// const summationOf = num => {
//     if (typeof(num) !== 'number') {
//         throw new Error('O valor informado deve ser do tipo number.');
//     } else {
//         if (num === 1) {
//             return 1;
//         } else {
//             return num + summationOf(num - 1);
//         }
//     }
// }

const summationOf = num => {
    if (num === 1) {
        return 1;
    } else {
        return num + summationOf(num - 1);
    }
}

// console.log(summationOf('num'));

//importando o módulo de testes assert
const assert = require('assert');

assert.strictEqual(typeof(summationOf), 'function'); //verifica se o summationOf é realmente uma função
assert.strictEqual(summationOf(5), 15); //verifica se o retorno da função é o esperado