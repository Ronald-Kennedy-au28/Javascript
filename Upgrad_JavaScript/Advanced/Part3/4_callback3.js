
// without redundency 
// OBSERVE CAREFULLY
/// the call back function in eventlisteners are asynchronous
// because it is invoked only when triggered

let add = (callback) => {
    let x = 2, y = 3;
    console.log("Sum :", x + y);
    callback();
}

const subtract = (callback) => {
    let x = 2, y = 3;
    console.log("Difference :", x - y);
    callback();
}

const displayCompletion = () => {
    console.log("Finished this operation!");
}

add(displayCompletion);


// Question :The second argument of event listeners is a callback function 
// in synchronous programming.

// Answer :✕ Incorrect
// Feedback:
// It is correct that the second argument of event listeners is a callback 
// function which is invoked when the event specified as the first argument is fired.
//  But the next part of the statement is wrong. The event listeners are not a 
//  part of synchronous programming as they are written in code at one place but
//   they are executed only when the event occurs, thus making them part of 
//   'asynchronous' programming in JavaScript.
