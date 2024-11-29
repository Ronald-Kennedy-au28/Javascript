//Output--> 10. The correct output should be error(reference error- x not defined), because once the parent3 fxn encounters 'return' the first FEC will be destroyed. For, chidFxn() (which is  child3's fxn),it's only lexical scope will be the GEC with the complete parent3 fxn structure and childFxn, there won't be any memory of x. 
//However, the output is still 10, because of CLOSURE

//CLOSURE in JavaScipt is a function/form of lexical scoping that has access to the variables/properties in its parent function/scope, even after the parent function is completely executed or even when it encounters 'return'.

//A child function bundles the properties of its parent/outer function with its lexical scope, even after the parent/outer function has been destroyed. Thus, by creating this CLOSURE, when the parent/outer function is no longer in the memory,the child function can still have access to its variables/properties.

//Disadvantage of CLOSURE- unnecessary storage of memory which causes slowness while loading the data- not user friendly.

// In JavaScript , FUNCTIONS ARE CALLED FIRST-CLASS CITIZENS because:
//  1. a function can be stored in a variable (EXPRESSION FUNCTION).
//  2. one or more functions can be stored within a single function (NESTED FUNCTION).
//     Here, nested functions have access to variables or properties from their outer/ enclosing functions. Just like- lexical scope/scope chain.
//  3. we can also pass fuctions as parameters (a function can accept functions as arguments).
//  4. we can return function from a function.

//Temporal Dead Zone (TDZ)= Is a container in which "let" and "const" variables are allocated. This prevents/ restricts the access of these variables until they are executed.
//Example-

console.log(b);  //Error- (reference error)cannot access b before initializing
let b; //or let b= 10;  //This line is read and the variable is stored in TDZ as undefined(or 10), so it won't be accessed or executed until the next line is executed.


// Every time, a function is invoked, a Function Execution Container (FEC) opens above the GEC in the call stack.
// Every second FEC has access to its parent/previous/first FEC---> This is called:Lexical Scoping.

// This chain of connection between every FEC (the current FEC has access or connection to evry other FECs before it) in the call stack is called Scope Chaining.