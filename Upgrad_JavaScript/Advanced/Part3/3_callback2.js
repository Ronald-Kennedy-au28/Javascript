
// with redundency = means repeating functions
// here the argument passed in both the functions are same
// hence, redundency

let add = (callback) => {
    let x = 2, y = 3;
    console.log("Sum :", x + y);
    callback();
}

add(function() {
    console.log("Finished this operation!");//redundency = same operation
});

const subtract = (callback) => {
    let x = 2, y = 3;
    console.log("Difference :", x - y);
    callback();
}

subtract(function() {
    console.log("Finished this operation!");//redundency = same operation
});