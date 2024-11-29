var arr = [12,50,40,62,20];
// numbers divisible by 10

var counter = 0;
for (var i=0; i<arr.length;i++){
    if(arr[i] % 10== 0){
        //console.log(arr[i])
        counter++;
    }
}
console.log("numbers divisible are:"+ counter);
//console.log(arr.length)

// for in - loop
var arra = [12,50,40,62,20,54,80];

var count = 0;
for(var k in arra){
    if(arra[k]%10==0){
        count++;
    } console.log(k);
}
console.log(arra.length)
console.log("numbers divisible are:"+ count);


// for-in loop in string
var stem = "america";
var rev1 = "";
var rev2 = "";

for(l in stem){
    rev1 = rev1+stem[l];
    rev2 = stem[l]+rev2;
}
console.log(rev1,rev2);

// for-in loop in objects
var data= {
   "hey": "ron",
    "city": "bang",
    "age": 28
}
console.log( data.age);
console.log( data.city);
console.log(data.hey);

for (key in data){
    console.log(data[key]);
}

// for-of loop
var bar = "valmiki";
var dar  = [21,84,56,7,4,5];
var kar = { usu: 56};

for (h of bar){
    console.log(h);
};
for (u of dar){
    console.log(u);
};
for (n of kar){
    console.log(n);// for-of doesnt work in objects
}

// Array assignment and reference and its strange behaviour
var lol = [21,"akn",true,];
var omg = lol;
lol[0]= 12; // omg[0]= 12 whatever changes are made to
// lol , it happens in omg bcoz it is a reference
// unlike in python it takes a separate memory
// here is Js it omg points to the same memory
lol[25]= 8;// wont give an error instead
// lol = [12,"akn",true,empty* 19,8]
// where empty*19 are undefined

/// Accessing Array
var haray = [12,5,9,4,3,1];
haray.length;/// len(haray)  -- python ,,, /// haray.length
console.log(haray);
haray.push(2);console.log(haray);// adds the element at the end
haray.pop();console.log(haray);// no parameters are given, even if given
// only the last element will be poped
haray.splice(2,1, 5);console.log(haray); //2= position of the element to take 
// 1= no of elements to be deleted -- 5 = element to be replaced with
haray.shift(); // removes the first item in the array
console.log(haray);
haray.unshift("mona"); // add the item in the beginning of the array
console.log(haray);
// with splice we can delete , add or replace n number of elements
haray.splice(0,1,"rona");//splice can be used with 2 or 3 parameters
console.log(haray);

//conversion of integer and string
var a = "2";
var x = "8";
console.log(a,typeof a);console.log(x,typeof x);
var b = parseInt("2");
console.log(b,typeof b);
var c = parseInt(x);
console.log(a,typeof a);console.log(c,typeof c);

var bu = 14;
pu = bu.toString(); // to convert int to string
