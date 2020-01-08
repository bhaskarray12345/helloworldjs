const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

const items = ['item1', 'item2', 'item3']
const copy = []

// before forEach()
for (let i = 0; i < items.length; i++) {
  copy.push(items[i])
}

// after
items.forEach(function(item){
  copy.push(item)
})

copy.forEach(function(item){
    console.log(item)
})




//This naming is wrong.  const is immutable.
const a = []
const b = []
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element)
  a[index] = element
  b.push(element)
}


// Notice that index 2 is skipped, since there is no item at
// that position in the array...
//[2, 5, 0, 9].forEach(logArrayElements);  <== didnt work.
const c = [2, 5, 0, 9]
c.forEach(logArrayElements)
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9

console.log(a)
console.log(b)
