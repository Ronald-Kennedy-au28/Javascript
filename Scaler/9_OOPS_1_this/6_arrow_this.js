
console.log(this)  // {}

const arrowfxn =()=>{
    console.log(this)  // {}
}
arrowfxn()

obj ={
    name : "Ron",
    age : 30,
    arrowfxn : ()=>{
            console.log(this)  // {}
            return function(){
                console.log(this)  // {}
            }
    }
}
obj.arrowfxn()
let fxnExpression = obj.fxn
console.log(fxnExpression) // function itself
fxnExpression()   // {}
