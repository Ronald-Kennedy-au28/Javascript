
// How to create an event
// lets say there are 3 div tags
// one inside the other
// child,parent and grandparent
// we create Ids in these html tags

var btnElement = document.getElementById("grandparent");
// here we create a variable and assign to 
// the object of DOM = document
// the object document can be accessed using
// inbuilt function, getelement by Id, class, tag
function joker(){
    console.log("gp clicked");
}
btnElement.addEventListener("click",joker);
// here we access an evvent with the object created
// addeventlistener takes two parameters
// click and function, here joker

e.stoppropagation// stop other events related(gp and parent) when this(child) is clicked
e.stopimmediatepropagation// when there are 2 functions for an element we use this to stop
// the other