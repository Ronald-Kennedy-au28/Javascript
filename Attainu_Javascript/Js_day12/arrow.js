
// Template Strings

let fname = "Mahendra";
let lname = "Dhoni";

console.log(fname + " Singh " + lname);// concatenation

//In Tenmplate Strings

console.log(`${fname} Singh ${lname}`);

let htmlTag = ` 
    <div>
        <div>
            <label for="">
                <h1>
                    
                </h1>
            </label>
        </div>
    </div>`
    // will print as it is with spaces and same lines
console.log(htmlTag);

let str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore enim laboriosam aspernatur quis quod esse animi nesciunt, maiores velit voluptate cupiditatedeserunt consequatur nemo reprehenderit sint autem vel! Assumenda, tenetur."

str.replace
str.split
str.startsWith
str.endsWith
str.includes

// IIFE 
// Immediately Invoked function expression

function small(a,b){
    return a+b;
};// this type of function is "Statement";

let Big = function(a,b){
    return a-b;
};// this type of function is "expression"

//IIFE means

let large = function(){
    return 8;
}();
// automatically inovkes and returns "8";

let xxl = function(k,l,m){
    return k+l+m;
}(8,6,9);// IIFE with arguments


/// Arrow functions

let jill = function(o,p){
    return o+p;
}
// the above function can be written as
let jak = (x,y) =>{x+y}; // only for one statement with return
let jang = (m,n) => console.log(m+n);// only for one statement
let jalak = n => n+2; // for single param
let mal = () => "hail"; // for no param () is compulsory.

// disadvantages of arrow functions

1.// cannot be used when using "this"
2.// cannot be used with constructors: this.age;
3.// cannot use apply or call methods
4.// cannot use yeild