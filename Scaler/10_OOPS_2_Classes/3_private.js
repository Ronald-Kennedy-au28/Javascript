
class Pizza{
    // to create private properties add "#" infront of the properties
    #toppings
    #size
    #crustType
    constructor(toppings,size,crustType){
        this.#toppings = toppings
        this.#size = size
        this.#crustType = crustType
    }
    describe(){  // this type of method is memory efficient than function method in "1_constructor.js"
        console.log(`A ${this.#size} pizza with ${this.#toppings.join(", ")} on a ${this.#crustType} base`)
    }
}

const cust3 = new Pizza(["veggie","onions"],"small","thick") 
console.log(cust3.size)
cust3.describe()