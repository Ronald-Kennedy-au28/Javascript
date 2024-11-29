
console.log(this)  // window object

function fxn(){
    console.log(this)  // undefined
}
fxn()

obj ={
    name : "Ron",
    age : 30,
    fxn : function(){
            console.log(this)  // object(obj) itself
            return function(){
                console.log(this)  // undefined
            }
    }
}
obj.fxn()
let fxnExpression = obj.fxn
console.log(fxnExpression) // function itself
fxnExpression()   // undefined
