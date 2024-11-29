
// conversion of int to string
var hey = 19;
var rey = hey.toString();
console.log(hey,typeof hey);
console.log(rey,typeof rey);

// functions of array
var mon = [5,6,8,3,1,2];
mon.push(4);
mon.pop();
mon.splice(); // 2 or 3 arguments
mon.shift; // removes first element
mon.unshift; // adds element in the start

//MAP function

var bhai = [1,2,3,4,5];
// new array with squares of bhai array
// with normal loop
var logo = [];
for (k of bhai){
    logo.push(k*k);
};
console.log(logo);
// the other way is with map()****
var saab = function(item){
    return item*item;
}
var maga = bhai.map(saab);// callback function or
console.log(maga);
var lagan = bhai.map(function(item){return item*item*item;})

var a = lagan;console.log(typeof a);console.log(typeof lagan)
var b = "my name is: "+lagan;console.log(typeof b);

///***MAP HAS THRRE ARGUMENTS */
///MAP(VALUE= EACH ELEMENT, INDEX, ARRAY ITSELF)
var faf = [4,5,8,61,4,];
var plesis = function(value,idx,ara){
    console.log(value,idx,ara);
}
var du = faf.map(plesis);
