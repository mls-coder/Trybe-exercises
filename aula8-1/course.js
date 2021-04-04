//Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com . 

const employee = employeeName => {
    const email = employeeName.toLowerCase().split(' ').join('_');
    return {name: employeeName, email: `${email}@trybe.com`};
};

const newEmployees = action => {
    const employees = {
      id1: action('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
      id2: action('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
      id3: action('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    };
    return employees;
};

console.log(newEmployees(employee));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). 

// const checkNumber = (bet, winner) => {
//     if (bet === winner) return true;
//     return false;
// };

// const prizeDraw = (action, bet) => {
//     const winner = Math.floor((Math.random() * 5) + 1);
//     console.log(winner);
//     if (action(bet, winner)) return 'Parabéns! Vc ganhou!';
//     return 'Tente novamente';
// };

const checkNumber = (bet, winner) => bet === winner;

const prizeDraw = (action, bet) => {
    const winner = Math.floor((Math.random() * 5) + 1);
    console.log(winner);
    return action(bet, winner) ? 'Parabéns! Vc ganhou!' : 'Tente novamente';
}

console.log(prizeDraw(checkNumber, 3));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Crie uma HOF utilizando o conceito de currying . Passe como parâmetros a resposta correta (Ex: Gabarito) para uma pergunta e uma resposta a ser validada (Ex: Resposta de uma pessoa). Sua HOF deve checar se a resposta enviada pela pessoa usuária é correta. Se for, a função retorna true , se não for, a função retorna false .

// A validação da resposta não deve ser case sensitive.
// Deve ser possível chamar a HOF criada de forma encadeada (Ex: checarResposta('Gabarito')('Teste'))

const answer = 'correto';
const myAnswer1 = 'correcto';
const myAnswer2 = 'CORRECTO';

const checkAnswer = (answer1) => (answer2) => answer1.toLowerCase() === answer2.toLowerCase();
console.log(checkAnswer(myAnswer2)(myAnswer1));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.



