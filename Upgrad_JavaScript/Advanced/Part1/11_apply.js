
// Apply is similar to Call except the arguments other than this 
// must be in an array

var person = {
    firstname : "Ronald",
    get : function(){
        console.log("Outer: "+ this.firstname)
        var print = function(type,role){
            console.log("Inner : "+ that.firstname,"I am a "+type +role)
        }.apply(this,["Javascript","developer"] )  // will bind the person object
       // print(); // invoking is not required for Call and Apply, like Bind;
       // the Apply and the Call call themselves
    }
}
person.get()


// You looked at how the apply() method works in the last video. Now, were you able to identify
//  the difference between the call() method and the apply() method. Well, the only difference
//   between the call() method and apply() method is that call() method accepts arguments 
//   passed individually and separated with a comma, as seen earlier. On the other hand, 
//   the apply() method is called with an array of arguments. The receiving function, which 
//   is the function on which the call() method or the apply() method is used, behaves 
//   the same in both the cases. It accepts the parameters individually separated by comma.