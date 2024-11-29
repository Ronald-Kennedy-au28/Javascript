
// Falsy Values
false
0,-0
null
""
undefined
NaN

// rest all are truthy values like
{} []

if({}) console.log("truthy") // truthy
else console.log("falsy")
if([]) console.log("truthy")  // truthy
else console.log("falsy")
if("") console.log("truthy")
else console.log("falsy")  // falsy
// ()=>{} is also truthy
