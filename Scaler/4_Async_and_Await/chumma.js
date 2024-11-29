
// // Js is a single threaded lang 
// // synchronous 
// //  inbuilt func of Js Async method

// // console.log(1)
// // setTimeout(()=>{console.log(2)},0)
// // console.log(3)

// // let a = require('fs')

// // let b = a.readFileSync('file1.txt')
// // console.log(b+"")

// // let b = a.readFile('file1.txt',(err,data)=>{
// //     console.log(b)
// // })

// // a.readFile("f1.txt",(err,data)=>{
// //     console.log(data+"");
// //     a.readFile("f2.txt",(err,data)=>{
// //         console.log(data+"");
// //         a.readFile("f3.txt",(err,data)=>{
// //             console.log(data+"")
// //         })
// //     })
// // }) this is callback hell

// // let h = new Promise((resolve,reject)=>{
// //     resolve("hello")
    
// // })
// // h.then((data,err)=>{
// //     console.log(data)
// // })

// let fs = require('fs')

// let f1 = fs.promises.readFile("data");
// let f2 = fs.promises.readFile("data");
// let f3 = fs.promises.readFile("data");

// f1.then(function(data){
//     console.log(data+"")

// }).catch(function(error){
//     console.log(error);
// })
// f2.then(function(data){
//     console.log(data+"")
// }).catch(function(error){
//     console.log(error);
// })
// f3.then(function(data){
//     console.log(data+"")
// }).catch(function(error){
//     console.log(error);
// })


// // async and await

// async function kani() {
//     console.log(2)
//     return 2
// }


// function kani() {
//     console.log("kani")
// }
// kani()
// let a = kani()
// a.then((data,err)=>{
//     console.log(data)
// })


async function boni() {
    const f1 = await fs.promises.readFile("file1.txt")
    const f2 = await fs.promises.readFile("file2.txt")
    const f3 = await fs.promises.readFile("file3.txt")
    
}
boni()

async function readFilesOneByOne(){
    try{
        let data1 = await fs.promises.readFile('file1.txt');
        console.log(data1+"");
        let data2 = await fs.promises.readFile('file2.txt');
        console.log(data2+"")
        let data3 = await fs.promises.readFile('file3.txt');
        console.log(data3+"");
    }catch(error){
        console.log(error);
    }
}

readFilesOneByOne();








