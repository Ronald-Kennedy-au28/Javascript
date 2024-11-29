/// ARRAY destructuring
let arr = ["mani", "govindo", "makapa"]

const [bb7,bb10,bb11] = arr
// if you want to access paritcular ones, go in order, for the ones
// you want skip leave it empty like below;
const [basd] = arr; // for 1st element
const[ , ,ldf] = arr  // for last element;
const[Abor, , asj] = arr // for 1st and last

// OBJECT destructuring
let customer ={    naem : "Sreeram",    age : 42,    city : "hogwart"
}
// for accessing particular keys, no need of spaces like arrays
// we just have to give the same keyname
var {naem} = customer;
var {age} = customer;
var {naem,age} = customer;

// if you want to give a new name it shall be like this
var{naem: firstname, place: city} = customer

// problem

/**
 * Function to greet the user with his/her first name and last name
 * @param {*} person 
 */
const greetUser = (person) => {
    // DONE: Used spread operator to get the values of the keys - firstName and lastName with 
    //alias names fn and ln respectively
    const {firstName: fn, lastName: ln} = {...person};

    // WARNING: DO NOT EDIT THE LINE GIVEN BELOW
    console.log("Hello " + fn + " " + ln + "!");
}

// object for a person
const person = {
    firstName: "Srishti",
    lastName: "Gupta",
    nationality: "Indian",
    gender: "Female"
};

greetUser(person);