
function swap(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
}

var x = 1, y = 2;
swap(x, y);


// DONE: Made the swap() function given below work properly so that it is able to swap values passed from outside the function

/**
 * Function to swap given values
 * @param {*} a first value
 * @param {*} b second value
 */
function swap(value) {
    value.first = value.first + value.second;
    value.second = value.first - value.second;
    value.first = value.first - value.second; 
}

// declared an object named value which has two keys - first and second corresponding to the first and the second values respectively
var value = {
    first: 1,
    second: 2
}

console.log(value.first, value.second) // prints 1 2
swap(value);
console.log(value.first, value.second); // prints 2 1