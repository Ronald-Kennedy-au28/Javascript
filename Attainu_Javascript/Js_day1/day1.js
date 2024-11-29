
//to check data type
var myname = "Ronald";
console.log(myname);
console.log(typeof  myname); /// typeof

// no int and float in Js
// only number data type
// for non decimal value, use floor and seal

// ++a || a++;
// var myname = new "Ronald";


// coding challenge' 1
// Write a JavaScript program that prints even numbers
// from 1 to 100 in descending order in the browser console.

for (var i = 100; i > 0;i -=2){
     console.log(i);
 }

// coding challenge 2
//2. Display a multiplication table of a number 
//like so in the browser console. 

const table = prompt("Enter the number");
const limit = prompt("limit of the table");

for (var i = 1; i <= limit; i++){
    console.log(table+"*"+i+"="+(table*i));
}