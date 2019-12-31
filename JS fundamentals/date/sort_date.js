//Dec 31, 2019
//Two ways of sorting dates in a list of JSON objects.
//
//OUTPUT:
//[ { name: 'January', plantingDate: '2018-01-17T17:00:00.000Z' },
//  { name: 'February', plantingDate: '2018-02-04T17:00:00.000Z' },
//  { name: 'March', plantingDate: '2018-03-04T17:00:00.000Z' } ]
//[ { name: 'January', plantingDate: '2018-01-17T17:00:00.000Z' },
//  { name: 'February', plantingDate: '2018-02-04T17:00:00.000Z' },
//  { name: 'March', plantingDate: '2018-03-04T17:00:00.000Z' } ]
//
// The first way is usage of new Date().
// There is no need.
// Latter way is bettwe way.

var a = [
  {
    "name": "February",
    "plantingDate": "2018-02-04T17:00:00.000Z",
  },
  {
    "name": "March",
    "plantingDate": "2018-03-04T17:00:00.000Z",
  },
  {
    "name": "January",
    "plantingDate": "2018-01-17T17:00:00.000Z",
  }
]

a.sort(function(a,b){
  return new Date(a.plantingDate) - new Date(b.plantingDate)
})

console.log(a)

a.sort(function(a,b){
  return a.plantingDate > b.plantingDate
})

console.log(a)