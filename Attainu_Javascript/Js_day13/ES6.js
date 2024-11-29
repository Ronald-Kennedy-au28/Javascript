
// ES6
// destructuring

/// desrtructuring in array

const arr = ["Ron",28,"not yet"];

function Info(arr){
    console.log(`fname: ${arr[0]}, age: ${arr[1]}, isGraduated: ${arr[2]}`);
    // need to print the contents of array, the order of the array doesnot change

    const fname = arr[0]; 
    const age = arr[1];
    const grad = arr[2];
    console.log(`fname: ${fname}, age: ${age}, isGraduated: ${grad}`)
    // for better readability , changing appropriate names

    // now comes the destructure
    var [hname,Age,duate] = arr;
    console.log(`fname: ${hname}, age: ${Age}, isGraduated: ${duate}`)

    // if we need to avoid any element,we do--
    var [hname,,duate] = arr; // leave it empty
    console.log(`fname: ${hname}, isGraduated: ${duate}`)
}


// destructing in object

const product = {
    name : "pipe",
    category: "hardware",
    price: 120
}

function plumb( product){
    // in objects destructing variable should be same as the
    // keys in the object, should match unlike arrays
    var {name,price} = product;
    console.log(`Name: ${name}, Price: ${price}`);

    // in objects destructing we can shuffle the names in the destructure
    // it wont affect bcoz we are matchin the names of the keys
    var {price,name} = product;
    console.log(`Name: ${name}, Price: ${price}`);

    // to leave out an element instead of the empty space like in array
    // we give underscore or leave the element itself as in prev example
    var {price,_,name} = product;
    console.log(`Name: ${name}, Price: ${price}`);

}

/// __proto__ and prototype

var array = new Array();
// when you create an instance of a class
// here the class- Array

array.__proto__ 
// shows all the methods that are available for array from class "Array"
// methods like array.lenght, array.find, array.shift etc

array.__proto__.__proto__
// this gives the object methods that are in class Array
// check the console for examples
// in javascript all things are objects

Array.prototype
// this gives the methods of the class "Array"

array.__proto__ == Array.prototype;
// both provide the same blueprints 


// Mcq

for(var i = 0;i < 3; i++){
    setTimeout(()=>i,1);
} // returns 3,3,3 -- bcoz of global scope
// same loop with let gives
for(let i = 0;i < 3; i++){
    setTimeout(()=>i,1);
}// 0,1,2 -- bcoz of block scope

// ES6 class

class Stadium{
    constructor(game,venue){
        this.game = game;
        this.venue = venue;
    }
    pitchReport(report){
        return this.game+this.venue+report;
    }
}

let wankede = new Stadium("mum","navi");

// inheritence

class Automobiles{
    constructor(c,t){
        this._color = c;
        this._type = t;
    }
    engine(rpm){ // no need of the keyword function in class
        return rpm;        
    }
    get color(){ // getter method
        return this._color;
    } // used as private variables as in other languages


    set color(val){  // setter method
        this._color = val;
    } // this method is used to change the value indirectly
}

// to inherit 

class Car extends Automobiles{
    constructor(color,type){
        super(color,type)
    }
}

var yamaha =new Automobiles("red","4");
// to call getter method
yamaha.color 
// to call setter
yamaha.color = 25;

/// learn class, inheritance and getter,setters somewhere else