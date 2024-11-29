var  a = 1;

function b(){
    console.log(a); // a =>   1
    a = 10; // without var here it replaces global value of a = 1 as a = 10 
    // return;
    console.log(a)
   
    function ab(){
        console.log(a);
         a = 20; // again without var here it replaces global value of a = 10 as a = 20
        console.log("something");
        console.log(a)
        
    }ab();
    console.log(a)
    return;
}
console.log(a)
b();
console.log(a); // hence a = 20


// var kag = "holland";
// console.log(kag);
// function damaka(){
    
//     console.log(kag);
//     kag = "nether";
//     console.log(kag);
//     function rama(){
//         console.log(kag);

//         kag = "nama";
//         console.log(kag)
//     }rama();
// }
// damaka();
// console.log(kag);

// var far = "money";
// for(i of "honey"){
//     console.log(i);
//     far = "cherry";
//     console.log(far);
// }
// console.log(far);
