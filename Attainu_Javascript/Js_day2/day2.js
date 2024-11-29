
// anything other than 0 in boolean is true
// var vary = Boolean(45);
// var studentid = 456;
// var student = "Remo";
// console.log(student); // output Remo
// console.log(!student); // output false
// console.log(!!student); // output true
// console.log(student && studentid); // output 456
// console.log(student || studentid); // output Remo
// console.log(!!student && !!studentid); // output true
// console.log(!!student || !!studentid); // output true
// console.log(1+ "1"); // 11 string
// console.log(2+"some"); // 2some string
// console.log(1+"2"+3); // 123 string
// console.log(1+2+"3")// 33 string
// console.log(10-"2"); // 8 number
// console.log(10*"3"); // 30 number
// console.log("12"+"36"); //1236 string
// console.log("had"+false);// hadfalse string
// console.log(false+10); // 10 ni=umber false =0
// console.log(true+10);// 11 number true = 1
// console.log(20-"abc");// Nan 


//// coding challenges
//. Ask a number input from the user, and
// display a message whether that number is 
//prime or not

const prime = prompt("Prime or not: Number = ?");

for ( var i = 2; i < prime; i++){
    if (prime % i == 0){
        console.log("It is not Prime");
        break;
    }
    if (prime % i != 0){
    console.log("it is prime");
    }
} 

// var num = prompt("type the number: ");

// for (i = 2; i <= num; i++)
// {
//     if (num % i == 0)
//     {
//     console.log(" not prime")
//     break
//     }
//     else
//     {
//         console.log("prime")
//     };
    
// }
