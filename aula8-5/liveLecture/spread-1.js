const names = ['Michelle', 'Joana', 'Simão', 'João', 'Diana'];
console.log(names[0], names[2]);
console.log(...names)
// --> Michelle Simão
// --> Michelle Joana Simão João Diana

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const offlineGames = ['Persona', 'Ni No Kuni', 'ToTA', 'Stardew Valley'];
const onlineGames = ['LoL', 'Dota', 'Overwatch', 'Tibia'];

// forEach
const concatenar = (arr1, arr2) => {
    const finalArray = [];
    arr1.forEach(item => finalArray.push(item));
    arr2.forEach(item => finalArray.push(item));
    return finalArray;
};

console.log(`forEach: ${concatenar(onlineGames, offlineGames)}`);

// concat
console.log(`concat: ${onlineGames.concat(offlineGames)}`);

// spread
const awesomeGames = [...onlineGames, ...offlineGames];
console.log(`spread: ${awesomeGames}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const point = [1.0, 2.2, -6.6];
const otherPoint = [0.1, 3.5, -99.6];

const printPointCoordinators = (x, y, z) => `Point coordinators are x = ${x}, y = ${y}, z = ${z}`;

console.log(printPointCoordinators(...point));
console.log(printPointCoordinators(...otherPoint));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
