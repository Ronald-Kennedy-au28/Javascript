// 1
var person = {
    firstname : "Ronald",
    get : function(){
        console.log("Outer: "+ this.firstname)
        var that = this
        var print = function(){
            console.log("Inner : "+ that.firstname)
        }
        print();
    }
}
person.get()

// 2

var person = {
    firstname : "Ronald",
    get : function(){
        console.log("Outer: "+ this.firstname)
        var print = function(){
            console.log("Inner : "+ that.firstname)
        }.bind(this)  // will bind the person object
        print();
    }
}
person.get()

// 3
var person = {
    firstname : "Ronald",
    get : function(){
        console.log("Outer: "+ this.firstname)
        var print = function(role){
            console.log("Inner : "+ that.firstname,"I am a "+role)
        }.bind(this, "developer")  // will bind the person object
        print();
    }
}
person.get()

// 4
window.firstname = "Nivedha"
var person = {
    firstname : "Ronald",
    get : function(){
        console.log("Outer: "+ this.firstname)
        var print = function(){
            console.log("Inner : "+ that.firstname)
        }.bind(window)  // will bind the window object
        print();
    }
}
person.get()


// You can pass any context to the bind() method. This is the first argument of the bind() method.
//  Whatever is passed as the context, the ‘this’ keyword inside the function to which the bind()
//   method is applied, starts pointing to the passed context.
 
// You can also pass other arguments to the bind() method. But note that the first argument must
//  always be the context. The rest of the arguments can be anything that the bind() method takes 
//  and the function, to which the bind() method is applied, accepts in parameters.
 

// Apart from the bind() method, we also have other methods in JavaScript using which, you can solve
//  this problem of the ‘this’ keyword. Let’s look at one more such method in the next segment.

