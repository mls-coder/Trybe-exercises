const sum = (value1, value2) => {
    if (typeof(value1) !== 'number' || typeof(value2) !== 'number') {
        throw new Error('Os valores informados devem ser do tipo number.')
    } 
    return value1 + value2;
}

console.log(sum(5,4));