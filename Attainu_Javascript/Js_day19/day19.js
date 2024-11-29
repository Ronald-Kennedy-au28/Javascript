
// Python, Java , C++, C#
// OOPS

// * Abstraction
// * Encapsulation
// * Inheritance
// * Polymorphism

// Javascript 
// Functional Programming paradigm
// three Principles
//1. PURE FUNCTIONS
//2. IMMUTABILITY
//3. FUNCTIONAL COMPOSITION

// ****** PURE FUNCTIONS
        function habibi(n,m){
            return n+m;
        } // return as it is unlike (return n+m+2);// brackets would be impure

// pure functions has three types 
//1. Referential Transparency
//2. SideEffect free



// 1. Referential Transparency -  same values of parameters gives same output
function sum (a,b){
    return a +b;
}
sum(4,5);
sum(2,6);
sum(4,5);// calling with the same params should return same value

// Not Referential Transparency
let u = 2;
function sub(l,k){
    return l+k+u;
}
sub(4,5);
u =8;
sub(4,5);// this is not transparent because
// with same parameters it gives different values


// 2.  SideEffect free - // are the functions that do not have:
// no consolelog, alert, prompt,reassigning parameters,modifing parameters
function aleka(o){
    console.log("chalega");
    alert("how is it going")
    return 0
}// has sideEffects 



// ****** IMMUTABILITY 
//  basically this principle means the variables and objects should not be mutated
// if you know that they shouldn't be changed

// to make the variables and objects immutable
// we can use const

const money = "silakidum";
// cannot change

// but for arrays and objects we can change the elements 
// if they are const

const arr = [1,2,3,4];
arr[2] =8;

const obj = {
    peru: "mani",
    age: 45
}
obj.age = 88;

// therefore to make them not change we use

const list = Object.freeze([7,8,9]);
const dict = Object.freeze({hesaru: "permaul", movie: "viduthalai"});



//***** FUNCTIONAL COMPOSITION
    // func(func(func()))

const x = 5;

function jill(y){
    return x+y;
}

function jang(y){
    return y*y*y;
}

function jak(y){
    console.log(y)
}

jak(jang(jill)(4));

/// Instead we can call the above functions by 
// importing a module called "Ramda" and

const myComposition = R.compose(jak,jang,jill);       
myComposition = (0);

///#### Uses of these Functional Programming paradigm

// clean code
// readable
// easy to debug
// easy to write test cases
// this is faster
// the return values can be cached or "memoized" to avoid recomputing
