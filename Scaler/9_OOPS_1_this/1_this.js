'use strict';

// if we do not use let,var or const
// for example
let num = 20;
nim = 30 // here we are trying to update num but mispelled
// but js creates a new space for nim
console.log(num) // expecting 30 but 20 is printed 

// if we use "use strict", it will throw error for "nim"