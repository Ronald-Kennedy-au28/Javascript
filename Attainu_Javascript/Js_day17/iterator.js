
//Iterators and Generators

// Iterators

// basically iterators works in 
//1. array , 2. string, 3. objects

//for loops of iteratable objects

// for (i in array/string/objects ) // here i gives index/key
// the above will work in all the three situations

// for (i of array/string/objects) // here i gives values
// this loop works only in array and string , not in object

// bcoz array and string has functions called [Symbol.iterator]
// when you array.[Symbol.iterator] this helps in the iteration
// this function helps in keys/ indexes of array or strings

// but in objects we can access the value only with keys
// in array and string the keys are fixed like: 0,1,2,3,4,5,6,7,8,9

// in objects its difficult hence 
// WE CREATE AN ITERATOR FUNCTION IN THE OBJECT ITSELF
// so when for(i of object) {print(i)}  will not throw error

let obj = {
    "name" : "Ron",
    "age" : 28,
    [Symbol.iterator]: function() {
        let count = 0;
        return { // returns an another object with func
            next : function(){
                count++;
                switch (count){
                    case 1:
                    return{
                        done : false,
                        value :obj.name
                    }
                    case 2 :
                        return{
                            done : false,
                            value :obj.age
                        }
                        default :
                        return{
                            done : true,
                            value :undefined
                        }
                    }
                }
            }

        }
    }
 // now we can do the for loop

 for (i of obj){
    console.log(i)//will print the values
 }