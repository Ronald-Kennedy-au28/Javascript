
// Type Coercion is the process in which one data type is converted into another in order for
// an operation to be performed.

// converting string to numbers and vice versa
var x = 18;
x = x.toString() // converts to "18"
x = Number(x) // converts back to 18

parseInt(x) // for integers
parseFloat(x) // for float

// difference bw Number() and parse() is that parse() can convert Nan strings as well
// till it reaches a Nan element
// example :  y = "23a" with parse => 23 , but Number => Nan

// six types of data types:
// string, number, boolean, null and undefined , and symbol(ES6)
// undefined is when it is declared but not assigned
// whereas null is has been assigned with empty value.

// undefined vs not defined Reference error
// undefined is declared but not assigned,
// where not defined Reference error trying to access an object which does not exist