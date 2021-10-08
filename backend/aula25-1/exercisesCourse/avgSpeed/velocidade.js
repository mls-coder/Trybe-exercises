const readline = require('readline-sync');

const dist = readline.questionInt('Distance(m): ');
const time = readline.questionInt('Time(s): ');

console.log(`Avarage speed: ${dist/time}m/s.`);
