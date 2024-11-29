
// Remember that it is a good coding practice to give the name of the class starting 
// with a capital letter.

// You also learned how a class can derive all the properties and methods of another class. 
// Thus, a child class can inherit a parent class properties and methods using the
// ‘extends’ keyword.  An important point to note is that when a child class is 
// implementing a parent class, you should call the super() function inside the
// constructor of the child class. This will call the parent class constructor 
// first to derive the properties and methods of the parent class. Also remember that
// before using the ‘this’ keyword inside a class constructor, you need to call 
// the super() function. All the classes in JavaScript extend the Object class by default.

// Using classes is an alternative to use the prototypal inheritance achieved using
// the prototype chain, which you have seen in the earlier segment.

// Thus, the following code snippet which you saw in the earlier segment while using
// prototypal inheritance in ES5

let animal = {
   moves: true
}

let rabbit = {
   eats: true
}

rabbit.__proto__ = animal;

console.log(rabbit.moves);

// can be rewritten as follows using the classes in ES6 syntax:

class Animal {
   constructor() {
       this.moves = true;
   }
}

class Rabbit extends Animal {
   constructor() {
       super();
       this.eats = true;
   }
}

let rabbit = new Rabbit();
console.log(rabbit.moves);
// The output for both the code snippets given above will be:
true

////

class Person {
    constructor(name) {
        this.name = name;
    }
 
    getName() {
        return this.name;
    }
}
 
class Employee extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
 
    getID() {
        return this.id;
    }
}
 
let emp = new Employee("Srishti", "E101");
console.log(emp.getName(), emp.getID());