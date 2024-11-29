
// Promise is an object in JS which has success, failure and 
// a pending state

let myPromise = new Promise((resolve,reject)=>{
    let a = 5;
    let b = 5;
    if (a === b) resolve("It is equal"); 
    else reject("not equal")             
})

myPromise.then((data)=> console.log(data)) // runs when entered resolve()

myPromise.catch((err)=> console.log(err)) // runs when entered reject()

myPromise.finally(()=> "will run when promise is not in pending state") // success or failure