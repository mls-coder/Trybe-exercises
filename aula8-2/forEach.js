const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//exibir um valor por vez
numbers.forEach((num) => {
    console.log(num);
});

// cria novo array a partir de numbers
const numbers3 = numbers => {
    const num3 = [];
    numbers.forEach((num) => num3.push(num * 3));
    return num3;
};

console.log(numbers3(numbers));

//criando o forEach
const forE = (arr, action) => {
    for (let i = 0; i < arr.length; i++) {
        action(arr[i], i, arr);
    }
};

const mutiply3 = num => console.log(num * 3);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

forE(numbers, mutiply3);
