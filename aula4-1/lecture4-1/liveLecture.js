let num1 = 5;
let num2 = 10;
let num3 = 15;

//soma
let soma = num1 + num2;
console.log(soma);

//subtração
let subtracao = num1 - num2;
console.log(subtracao);

//divisão
let divisao = num1 / num2;
console.log(divisao);

//multiplicação
let multiplicacao = num1 * num2;
console.log(multiplicacao);

//comparação
let comparacao = num1 > num2;
console.log(comparacao);

//condicional 

if(num1 > num2) {
    console.log("num1 wins!");
} else {
    console.log("num2 wins!");
}

// par ou impar de uma soma

let isEven = ((num1 + num2) % 2) === 0;
console.log(isEven);

let isOdd = ((num1 + num2) % 2) !== 0;
console.log(isOdd);

// switch

let weekDay = 10;

switch(weekDay) {
    case 1:
        console.log("Sunday!");
        break;
    case 2:
        console.log("Monday!");
        break;
    case 3:
        console.log("Tuesday!");
        break;
    case 4:
        console.log("Wednesday!");
        break;
    case 5:
        console.log("Thursday!");
        break;
    case 6:
        console.log("Friday!");
        break;
    case 7:
        console.log("Saturday");
        break;
    default: 
        console.log("This day wasn't invented, yet :)");
        break;
}