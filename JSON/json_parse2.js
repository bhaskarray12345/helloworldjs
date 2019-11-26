
var myObj2 = 
{ 
    "PGS": 
       [
         {
            "PG_Name": "PG1",
            "MDesc": ["PG1-M1", "PG1-M2", "PG2-M3"]
         },
         {
            "PG_Name": "PG2",
            "MDesc": ["PG2-M1", "PG2-M2", "PG2-M3", "PG2-M4"]
         },
         {
            "PG_Name": "PG3",
            "MDesc": ["PG3-M1", "PG3-M2"]
         }
       ]
};
//Python - JS  Syntax is very confusing.
console.log('length of PGS is' + myObj2.PGS.length)

//loop the outer loop.
for(i in myObj2.PGS){
    console.log(myObj2.PGS[i].PG_Name);
    console.log('--------------');
    console.log('length of MDesc is' + myObj2.PGS[i].MDesc.length)

    //loop the inner loop.
    //index of MDesc
    for(j in myObj2.PGS[i].MDesc){
        console.log(myObj2.PGS[i].MDesc[j])
    }
}

