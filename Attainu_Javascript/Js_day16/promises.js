
// today we learn more about the promises

// try and catch

const getData = document.getElementById("data");
getData.addEventListener("click",tryCatch);

const display = document.getElementById("display");
try{
    async function tryCatch(){
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        const readableStream = await response.json();
        display.innerHTML = JSON.stringify(readableStream);
    }
}catch(err){
    console.log(err);
}

// creating an instance of class Promise
// have to learn the below from somewhere else again
let flag = true;
const promiseObj = new Promise((resolve,reject)=>{
    if(flag){
        setTimeout(()=>{
            console.log("if block, set Timeout")
            resolve();
        },
        2000)
    } else reject()
});
console.log(promiseObj);
promiseObj.then(
    res=>console.log("res"),
    err=>console.log("err")
)

// rest and spread operator


//rest operator // i think collects element in an array
function sum(n1,n2,...nums){
    if (nums.length !==0){
        var al = nums.reduce((sum,i)=>
        sum+=i);
    }else{
         var al =0;
    }
    
    return al+n1+n2; 
}
var total = sum(1);// n2 = undefined => n1+n2 = Nan
var total = sum(1,2,18,6,5);// nums = [18,6,5]
console.log(total);

// spread operator // i think it breaks down array

const arr = [1,2,3,4,5];
console.log(arr);// [1,2,3,4,5]
console.log(...arr)// == console.log(1,2,3,4,5) 
// both resulting =  1 2 3 4 5

// use case of spread operator
// for copying arrays

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];

// to combine all three into 1 array
const final = arr1.concat(arr2).concat(arr3)
//instead used spread operator
const spread = [...arr1,...arr2,...arr3];
//bothe final and spread will result
// [1,2,3,4,5,6,7,8,9]