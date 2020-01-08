const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);


s1 = 'abcde';
s2 = 'abc';

//Generates 5X3 matrix.
let memo = [...Array(s1.length)].map(e => Array(s2.length));

console.log(memo);