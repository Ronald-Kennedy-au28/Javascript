// APPLy is similar to CALL but the arguments are in ARRAY  

function greet(course,drink,num,snacks){
    console.log(`Hello! friends. I am ${this.name} from ${course}`)
    console.log(drink,num,snacks)
}
greet.apply(person1,["Scaler","tea",3,"muruku"]) 
greet.call(person1,"Scaler","tea",3,"muruku") 

// Use case of APPLY
Math.max(4,8,9)  // => 9
const arr = [2,5,8,6,4,7,3]
// to calculate the max in "arr" without using loop or spread operator
Math.max.apply(null,arr)  // => null = not ddirecting to any object
// the above can be done in spread operator after the ES6
Math.max(...arr)
// before ES6 apply was used instead of spread operator