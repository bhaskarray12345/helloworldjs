// Dec 31, 2019  - split() function.
// JS - + is used as concatenation.
//
function convertDate(d) {
  var p = d.split("/");
  return (p[2]+p[1]+p[0]);
}

date1 = convertDate('04/09/1965');

console.log(date1);