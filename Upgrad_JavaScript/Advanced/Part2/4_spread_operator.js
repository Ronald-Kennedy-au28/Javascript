
// SPREAD OPERATOR
//1
let arr = [1, 2, 3]

function ddumalu(a,b,c,d){
    return a+b+c+d
}

ddumalu(...arr) //spread

// 2 concatenation
let mar = [1,2,3], sar = [4,5,6] 
let kar = [...mar,...sar]

// 3 copy by value

let har = [1,2,3]
let rar = [...har]

let sani = {name : "gopi"}
let tuni = {...sani}

const mergeStudents = (classA, classB) => {
    /* Create a variable with identifier mergedClass
    Variable mergedClass must contain the classA's students, then two students 
    "Emily" and "Frank", and then class B's students 
    */
    let mergedClass = [...classA, "Emily","Frank",...classB]
    //  Print the variable mergedClass on the console
    console.log(mergedClass)
}

// arrays containing names of students in two classes
const classA = ["Alice", "Bob", "Catherine", "Dan"];
const classB = ["George", "Jane", "Katy", "Luis"];

mergeStudents(classA, classB);