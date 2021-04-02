const assert = require('assert');
// escreva a função addOne aqui
const addOne = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 1);
    }
    return newArr;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof(addOne), 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = arr => {
    const lengthArr = [];
    for (let i = 0; i < arr.length; i++) {
        lengthArr.push(arr[i].length);
    }
    return lengthArr;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof(wordLengths), 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

