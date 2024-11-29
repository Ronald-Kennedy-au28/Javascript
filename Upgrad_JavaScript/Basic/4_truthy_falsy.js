
// Following are considered as the falsy values:

// false
// 0
// ""
// ''
// null
// undefined
// NaN

// Declare three variables num1, num2 and num3 & initialize them with number values

// Write code to check which is the smallest number amongst num1, num2 and num3
// If you have 3 numbers, num1, num2 and num3, then to find out the smallest number among them, 
// you will have to apply the nested if...else. The implementation would be that you would check
// two numbers, 
// - let's say num1 and num2. Now once you've checked if num1 is smaller than num2,
// you'll check if num3 is greater than num1 or smaller than num1. If num1 is smaller than 
// num3 too, 
// well then num1 is the smallest.

// Now consider what would be happening in the else case for num1 smaller than num2. This means 
//that num2 is smaller than num1. 
// How would you proceed now? Well if num2 is smaller than num1, then you have to check if 
//num2 is smaller than num3 or not. 
// If num2 is smaller than num3, then num2 is the smallest number. You might be wondering 
//what if num3 is smaller than num1.
// Well, you don't need to worry about that as you took care of that case in the scenario
// when num1 was smaller than num2.
var num1 = 1;
var num2 = 2;
var num3 = 3;

if(num1 < num2){
    if (num1 < num3) console.log(num1)
    else console.log(num3)
}else {
    if(num2 < num3) console.log(num2)
    else console.log(num3)
}