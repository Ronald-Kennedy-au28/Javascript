
///REDUCE FUNCTION

// in reduce func, the output is generally of element - one
// it is bascially storage of an empty array

var captain = [2,7,6,1,9];
// multiplication of the elements of captain
var america = 1;
for (a of captain){
    america*=a;
}console.log(america);

// reduce method , we have 4 arguments
// annotator,value,index, array
var war = function(rik,am){
    return rik*=am;
}
var marvel = captain.reduce(war,1);// here 1 is the initial value of rik= annotator
console.log(marvel);