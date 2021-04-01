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


// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Verifique se o array passado por parâmetro não sofreu alterações
// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
const assert = require('assert');

const myRemove = (arr, value) => {
    const arrFinal = [];
    if (typeof(arr) === 'object') {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== value) arrFinal.push(arr[i]);
        }
    } else throw new Error('first parameter must be object');
    return arrFinal;
}

assert.deepStrictEqual(myRemove([1,2,3,4], 3), [1,2,4]);
assert.notDeepStrictEqual(myRemove([1,2,3,4], 3), [1,2,3,4]);

const arr = [2,3,8,6,5];
myRemove(arr, 6);
assert.deepStrictEqual(arr, [2,3,8,6,5]);

assert.deepStrictEqual(myRemove([1,2,3,4], 5), [1,2,3,4]);



// A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

const assert = require('assert');

const myRemoveWithoutCopy = (arr, item) => {
    if (typeof(arr) !== 'object') {
        throw new Error('first parameter must be object');
    } else {
        for (let i = 0; i < arr.length; i ++) {
            if (arr[i] === item) {
              arr.splice(i, 1);
              i --;
            }
        }
    }
  
    return arr;
}

assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,3,4]);

const arr = [1,2,5,6,3,8];
myRemoveWithoutCopy(arr, 6);
assert.notDeepStrictEqual(arr, [1,2,5,6,3,8]);

assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 5), [1,2,3,4]);


// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

const assert = require('assert');

const myFizzBuzz = num => {
    if (typeof(num) !== 'number') return false;
    else {
        if ((num % 3 === 0) && (num % 5 === 0)) return 'fizzbuzz';
        else if (num % 3 === 0) return 'fizz';
        else if (num % 5 === 0) return 'buzz';
        else return num;
    }
}

assert.strictEqual(myFizzBuzz(30), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(9), 'fizz');
assert.strictEqual(myFizzBuzz(20), 'buzz');
assert.strictEqual(myFizzBuzz(7), 7);
assert.strictEqual(myFizzBuzz('25'), false);