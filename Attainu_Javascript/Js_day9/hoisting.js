
/// HOISTING

// well hoisting and closures are somewhat related to scopes

// Hoisting
// In hoisting before a variable is console.logged or
// a function is called ---
/// the javascript engine reads the entire file
// and allocates the memory for the variables and functions 
/// but the catch here is 


/// if console.log is before the variable, it will say undefined
console.log(a); // output : undefined
var a = 9;
/// if no variable created then
console.log(b); // output : reference errror , b is not defined

/// but in functions the memory stored takes the entire function
// and therefore returns the function unlike variable
jill();  // output : dum
function jill(){
    console.log.apply("dum");
}
// if  function is only mentioned(not called)
console.log(duck); // output :  function duck(){
                                //   console.log("mani");
                               //}
function duck(){
    console.log("mani");
}
