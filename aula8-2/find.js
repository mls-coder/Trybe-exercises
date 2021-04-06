const users = [
    {name: 'Marge', lastName: 'Simpson', isDriver: true},
    {name: 'Homer', lastName: 'Simpson', isDriver: true},
    {name: 'Bart', lastName: 'Simpson', isDriver: false},
    {name: 'Lisa', lastName: 'Simpson', isDriver: false},
    {name: 'Maggie', lastName: 'Simpson', isDriver: false}
];

const findNonDriver = arr => (arr.find(person => person.isDriver === false)).name;

console.log(findNonDriver(users));

//implementando find

const find = (arr, action) => {
    for (let i = 0; i < arr.length; i++) {
        if (action(arr[i], i, arr)) return arr[i];
    }
    return undefined;
};

const check = obj => obj.isDriver === false;

console.log(find(users, check).name);