const readline = require('readline-sync');

const peso = readline.questionFloat('What\'s your weight? ');
const altura = readline.questionFloat('How tall are you? ');

const imc = peso / (altura**2);

const situation = (imc) => {
    if(imc < 18.5) return 'Abaixo do peso';
    else if (imc >= 18.5 && imc <= 24.9) return 'Peso normal';
    else if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
    else if (imc >= 30 && imc <= 34.9) return 'Obesidade grau I';
    else if (imc >= 35 && imc <= 39.9) return 'Obesidade grau II';
    else return 'Obesidade grau III e IV';
};

console.log(`imc: ${imc} situação: ${situation(imc)}`);
