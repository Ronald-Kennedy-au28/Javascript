
var str = "ajljd;n;auhidbahkndknkdjojvihainnf";
str.length;
str.charAt(5);// char at 5th index
str.indexOf("d");// index of d
str.endsWith();// endswith
str.lastIndexOf();
str.startsWith();
str.includes();

// template string
console.log(str+"hjduh"+str);
console.log(`${str} jahlha ${str}`);

/// function statement
function fun(){
    console.log("hello");
};
fun();

// function expression
var seg = function(){
    console.log("hoaho");
}
console.log(seg());

// IIFE immediately invoked function expression

var yaro = function(){
    console.log("anti-indian");
}();

// Arrow functions;

var yaro = function(){
    console.log("anti-indian");
};

var yaro = ()=>{
    console.log("anti-indian")
};

var yaro = () => console.log("anti-indian"
)

// arrow does not work with "this"
// arrow does not work with constructors 
// arrow does not work where "this" us is used   
// not with call/apply method