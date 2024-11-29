
// Call is similar to bind -- only difference is that the anonymous function
// is not required to invoke.
// the Call function invokes automatically

var person = {
    firstname : "Ronald",
    get : function(){
        console.log("Outer: "+ this.firstname)
        var print = function(role){
            console.log("Inner : "+ that.firstname,"I am a "+role)
        }.call(this, "developer")  // will bind the person object
       // print(); // invoking is not required for Call, like Bind; the Call calls itself
    }
}
person.get()

// In the last video, you looked at the call() method. Like bind() method, you can also pass multiple
//  arguments to the call() method but the first argument need to be the context. The bind() and call
//  () methods differ from each other on the basis of the fact that you explicitly need to call the
//   function on which the bind() method is applied. This is because the bind() method returns the
//    function which needs to be called later. However, you do not need to do so in case of the call
//    () method. The function on which you apply the call() method is invoked implicitly when the 
//    control reaches it. Thus, you do not need to explicitly call the function on which you apply
//     the call() method.