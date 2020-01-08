let str = 'Winter is coming';
let position = str.indexOf('coming');

console.log(position);

let count = 0;
let position1 = str.indexOf('i');

while (position1 !== -1) {
  count++;
  
  //Find position starting at index of position1+1.
  position1 = str.indexOf('i', position1 + 1);
}

console.log(count);