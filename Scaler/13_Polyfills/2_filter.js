const arr = [1,2,3,4,5,6]

Array.prototype.myFilter = function(cb){
    if(typeof cb !== "function"){
        throw new TypeError(`${cb}, not a function`)
    }
    const arr = this;
    let newArr = []
    for(let i=0; i<arr.length; i++){
        // if(cb(arr[i],i)){
        //     newArr.push(arr[i])
        // }
        if(i in arr){ // checking for sparse array [ <1 empty item>, 2, <1 empty item>, 4, <1 empty item>, 6 ]
            newArr[i]= cb(arr[i],i)
        }
    }
    return newArr
}

const evenArr = arr.myFilter(function(ele){
    return ele%2 === 0
})

console.log(arr)
console.log(evenArr)