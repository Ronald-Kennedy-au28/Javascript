// Polyfill is the creation of few objects and functions 
// that are not available in low end devices

let arr = [1,2,3,4,5]


Array.prototype.myMap = function(cb){
    if(typeof cb !== "function"){
        throw new TypeError(`${cb} is not a function`)
    }
    let arr = this;
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        newArr[i] = cb(arr[i],i)
    }
    return newArr
}

const dbArray  = arr.myMap(function(ele){
    return 2*ele
})
console.log(dbArray)