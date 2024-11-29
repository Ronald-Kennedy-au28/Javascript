
// VAR ,LET AND CONST
// ways initializing a variable

//VAR
var hag = 45;
var hag = 54;
// but this cannot be done in let and const
let jak = 65;
jak = 25;
// can change but not using let again
const kar = 54;
// cannot change at all

// var has global and local scope
// hoisting done in global scope

// let and const are in script and block scopes
// hoisting done in script and block
let mon = 45;
{
    let mon = 25;
    console.log(mon);// in block it acts like local unlike 
                    // var where it acts like global
}
