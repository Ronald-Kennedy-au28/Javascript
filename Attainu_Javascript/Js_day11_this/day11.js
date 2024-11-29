
/// we are gonna learn about "this"
//this***

console.log(this)// output = window, this = window
// "this" is an object like window
// "this" refers to the current object
// example, if we console.log(this), it shows window object

var redmi = {
    camera : 120,
    processor : "snap",
    os : "android",    
    
}

var red = function(){
    console.log(this.camera,this.processor,this.os)
};
// redmi.red();// output  redmi
// calling the red() , gives "this", 
// but "this" refers to the object
/// and the object here is redmi

var apple = {
    camera : 420,
    processor : "ios",
    os : "sop",    
    
}

red.call(apple);
red.call(redmi);
// call function takes more than one parameter
// first id the object
// second and so on would be first object's contents/paramerters;


// WE ARE BASICALLY CREATING A CLASS
function Person(name,age, address){
    this.name = name;
    this.age = age;
    this.address = address;
};

function Student(name,age, address, salary){
    Person.call(this,name,age,address); //// call()= inheriting
    this.salary = salary;
}

var obj = {
    name: "",
    age: 0,
    address:"",
}

Person.call(obj,"mani", 45,"jala");//
console.log(obj);//{name: 'mani', age: 45, address: 'jala'}
Person.apply(obj,["mani", 45,"jala"]);// the parameters in single array
console.log(obj)


//// Date()
var date = new Date();
// Date () is a object like window and has many methods