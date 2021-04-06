const ages = [26,25,39,16,11,43];
const moreAges = [18,68,42];

//todas as pessoas são maiores de idade? // eighteenOrAbove
//for commum

const aboveOrEighteen = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 18) return false;
    }
    return true;
};
console.log(aboveOrEighteen(ages));
console.log(aboveOrEighteen(moreAges));

//every
const eighteenOrAbove = arr => console.log(arr.every(item => item > 17));
eighteenOrAbove(ages);
eighteenOrAbove(moreAges);

const eighteenOrAbove2 = arr => console.log((arr.every(item => item > 17)) ? 'Todos são maiores' : 'Nem todos são maiores');
eighteenOrAbove2(ages);
eighteenOrAbove2(moreAges);