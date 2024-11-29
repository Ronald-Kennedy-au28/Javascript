// 1
function add(x, y) {
    console.log(x+y);
}
add(1, 2); //prints 3

// 2
add(1, 2); 
function add(x, y) {
    console.log(x+y);
} //prints 3

var add;
add(1, 2);
//  Uncaught TypeError: add is not a function
//  Well, it will throw a type error and say that add is not a function. This is because the variable
//   add contains the default value undefined and undefined value cannot be considered as a function.

// 3  ******************** VERY IMPORTANT******************
add(1, 2);
var add = function(x, y) {
    console.log(x + y);
};
// Uncaught TypeError: add is not a function
// This will instead throw a type error saying “add is not a function”. This is because add is a
//  variable here and you are assigning a function to this variable. Now, as you know that
// variables are hoisted in JavaScript to the top, so this code will be transformed to:

// 4 the above is hoisted like below 
// ******************** VERY IMPORTANT******************
var add;
add(1, 2);
add = function(x, y) {
    console.log(x + y);
};
// So, we saw what hoisting is. Now, how can you prevent it? You can do so by declaring all your variables at the top of the scope where they are needed to be referenced. Also, you should try to initialize the variables that will not change their values in future so as to prevent their undefined behaviour. 