
// When the word async is prepended to a function, it is assumed that the function returns 
// a promise object.
// async & await are internally based on promises.
// The await keyword makes the code wait until the promise is resolved or rejected.
// 1. async & await keywords were introduced in ES8 (ES2017), which are internally based on 
// promises but makes the code even more readable as compared to promises.
 

// 2. When the keyword async is prepended to a function, it can be safely assumed that a promise 
// is  returned from that function. Even if the function does not explicitly return a promise
 //object, 
// it is made to implicitly return a promise object after resolving it with the value that 
// is returned from the function.

// Following is the example code, which you looked at in the video:

// Code Snippet:

let foo = async () => Promise.resolve("Srishti");
foo().then(val => alert(val));
 

// Output:

// Srishti (inside the alert box)