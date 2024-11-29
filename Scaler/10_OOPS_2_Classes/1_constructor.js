const pizza1 ={
    toppings:["cheese","pepperoni"],
    size: "large",
    crustType: "thin"
}
const pizza2 ={
    toppings:["veggie","onions"],
    size: "small",
    crustType: "thick"
}

// creating Constructor

function Pizza(toppings,size,crustType){
    console.log(this)
}

const cust1 = new Pizza() // {}
const cust2 = new Pizza(["veggie","onions"],"small","thick") // {}

function Pizza(toppings,size,crustType){
    this.toppings = toppings
    this.size = size
    this.crustType = crustType
    this.describe = function(){
        console.log(`A ${this.size} pizza with ${this.toppings.join(", ")} on a ${this.crustType} base`)
    }
}

const cust3 = new Pizza(["veggie","onions"],"small","thick") 
console.log(cust3) // Pizza {with attributes}
cust3.describe()