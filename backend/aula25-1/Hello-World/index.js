const readline = require('readline-sync');

const name = readline.question('What\'s your name? ');
const age = readline.questionInt('How old are you? ');

console.log(`Hello there, ${name}! You're ${age} years old!`);
