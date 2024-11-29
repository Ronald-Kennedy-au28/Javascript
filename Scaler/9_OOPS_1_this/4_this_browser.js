
console.log(this)  // window object

function fxn(){
    console.log(this)  // window object
}
fxn()

obj ={
    name : "Ron",
    age : 30,
    fxn : function(){
            console.log(this)  // object(obj) itself
            return function(){
                console.log(this)  // window object
            }
    }
}
obj.fxn()
let fxnExpression = obj.fxn
console.log(fxnExpression) // function itself
fxnExpression()   // window object
