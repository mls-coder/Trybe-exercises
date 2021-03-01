//escolher 6 números entre 1 e 60.

let megaSenaNumbers = [];
let game = [];
let matchs = 0;
let megaSenaGames = [];

for (let index = 0; index < 6; index += 1) {
    megaSenaNumbers[index] = Math.ceil(Math.random() * 60);
    game[index] = Math.ceil(Math.random() * 60);
}

console.log('Sorteados: ' + megaSenaNumbers);
console.log('Meu jogo: ' + game);

for (let i = 0; i < megaSenaNumbers.length; i += 1) {
    for(let j = 0; j < game.length; j += 1) {
        if (megaSenaNumbers[i] === game[j]) {
            matchs += 1;
        }
    }
}

console.log('Acertos: ' + matchs);