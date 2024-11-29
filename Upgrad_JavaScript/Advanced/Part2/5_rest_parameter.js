
// REST PARAMETER
//1
let arr = [1, 2, 3]

function ddumalu(...arr){
    return a+b+c+d
}

ddumalu([1, 2, 3]) //rest

function dalu(multy,...arr){
    return arr.forEach(each => each *= multy)
}

ddumalu(1, 2, 3) //rest

// To summarise, the spread operator and rest parameters are vice-versa of each other. The spread 
// operator is used to transform an array into its individual elements whereas the rest parameters
//  are used to transform individual elements into an array. Also, the spread operator is used when
//   calling a function whereas the rest parameters are used in the function parameters.