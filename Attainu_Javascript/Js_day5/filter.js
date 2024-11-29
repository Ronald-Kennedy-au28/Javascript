
///FILTER FUNCTION

// In filter function, we have an if condition
// while iterating the array
/// the elements that satisfy the condition
// enter the new array
// hence, the no of the elements != the original array or maybe equal

var tony = [8,7,2,1,6];
// new array with even numbers of tony\

var stark = []
for(r of tony){
    if (r%2==0){
        stark.push(r);
    }
}console.log(stark);

//FILTER METHOD **
function man(jarvis){
    return jarvis%2==0
}
var iron = tony.filter(man);
console.log(iron);