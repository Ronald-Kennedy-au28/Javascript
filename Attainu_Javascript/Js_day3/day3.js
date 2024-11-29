
//ternary operator
var age = 10;
var har = age >= 18 ? console.log("eigible"): console.log("not");

// SWITCH CASE
// var sak = "red"
// switch ( sak){
//     case "red":
//         break;
//     case "green":
//         break;
//     case "yellow":
//         break;
//     default:
//         break;
// }

// while loop
var i = 0;
while(i < 5){
    console.log(i);
    i++;
}

// do while loop
var j = 0;
do{
    console.log(j);
    j++
}while(j<5);

// for loop
for (var k = 0;k < 4; k++){
    console.log(k);
}

// pattern
for(var i = 0;i<4;i++)
{
    var str = "";
    for (var j= 0;j <i+1;j++){
        str+= "*"
    }
    console.log(str)
} 