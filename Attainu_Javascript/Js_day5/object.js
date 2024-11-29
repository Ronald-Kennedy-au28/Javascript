
// // objectj key and values
// // in this chapter we learn that
// // the value of a key can be function

// var obj = {
//     "fname": "Ronald",
//     lname: "ken",
//     age: 28,
//     lang: ["tamil","kannada"],
//     greet: function(){
//         return "hello!"
//     }
// };
// console.log(obj["greet"]());//console.log(obj.greet());
// console.log(obj["lang"][0])

// // learnt about classes of Javascript

function User(){
    this.greet = function(){
        return "hello!";
    }
};
var nayar = new User();
console.log(nayar.greet());

function Muser(apk){
    this.greet = function(){
        return "hello!"+apk;
    }
};
var namma = new Muser("ron");
console.log(namma.greet());

function user(){
    this.greet = function(apk){
        return "hello!"+apk;
    }
};
var namma = new user();
console.log(namma.greet("ron"));
