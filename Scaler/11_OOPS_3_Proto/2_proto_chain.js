function Car(model,year){
    this.model = model
    this.year = year
}
Car.prototype.describe = function(){
    console.log(`This is a ${this.model} ${this.year}`)
}// instance.describe()    -------   invoking
// Car >> constructor prototype(describe) >> object Prototype

// hasOwnProperty is a method of object Prototype

// we can still access as ==> Car.hasOwnProperty("year")

// if we create a method in a constructor the order goes like
// object  >> constructor  >> prototype of every object

Car.prototype.hasOwnProperty = function(){
    console.log(`constuctor's hasOwnProperty`)
} 
// when we invoke the above method the search goes like this
// Car >> constructor prototype(hasOwnProperty) >> object Prototype(hasOwnProperty)
// constuctor prototype(hasOwnProperty) is invoked

// we can also add methods to object prototype but not recommended
Car.prototype.__proto__.custom = function(){
    console.log("custom fxn in __proto__") 
} // this change is applied to all the object prototypes


