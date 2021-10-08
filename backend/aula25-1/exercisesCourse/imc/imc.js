const readline = require('readline-sync');

const peso = readline.questionFloat('What\'s your weight? ');
const altura = readline.questionFloat('How tall are you? ');

const imc = peso / (altura**2);

console.log(imc);
