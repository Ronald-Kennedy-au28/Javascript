
// function is also an object prototype

var animal = {moves:true};
var plants = {food:true};

animal.__proto__
plants.__proto__

animal.__proto__ = plants

// In the last video, you looked at what prototypes are and what the __proto__ property does. The __proto__ property either refers to an object or is null. You also looked at how you can assign a prototype of an object to another object, thus, making the latter access the resources of the former. This is what is called prototypal inheritance.

// Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.

// Nearly all objects in JavaScript are instances of Object, which sits on the top of a prototype chain.
