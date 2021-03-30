
// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
//calcule a area do triangulo retangulo

function calcArea(base, height) {
    return (base * height) / 2;
}
console.log(calcArea(8,4));

const area = (base, height) => (base * height) / 2;
console.log(area(8,4));

// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.


function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

  testingScope(true);

  const testScope = escopo => {
    if (escopo) {
        const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(`${elseScope} ótimo, fui utilizada no escopo !`);
    }
}

testScope(false);


//ternary operator

const testScope = escopo => {
    escopo ? 'true' : 'false';
    console.log(`${escopo} yay ternary operator!`);
}

testScope(true);


// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

//Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
//Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números. 

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortArray = array => {
//   let lowest = array[0];
//   let result = [];
//   console.log(`tamanho ${array.length}`);
//   for (let j = 0; j < array.length; j++) {
//     for (let i = 1; i < array.length; i++) {
//       if (array[i] < lowest) {
//         lowest = array[i];
//       }
//       let index = array.indexOf(array[i]);
//       array.splice(index,1);
//     }
//     console.log(lowest);
//   }
//   return result;
// }

// console.log(sortArray(oddsAndEvens));


// Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

// const fat = n => {
//   (n === 0) ? 1 : (n * fat(n - 1));
// }

// console.log(fat(4));

const fat = n => {
  if (n === 0) {
    return 1;
  } else {
    return n * fat(n - 1);
  }
}

console.log(fat(6))