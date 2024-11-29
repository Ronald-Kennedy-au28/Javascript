
// there are two types of consumer code:

// 1. then() method

// 2. catch() method


/////********** */

// CASE A: When the promise is RESOLVED

// defining the promise object with the producer
let promise = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
    }, 3000);

});

// defining the consumer
promise.then(val => {
    console.log(`Name received from DB = ${val}`);
}, err => {
    console.log(`Error occurred = ${err}`);
});
 
// Output:

// Getting name from DB..
// Name received from DB = Srishti
 

// CASE B: When the promise is REJECTED

// defining the promise object with the producer
let promiseObj = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        reject(new Error("Error getting name!"));
    }, 3000);

});

// defining the consumer
promiseObj.then(val => {
    console.log(`Name received from DB = ${val}`);
}, err => {
    console.log(`Error occurred = ${err}`);
});
 
// Output:

// Getting name from DB..
// Error occurred = Error: Error getting name!


// Also, a very important point to be noted is that the order of the resolve and reject callback 
// methods must remain the same. The first parameter of the producer code is always treated as the 
// resolve() callback method which represents that the code executed successfully and the second 
// parameter of the producer code is always treated as the reject() callback method which represents
//  that the code encountered some error while in execution. You cannot reverse their order.
