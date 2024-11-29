// The scope chain works from inward to outward. This means that a
//  variable is looked for inside the local scope first. If the variable 
//  is found in the local scope, it is taken into consideration.
//   In case the local scope does not contain the variable to be searched for,
//    the control goes to the global scope to look for this variable. 
//    If the variable is found in the global scope, it is taken into consideration.
//     If it is not found even in the global scope, then it means that
//      the variable is not defined anywhere and thus, you get an error 
//      saying that the given variable is ‘not defined’.

// If one function is called inside another function but both the functions
//  are defined separately in the global scope, then a variable defined in one
//   function cannot be referenced inside another function. This is because 
//   in such a case, both the functions have their different local scopes 
//   since they are defined separately in the global scope.


// In the last video, you looked at what lexical scope is. Lexical scope refers to the fact that when
//  one function, referred to as the parent function contains another function referred to as the
//   child function, then the child function can access everything defined inside the parent function.
 

// Lexical scope is also known as the static scope. Remember that in lexical scope, only a child 
// function can access resources of its parents but a parent function cannot access resources of its
//  children.