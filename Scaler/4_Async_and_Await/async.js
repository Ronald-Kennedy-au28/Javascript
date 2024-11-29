
// the async keyword wraps any object under promise
// even though the object is not a Promise

// USING "ASYNC" IN NON-PROMISE OBJECT
async function fxn() { // async keyword must be used before function keyword
    return "mani"
}
let a = fxn()
console.log(a)  // returns a promise object 
// the above ouput is a promise object: how to get the output
a.then(data=> console.log(data)) // resolving when a func is wrapped with async



