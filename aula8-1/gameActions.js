// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada. 

const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const dragonAttack = dragonObj => {
    const maxDamage = dragonObj.strength;
    return Math.floor(Math.random() * (maxDamage - 15) + 15); 
};
//console.log(`Dragon attack: ${dragonAttack(dragon)}.`);

// Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorAttack = warriorObj => {
    const minDamage = warriorObj.strength;
    const maxDamage = warriorObj.strength * warriorObj.weaponDmg;
    return Math.floor(Math.random() * (maxDamage - minDamage) + minDamage);
};
//console.log(`Warrior attack: ${warriorAttack(warrior)}.`);

// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.

const mageAttack = mageObj => {
    if (mageObj.mana < 15) return { damage: 'Não possui mana suficiente!', manaConsumed: 0 };
    else {
        const minDamage = mageObj.intelligence;
        return { damage: Math.floor(Math.random() * (minDamage * 2 - minDamage) + minDamage), manaConsumed: 15 };
    }
};
//console.log(mageAttack(mage));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .
// Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
// Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro.
// Adicione ao objeto gameActions uma função de primeira classe que retorna o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.


const gameActions = {
    warriorTurn: warriorAttack => {
        const attack = warriorAttack(warrior);
        warrior.damage = attack;
        dragon.healthPoints -= attack;
    },
    mageTurn: mageAttack => {
        const stats = mageAttack(mage);
        const damageTurn = stats.damage;
        const manaTurn = stats.mana;
        mage.damage = damageTurn;
        mage.mana -= manaTurn;
        dragon.healthPoints -= damageTurn;
    },
    dragonTurn: dragonAttack => {
        const dragonDamage = dragonAttack(dragon);
        mage.healthPoints -= dragonDamage;
        warrior.healthPoints -= dragonDamage;
        dragon.damage = dragonDamage;
    },
    turn: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turn());
 