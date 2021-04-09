//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = arr => {
  return arr.reduce((acc, cur) => acc + cur.toLowerCase().split('').reduce((counter, letter) => letter === 'a' ? counter + 1 : counter, 0), 0);
};
console.log(containsA(names));

assert.strictEqual(containsA(names), 20);