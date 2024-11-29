'use strict';

console.log(this) // {} object

function fxn(){
    console.log(this)  // undefined
}
fxn()

obj ={
    name : "Ron",
    age : 30,
    fxn : function(){
            console.log(this)  // object(obj) itself
            function gxn(){
                console.log(this)  // undefined
            }
            gxn()
    }
}
obj.fxn()