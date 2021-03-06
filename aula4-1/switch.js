// Você com certeza está super feliz com seus novos conhecimentos sobre JS, não é?! Então vamos praticar mais um pouco antes de chegar na sessão de exercícios. Vamos!!!

// Crie uma variável para armazenar o estado da pessoa candidata ao processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .

// A estrutura switch/case é utilizada quando queremos executar diferentes ações. A expressão que passamos para o switch é avaliada apenas uma vez, e o seu valor é comparado em cada caso. Se essa comparação for verdadeira, o código de bloco do caso avaliado é executado. Se nenhum valor satisfazer os casos listados, é executado o código em default . 

let status = "lista";

switch(status){
    case ("aprovada"):
        console.log("Parabéns, você foi aprovada!");
        break;
    case ("lista"):
        console.log("Você está na lista de espera.");
        break;
    case ("reprovada"):
        console.log("Você está reprovada.")
        break;
    default:
        console.log("Não se aplica.");
        break;
}