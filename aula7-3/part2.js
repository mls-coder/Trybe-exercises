/////////////////////////////////////////////////////////////////////////////////////////////////////////////////                    Escreva a função para passar nos testes já implementados.                              //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


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

const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return parseInt(i);
    }
    return -1;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////                 Escreva testes para verificar a consistência das funções                                  //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const assert = require('assert');

const greetPeople = people => {
    const arr = [];
    for (let person in people) {
      arr.push(`Hello ${people[person]}`);
    }
    return arr;
};

assert.strictEqual(typeof(greetPeople), 'function');
const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
assert.deepStrictEqual(greetPeople(parameter), result);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const removeVowels = word => {
    const characters = word.split('');
    let results = '';
    let vowel = 1;
    for (let index = 0; index < characters.length; index += 1) {
        if (
        characters[index] === 'a' ||
        characters[index] === 'o' ||
        characters[index] === 'i' ||
        characters[index] === 'e' ||
        characters[index] === 'u'
      ) {
        results += vowel;
        vowel++;
      } else {
        results += characters[index];
      }
    }
    return results;
  };
  
  const assert = require('assert');
  assert.strictEqual(typeof(removeVowels), 'function');
  const parameter = 'Dayane';
  const result = 'D1y2n3';
  assert.strictEqual(removeVowels(parameter), result);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////