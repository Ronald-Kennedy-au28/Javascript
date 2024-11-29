// for non-strict

console.log(this) // {} empty object

function fxn(){
    console.log(this) // global object
}
fxn()

obj ={
    name : "Ron",
    age : 30,
    fxn : function(){
            console.log(this)  // object(obj) itself
            function gxn(){
                console.log(this)  // global
            }
            gxn()
    }
}
obj.fxn()

let fxnExpression = obj.fxn
console.log(fxnExpression) // function itself
fxnExpression()   // global object