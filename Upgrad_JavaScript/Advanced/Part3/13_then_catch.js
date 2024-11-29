
// 1.The second argument of the then() method is equivalent to the only 
// argument of the catch() method.


// 2.You should either write a then() method with successCallback as well as errorCallback 
// or a then() method with only successCallback and a catch() method with an errorCallback.

// 3.You always need to define a then() consumer, no matter which approach you are using, in order 
// to handle the success result

// WAY 1:

// defining the promise object with the producer
let promiseObj = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
    }, 3000);

});

// defining the consumer - then() method
promiseObj.then(val => {
    console.log(`Name received from DB = ${val}`);
}, err => {
    console.log(`Error occurred = ${err}`);
});


// WAY 2:

// defining the promise object with the producer
let promiseObj1 = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
    }, 3000);

});

// defining the consumer - then() method
promiseObj1.then(val => {
    console.log(`Name received from DB = ${val}`);
});

// defining the consumer - catch() method
promiseObj1.catch(err => {
    console.log(`Error occurred = ${err}`);
});