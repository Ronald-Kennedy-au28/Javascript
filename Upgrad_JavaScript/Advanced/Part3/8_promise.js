
// There are two types of code in asynchronous programming:

// 1.Producer Code: The code that produces some result
//  Consumer Code: The code that consumes the result produced by the producer code
// 2.      A promise is an object which makes the result produced by the producer code 
// available to the consumer code, thus linking them together.

// 3.The producer code is contained inside the promise object. 

// 4.The producer code, which is inside the promise object, contains resolve
// & reject callbacks.

// 5.The producer code is executed as soon as the promise object is created.
// You do not need to explicitly call the producer code.

// You also learned the following syntax of defining a promise object:

// Syntax of a Promise:

let promiseObj = new Promise((resolve, reject) => {
    // producer code
});



// 1.  The internal properties of an object are the ones which cannot be accessed directly or 
// manipulated. Also, the internal properties are enclosed within double square brackets [[]].
 

// 2.  A promise object consists of two internal properties:

// PromiseStatus
// PromiseValue
// 3.  When a promise object is created, the [[PromiseStatus]] property is initialized 
// with ‘pending’ and the [[PromiseValue]] property is initialized with undefined.