
var operation = {
    a: 1,
    b: 2,
   
    add: function() {
        this.a + this.b;
        console.log("a = " + this.a + ", b = " + this.b);
        var print = function() {
            console.log("a = " + this.a + ", b = " + this.b);
        }
 
        print();
    }
}

operation.add();

// Regular function call: ‘this’ -> global object (window object in context of browsers)
// Method: this -> object to which the method is bond

var person = {
    firstname : "Ronald",
    get : function(){
        console.log("Outer: "+ this.firstname)
        var print = function(){
            console.log("Inner : "+ this.firstname)
        }
        print(); // this is a regular function which is not bonded to any object
        //therefore points to global object which is window object and hence, undefined
    }
}
person.get() // this is a method and it is bonded to object : person
// output :
// Outer: Ronald  
// Inner : undefined


var employee = {
    firstName: "Srishti" ,
    lastName :  'Gupta',
    get : function(){
        console.log(`${this.firstName} ${this.lastName} is an employee of our organization.`)
    }
}
employee.get()