// CALL => borrowing a function from an object and using it as if it owns the method
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

// to use the "person1.describe" func in person2
person1.describe.call(person2,"UK")   // its like calling => person2.describe()

function greet(course){
    console.log(`Hello! friends. I am ${this.name} from ${course}`)
}

greet.call(person1,"Scaler")