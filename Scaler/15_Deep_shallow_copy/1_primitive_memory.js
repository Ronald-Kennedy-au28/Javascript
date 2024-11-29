// Primitive types : Number, String, Boolean, Null and undefined

let a = 10;
let b = a;
b = 1  // for primitive types have storages in stack not in heap, therefore are unique  
console.log(a)
console.log(b)
console.log(a === b)   // true
// a and b have separate memory
// the memory for primitive data types are stored in STACK

// Reference data types

let obj1 = {name :"Ron",age : 18}
let obj2 = {name :"Ron",age : 18}
console.log(obj1 === obj2)  // false
// the memory is stored in heap with different addresses
// while the pointers are in stack
// therefore, when equality is checkedd the addresses are different
// hence, false

let obj3 = obj1
obj1.name = "Alex"   // or obj1.name = "Alex"
console.log(obj3.name) // both obj3 and obj1 name is = Alex
