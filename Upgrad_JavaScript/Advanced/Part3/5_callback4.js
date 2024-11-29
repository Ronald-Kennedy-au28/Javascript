
// Code Snippet: without callback

let fname;

const getName = () => {
   // get data from database
   setTimeout(() => {
       fname = "Srishti";
   }, 2000); 
}

const greet = () => {
   console.log(`Hello ${fname}`);
}

getName();
greet();
 
// Output:
// Hello undefined


// Code Snippet: with callback

let lname;

let get = (cb) => {
	// get name from DB
	setTimeout(() => {
		lname = "Srishti";
		cb();
	}, 2000);
}

let greett = () => {
	console.log(`Hello ${lname}`);
}

get(greett);

// Output:
// Hello Srishti

// Code Snippet: passing the parameter received from the DB to the callback function 
//inside the setTimeout


let getNamey = (cb) => {
	let name;
	// get name from DB
	setTimeout(() => {
		name = "Srishti";
		cb(name);
	}, 2000);
}

let greety = (nameVal) => {
	console.log(`Hello ${nameVal}`);
}

getNamey(greety);

// Output:

// Hello Srishti

// PROBLEMS

// 1: Write a function to create an order ID in the DB. You can mock this functionality
//by using a setTimeout() method which, after 2 seconds, assigns a value 101 to the order ID.

//  2: Write a callback function which prints the order ID to the console in this format:
// Order placed successfully with order ID = 101.

//  3: Invoke first function while passing in the callback function.

let create = (mani) => {
    setTimeout(()=>{
        let order = 101;
        mani(order)
    },2000)
}

let display=(i)=> console.log(`Order placed successfully with order ID = ${i}.`);
create(display)