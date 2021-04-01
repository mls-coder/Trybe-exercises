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


// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

const assert = require('assert');

const sum = (a,b) => {
    if (typeof(a) === 'number' && typeof(b) === 'number') return a + b;
    else throw new Error('parameters must be numbers');
}

assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);
assert.strictEqual(sum(4, '5'), 9);