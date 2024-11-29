
// PROTOTYPE

obj = {"name" : "Santro", "year" : 2006}
// obj >> object prototype

arr = [1,2,3,4,5]
//  arr >> arr prototype >> object prototype

function Car(model,year){
    this.model = model
    this.year = year
    this.describe = function(){
        console.log(`This is a ${this.model} ${this.year}`)
    }
} // instance.describe()    -------   invoking
// Car(describe) >> constructor prototype >> object Prototype

// the "describe" function is commoon to all instances hence taking more memory

function Car(model,year){
    this.model = model
    this.year = year
}
Car.prototype.describe = function(){
    console.log(`This is a ${this.model} ${this.year}`)
}// instance.describe()    -------   invoking
// Car >> constructor prototype(describe) >> object Prototype
