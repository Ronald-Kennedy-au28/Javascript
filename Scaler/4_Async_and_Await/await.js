
// HOW TO USE "ASYNC" AND "AWAIT" IN PROMISE OBJECT

let p = new Promise((resolve,reject)=>{
    resolve("hello")
})
// the solution for this "p" is:
p.then(data=> console.log(data)) // 

// to use "await" the it should be before a promise object
// the above can be written as

let q = new Promise((resolve,reject)=>{
    resolve(1)
})
async function fxv() {
    console.log(3)
    const v = await q  // before a promise object
    console.log(v)
    console.log(2)
}
console.log(4)
fxv();
console.log(5) // this will print before the await promise,
// when func call goes to await it exits the func and executes 
//other globals and then comes back to the promise object 
//and then prints everything serially

// if there is a async function like "setTimeout" 
// it would still work serially and wait for promise object to solve
// and then execute the following code
let x = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('7')
    },3000)
})

async function flalf() {
    const v = await x;  
    console.log(v)     // first prints this and then "gopi"
    console.log("gopi") // in general it would print first
    // but in this case of async-await it would print serially
}
flalf()
