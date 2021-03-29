
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

const testScope = (escopo) => {
    if (escopo) {
        const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(`${elseScope} ótimo, fui utilizada no escopo !`);
    }
}

testScope(false);