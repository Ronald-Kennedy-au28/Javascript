//***MAP, FILTER AND REDUCE */

// MAP

// in map() function the callback func iterates the array
// and the number of elements are same------\

var thor = [ 6,8,2,4,3];
// square of each element [36,64,4,16,9]
var ragnorak = [];

for (i=0;i<thor.length;i++){
     ragnorak.push(thor[i]*thor[i]);  
} console.log(ragnorak);
//
// using MAP ()
var loki = function(ok){
    return ok*ok;
}
var asgard = thor.map(loki);
console.log(asgard)
