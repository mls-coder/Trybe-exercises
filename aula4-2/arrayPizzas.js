
let pizzas = ['4 Queijos', 'Frango com catupiry', 'Marguerita', 'Palmito', 'Chocolate'];
console.log('Nós possuimos ' + pizzas.length + ' sabores de pizza!');
console.log('Menu de sabores: ' + pizzas.sort());

pizzas.push('Peito de Peru', 'Banana com Canela');

console.log('Nós possuimos ' + pizzas.length + ' sabores de pizza!');
console.log('Menu de sabores: ' + pizzas.sort());

for (let index = 0; index < pizzas.length; index += 1) {
    console.log(pizzas[index]);
}