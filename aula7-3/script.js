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

const summation = num => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(summation('42'));

//importando o módulo de testes assert
const assert = require('assert');

assert.strictEqual(typeof(summationOf), 'function'); //verifica se o summationOf é realmente uma função
assert.strictEqual(summationOf(5), 15); //verifica se o retorno da função é o esperado



const assert = require('assert');
const summation = num => {
    let sum = 0;
    if (typeof(num) === 'number') {
        for (let i = 1; i <= num; i++) {
            sum += i;
        }
    } else {
        throw new Error('Type of parameter is not a number.');
    }
    return sum;
}
assert.strictEqual(summation(42), 903);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     Course

