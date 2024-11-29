const arr = [1,2,3,4,5,6]

Array.prototype.myFilter = function(cb,intialValue){
    if(typeof cb !== "function"){
        throw new TypeError(`${cb}, not a function`)
    }
    const arr = this;
    let accumulator = intialValue?intialValue:arr[0];
    let startIndex = intialValue?0:1;
    for(let i=startIndex; i<arr.length; i++){
        if(i in arr){
            accumulator = cb(accumulator,arr[i])
        }
    }
    return accumulator
}

const sum = arr.myFilter(function(acu,ele){
    return acu+ele
},0)
console.log(arr)
console.log(sum)