const ages = [26,25,39,16,11,43];
const moreAges = [18,68,42];

//alguém menor de idade? // lessThan
//for comum

const verify1 = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 18) return true;
    }
    return false;
};
console.log(verify1(ages));
console.log(verify1(moreAges));

//some - retorna boolean

console.log(ages.some(item => item < 18));
console.log(moreAges.some(item => item < 18));

const lessThan18 = arr => arr.some(item => item < 18) ? 'Há menor de idade' : 'Não há menor de idade';
console.log(lessThan18(ages));
console.log(lessThan18(moreAges));