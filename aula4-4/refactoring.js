//média

function media(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

//sobrenome

function sobrenome(nome, sobrenome) {
    return (nome + ' ' + sobrenome);
}

// array with 100 characters

function getArray(character) {
    let array = [];
    for (index = 0; index < 100; index += 1) {
        array.push(character);
    }

    return array;
}

console.log(getArray('*'));