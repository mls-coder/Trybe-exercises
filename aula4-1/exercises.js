
// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:

// Adição
// Subtração
// Multiplicação
// Divisão
// Módulo

let a = 6;
let b = 9;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(soma, subtracao, multiplicacao, divisao, modulo);

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados. 

let num1 = 7;
let num2 = 89;

if (num1 > num2){
    console.log(num1);
} else {
    console.log(num2);
}

//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três variáveis com os valores que serão comparados. 

num1 = 7;
num2 = 4;
num3 = 12;

if ((num1 > num2) && (num1 > num3)) {
    console.log(num1);
} else if((num2 > num1) && (num2 > num3)) {
    console.log(num2)
} else {
    console.log(num3)
}

//Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero", caso contrário. 

let num = -6;

if (num > 0) {
    console.log("positive");
} else if (num < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 

let ang1 = 80;
let ang2 = 60;
let ang3 = 40;

let anglesSum = ang1 + ang2 + ang3;
let isTriangle = ((ang1 > 0) && (ang2 > 0) && (ang3 > 0));

if (isTriangle) {
    if (anglesSum === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log("Invalide angle.")
}

// Escreva um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let score = 2;

if ((score <= 100) && (score >= 0)) {
    if (score >= 90) {
        console.log("A");
    } else if (score >= 80) {
        console.log("B");
    } else if (score >= 70) {
        console.log("C");
    } else if (score >= 60) {
        console.log("D");
    } else if (score >= 50) {
        console.log("E");
    } else {
        console.log("F");
    }
} else {
    console.log("Invalid input.")
}