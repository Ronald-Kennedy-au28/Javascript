


// There are two types in which the variables can be passed - by value and by reference. 
// All the primitive types are passed by value and all the non-primitive types are passed 
//by reference.
// The .__proto__ property of a variable refers to either an object or to null. 
// Remember that you can implement inheritance in JavaScript by assigning the prototype of an 
// object to another object.
// There are two kinds of scope in JavaScript:

// Local Scope - Anything inside a function is in its local scope.

// Global Scope - Anything not inside any function is in its global scope.

// A closure is basically an inner function that has access to the outer (enclosing) function’s
//  resources due to the scope chain where a child can access all the resources of its parent.


// All the variables which are declared in your code are moved at the top and remembered by the 
// compiler. This is the concept of hoisting.

// The popular ‘this’ keyword points to the global window object in the context of browsers when 
// written inside a regular function call. However, in the case of a method, which is 
// defined as a function inside an object, the ‘this’ keyword points to the object to which 
// the method is bond.

// The methods - bind(), call() and apply() are used to bind a function while passing the 
// desired scope to the inner function. This is also useful to solve the problem of 'this' 
// keyword pointing to the global object inside a function in an object.