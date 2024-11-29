// FOR RESOLVE
// Code Snippet:

// resolving a promise
promiseObj = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
    }, 3000);
});

console.log(promiseObj);
 
// Output:

// Getting name from DB...
// Promise {<resolved>}
//     __proto__: Promise
//     [[PromiseStatus]]: "resolved"
//     [[PromiseValue]]: "Srishti"

// FOR REJECT

// Code Snippet:

// rejecting a promise
let promiseObj = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        reject(new Error("Could not get the name from DB!"));
    }, 3000);
});

console.log(promiseObj);
 
// Output:

// Getting name from DB...
// Promise {<rejected>: Error: Could not get the name from DB!
//     at setTimeout}
//     __proto__: Promise
//     [[PromiseStatus]]: "rejected"
//     [[PromiseValue]]: Error: Could not get the name from DB! at setTimeout
// Uncaught (in promise) Error: Could not get the name from DB!
//     at setTimeout