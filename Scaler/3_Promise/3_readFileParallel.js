// random outputs depending upon the size

const fs = require("fs");

const f1Promise = fs.promises.readFile("f1.txt");
const f2Promise = fs.promises.readFile("f2.txt");
const f3Promise = fs.promises.readFile("f3.txt");
// f1Promise,f2Promise,f3Promise = fnPromise.resolve() 
// fs does this resolve work in the backgroud

f1Promise.then(function(data){
    console.log(data+"")
}).catch(function(error){
    console.log(error);
})

f2Promise.then(function(data){
    console.log(data+"")
}).catch(function(error){
    console.log(error);
})

f3Promise.then(function(data){
    console.log(data+"")
}).catch(function(error){
    console.log(error);
})