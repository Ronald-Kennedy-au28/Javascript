
class Pizza{
    // Static means properties that are not associated with the instance created but the class itself
    static totalPizzaCount = 0;
    constructor(toppings,size,crustType){
        this.toppings = toppings
        this.size = size
        this.crustType = crustType
        Pizza.totalPizzaCount++ // everytime a instance is created "totalPizzaCount" increments
    }
    describe(){  // this type of method is memory efficient than function method in "1_constructor.js"
        console.log(`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${this.crustType} base`)
    }

    static getPizzaCount(){
        console.log(Pizza.totalPizzaCount)
    }
}

const cust3 = new Pizza(["veggie","onions"],"small","thick") 
cust3.describe()

// Inheritance

class Stuffed extends Pizza{
    constructor(toppings,size,crustType,stuff){
        super(toppings,size,crustType)
        this.stuff = stuff
    }// method "describe" is automatically inherited

    describeStuffing(){
        console.log(`Stuffed with ${this.stuff}`)
    }
    // overiding the parent method
    describe(){
        super.describe()
        this.describeStuffing()
    }
}
const cust4 = new Stuffed(["cheese","pepperoni"],"large","thin","paneer") 
cust4.describe()

