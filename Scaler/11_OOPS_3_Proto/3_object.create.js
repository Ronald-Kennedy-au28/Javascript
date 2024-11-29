// without the constructor
const carPrototype ={
    display : function(){
        return `This is a ${this.model} ${this.year}`
    }
}
const car = Object.create(carPrototype) // creates a common method without constructor
// the above display method is not in the object but in the first prototype and not in __proto__
// object >> prototype(display) >> prototype of object

// Car.prototype.describe = function(){}  // this is done when there is a class and need for common method
car.model = "Swift"
car.year = 2010
console.log(car)


// Questions
function Cat(name){
    this.name = name
}
const Ben = new Cat("Ben")
Ben.__proto__ = {age:5}

console.log(Ben.age) // 5
console.log(Ben.hasOwnProperty("age")) // false => bcoz the property age is in constructor proto not in object itself
console.log(Ben.__proto__ === Cat.prototype) 
// false => bcoz   Cat.prototype== {} ==> no common methods or properties defined
// Ben__proto__ == {age:5}  in the constructor prototype