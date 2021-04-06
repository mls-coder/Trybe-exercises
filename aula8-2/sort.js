const pizzas = ['Frango com Catupiry', 'Marguerita', 'Gratinada', '4 Queijos'];
const numbers = [1, 2, 3, 4, 5, 7, 7, 8, 9, 6, 10];

//ordenando alfabeticamente 
console.log(pizzas.sort());

//ordenando numericamente
//sort usa o unicode para ordenar, então se a pontuação for menor ela aparecerá na frente!

const compare = (a, b) => {
    if (a < b) return -1; //vai retornar um número negativo, logo ficará na frente, já q A < B
    else if (a > b) return 1;
    return 0;
};

//outra maneira de escrever o compare

const compare2 = (a, b) => {
    return a - b; //se A > B o retorno é pos, caso contrário é negativo
};

//sort

console.log(numbers.sort((a, b) => {
    return a - b;
}));

const numbers2 = [2, 3, 1, 8, 7, 9, 6, 11, 36, 12, 3];
console.log(numbers2);
numbers2.sort((compare2));
console.log(numbers2);