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

