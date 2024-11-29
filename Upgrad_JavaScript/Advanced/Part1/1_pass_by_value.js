
// Pass by value vs Pass by reference

var a = 10;
var b = a;
a = 15;
console.log(a, b);

// Here, both the variables a and b are of primitive type - number. When the variable a is declared, it points to some location in the memory (let’s assume this memory location as M1). When the variable a is assigned the value 10, this value is stored at the location M1 in the memory. Now, when the variable b is declared, it points to some other location in the memory (let’s assume this memory location as M2). When the variable b is initialized with the variable a, it actually copies the value contained in the variable a and then passes this value to the variable b. Now, later, if the variable a forgoes any change(s), the variable b is unaffected because the variable b points to another memory location.

var a = {key1: 1, key2: 2};
var b = a;
a.key1 = 3;
console.log(a, b);

// Here, both the variables a and b are of non-primitive type - object. When the variable a is declared, it points to some location in the memory (let’s assume this memory location as M1). When the variable a is assigned the value as an object, this object value is stored at the location M1 in the memory. Now, when the variable b is declared, it points to some other location in the memory (let’s assume this memory location as M2) but when the variable b is initialized with the variable a, starts referencing to the memory location at which the variable a is present. Thus, it starts pointing to M1. Now, later, if the variable a forgoes any change(s), the variable b is also affected because the variable b points to the same memory location.