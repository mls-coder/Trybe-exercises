
const sum = (...num) => {
    return num.reduce((acc, cur) => acc + cur);
};

const nums1 = [1,2,3,4];
const nums2 = [1,2,3,4,5];
const args = [...nums1, ...nums2];

console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5));
console.log(sum(...args))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const formatDate = (year, month, day, ...rest) => `${day}/${month}/${year} - hour ${rest[0]}:${rest[1]}:${rest[2]}`;

const formatDate2 = (year, month, day, ...rest) => `${day}/${month}/${year} ${typeof rest}`;

console.log(formatDate(1994, 10, 19, 6, 36, 32));
console.log(formatDate2(1994, 10, 19, 6, 36, 32));

