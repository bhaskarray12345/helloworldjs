var myObj2 = 
{ 
    "PGS": 
       [
         {
            "PG_Name": "PG1",
            "MDesc": [ 
                        {
                            "MDesc_Name": "PG1-M1",
                            "item": ["PG1-M1-item1", "PG1-M1-item2", "PG1-M1-item3"] 
                        },
                        {
                            "MDesc_Name": "PG1-M2", 
                            "item": ["PG1-M2-item1", "PG1-M2-item2"]
                        },
                        {
                            "MDesc_Name": "PG2-M3",
                            "item": ["PG1-M3-item1", "PG1-M3-item2", "PG1-M3-item3"]
                        }
                     ]
         },
         {
            "PG_Name": "PG2",
            "MDesc": [
                        {
                            "MDesc_Name": "PG2-M1", 
                            "item": ["PG2-M1-item1", "PG2-M1-item2", "PG2-M1-item3"]
                        },
                        {
                            "MDesc_Name": "PG2-M2",
                            "item": ["PG2-M2-item1", "PG2-M2-item2"]
                        },
                        {
                            "MDesc_Name": "PG2-M3",
                            "item": ["PG2-M3-item1", "PG3-M3-item2", "PG2-M3-item3"]
                        },
                        {
                            "MDesc_Name": "PG2-M4",
                            "item:" :["PG2-M4-item1", "PG2-M4-item2"]
                        }
                    ]
         },
         {
            "PG_Name": "PG3",
            "MDesc": [
                        {
                            "MDesc_Name": "PG3-M1",
                            "item": ["PG3-M1-item1", "PG3-M1-item2", "PG3-M1-item3"]
                        },
                        {
                            "MDesc_Name": "PG3-M2",
                            "item": ["PG3-M2-item1", "PG3-M2-item2"]
                        }
                    ]
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
        console.log(myObj2.PGS[i].MDesc[j].MDesc_Name)
        
        for(k in myObj2.PGS[i].MDesc[j].item){
            console.log(myObj2.PGS[i].MDesc[j].item[k])
        }
    }
    

}

