var myObj, x;
myObj = {"name":"John", "age":30, "car":null};
x = myObj.name;
//document.getElementById("demo").innerHTML = x;
console.log(x)




var myObj1 = {
"name":"John",
"age":30,
"cars":[ "Ford", "BMW", "Fiat" ]
}

console.log(myObj1.cars[0])

//WARNING: VERY DIFFERENT FROM PYTHON.
//i represents index in JS.
for(i in myObj1.cars){
    console.log(myObj1.cars[i])
}

var myObj2 = 
{ 
    "PGS": 
       [
         {
            "PG_Name": "PG1"
         },
         {
            "PG_Name": "PG2"
         },
         {
            "PG_Name": "PG3"
         }
       ]
};

for(i in myObj2.PGS){
    console.log(myObj2.PGS[i].PG_Name)
}

//Python - JS  Syntax is very confusing.
console.log(myObj2.PGS.length)