//Dada uma matriz de matrizes, transforme em uma única matriz. 

const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

const flatten = arr => arr.reduce((newArr, item) => newArr.concat(item), []);
  // escreva seu código aqui - O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro
  
console.log(flatten(arrays));

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);