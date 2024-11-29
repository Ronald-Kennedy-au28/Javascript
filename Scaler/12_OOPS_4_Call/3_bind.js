// BIND
const person1 = {
    name : "Ronald",
    age : 30,
    describe : function(location){
        console.log(`${this.name} is ${this.age} years old and lives in ${location}`)
    }
}
person1.describe("USA")

const person2 = {
    name : "Anbu",
    age : 27
}

person1.describe.call(person2,"UK") // => this returns the value
// but in bind it returns the funx itself, hence need to store the func
const bindedfxn = person1.describe.bind(person2,"UK") 
bindedfxn()     // or
const bindedfunc = person1.describe.bind(person2) 
bindedfunc("UK")     
