//  we will be learning about "this"

console.log(this);
// will log "window"

function fun(){
    console.log(this);
    // also logs "window"
}
fun();
window.fun();

var obj = {
    fname: "rona",
    age: 28,
    greet: function(){
        var age = 14
        console.log(this.age);//28
        console.log(age); // 14
        // logs "obj"
    }
}
// "this" works the immediate closure object
// here it is "obj"
// in the above it is "window";
obj.greet();


var product1 = {
    pro : "mobile",
    category : "elec",
    price : 100,
    description : function(){
        console.log(this.price);
    }
}
product1.description();

var product2 = {
    pro : "jeans",
    category : "clothing",
    price : 1000,
    // description : function(){
    //     console.log(this.price);
    // }
}
// to use description from product1 in product2
product1.description.call(product2);
// or

// description.call(product1);
//description.call(product2);
// if the description is separate like

var description = function(oops,jaks){
   console.log(this.price)+oops+jaks;}

// parameters of call
description.call(product2,"asnfdnk","asdfnksnkfn;k");
// first param will be the object
// second and rest will be the functions parameters


function Person(naam,age,address){
    this.naam = naam;
    this.age = age;
    this.address = address;
}

function Employee(naam,age, address, city){
    // Person.call(this,naam,age,address);
    Person.apply(this,[naam,age,address]);
    this.city = city;
}

var obj21 = {};

Person.call(obj21,"ron",28 ,21,"ben");
console.log(obj21);
// apply takes the all the parameter in an array except the object
Employee.apply(obj21,["ron",28 ,21,"ben"])
console.log(obj21);

// dates
var date = new Date(); // creating an abject from class "Date"
console.log(date.getTime()) //1684148923145
console.log(date.getFullYear()) // 2023
console.log(date.getUTCDate())  //15
console.log(date.toUTCString()) //Mon, 15 May 2023 11:08:43 GMT


//scopes and ,let and const

// in var
console.log(ron);// prints undefined
var ron = "good"

// in let
console.log(ron);// prints error
let ron = "bad";//
// in let the memory allocation happens in
// the script scope
// it does not get allocated in global scope
// Its accessible only after initialization

// let has block scope and script scope
// unlike var, which has local and global scope

if(true){
    let tel = "mani";
    console.log(tel);
    // gets assigned in block unlike var
    // where var scopes are changed only in functions
    //let tel = "sollu";
    tel = "sollu";// this is allowed
    console.log(tel);
    // two initialization of same variable is not allowed
    // only in var is allowed
}

// outside the scope is allowed 
let tel = "gopi";
tel = "alop";
// we can change the variable but in const

const mani ="kafla";
//mani = "kulfi"  // error
//  we cannot change

//const a;//
//a = "laka" 
//declare and assign the constant beginning/
// cannot assign later

const arr = [1,2,3];
//arr = [2,5,8];// cannot change the arr itself but
console.log(arr) // error
arr[0] = [85];// can do , no error


// in var if local scope it decalred without any
// keyword, it is taken as var
// then it is pushed to global scope
function fun(){
    dummy = 10;
}
fun();
console.log(dummy) // 10