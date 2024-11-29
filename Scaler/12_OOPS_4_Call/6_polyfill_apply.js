// polyfill of apply is same as call

function greet(place){
    console.log(`Hi ${this.name}`)
}

const person = {
    name : "Ron",
    age : 30
}
// obj={},args=[] ==> default values
Function.prototype.myApply = function(obj={},args=[]){ // not ...args as we are expecting an arrray
    if(typeof this !== "function"){
        console.log("Not a function")
    }else{
        obj.fxn = this
        obj.fxn(...args) // spread
        delete obj.fxn  
    }
    
}

greet.myApply(person,["Bangalore"])