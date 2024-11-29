

//Objective -> serial task asynchronously

/// one inside the other which are dependent
const fs = require("fs");

fs.readFile('f1.txt',function(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data+"");
        fs.readFile("f2.txt",function(error,data){
            if(error){
                console.log(error);
            }else{
                console.log(data+"")
                fs.readFile("f3.txt",function(error,data){
                    if(error){
                        console.log(error);
                    }else{
                        console.log(data+"");
                    }
                })
            }
        })
    }
}) // this is called call back hell
