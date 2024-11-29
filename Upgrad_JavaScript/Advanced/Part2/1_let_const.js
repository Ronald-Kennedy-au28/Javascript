
//****hoisting does not work on LET and CONST, only on VAR */

// In the last video, you looked at how the variables declared using the var keyword are hoisted 
//to the top of their scope and the variables declared using let / const keywords are not hoisted.

// So to summarise, in this segment you learned about let and const keywords. You learned how a 
// variable declared using const keyword cannot be changed and how a variable declared using let 
// keyword lets you change itself. (This is actually a nifty trick to remember what they do!)

// You also learned that let/const are block scoped, and hence can be quite useful in situations
//  where you’re required to use a variable multiple times in a program, such as in the case of 
//  loops or conditionals.

// You also learned that unlike var, the variables declared using let/const keywords are not 
//  to the top of the scope. Thus, you must always prefer to declare all your keywords using let 
//  hoisted and const keywords as compared to declaring them using var keyword, when following the
// ES6 syntax.