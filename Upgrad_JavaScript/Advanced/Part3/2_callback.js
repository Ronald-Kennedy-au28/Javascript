
// Passing functions as an argument
// A callback is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of action.

function sum(x,y){
    return x+y
}

function multiply(x,y){
    return x*y
}

function getResults(x,y,operate){
    return operate(x,y)
}

getResults(2,3,sum) // calls sum function => 5
getResults(5,7,multiply) // calls multiply function => 35