// Function.prototype.mycall = function (){
//     console.log("my own call")
// }         // or 

Function.prototype.mycall = function mycall(obj,...args){  // this will be available for all the functions
    console.log("my own call")
    console.log(this) // greet function is the instance/object ==> [Function: greet]
    console.log(obj) // obj is the person  ==> { name: 'Ron', age: 30 }
    obj.fxn = this  // creating a new of in object person with greet(this)
    //const person = {name : "Ron", age : 30, greet : function(){console.log(`Hello ${this.name}`)}
    console.log(obj) // { name: 'Ron', age: 30, fxn: [Function: greet] }
    obj.fxn(...args)   // invokes function greet  ==> Hello Ron
    delete obj.fxn 
    console.log(obj) // obj person without the greet func ==> { name: 'Ron', age: 30 }
} /// both works the same
///...args inside a function is rest, enclosed in parathesis is spread
function greet(place){
    console.log(`Hello ${this.name}`)
}
const person = {
    name : "Ron",
    age : 30
}

greet.mycall(person)  
greet.mycall(person,"Bangalore")  