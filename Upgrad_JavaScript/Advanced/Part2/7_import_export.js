// 1
const s = (...arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}
export default s;
//2
// export default sum = (...arr) => {
//     return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
// }
//3
import rum from 'utils.js';
console.log(rum(1, 2, 3, 4));

///4
const sum = (...arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}
  
const average = (...arr) => {
    return sum(...arr) / arr.length;
}
  
export {sum, average};

//5
// import {sum} from 'utils.js';
// import {average} from 'utils.js';

// console.log(sum(1, 2, 3, 4));
// console.log(average(1, 2, 3, 4));

//6 
import {sum, average} from 'utils.js';

console.log(sum(1, 2, 3, 4));
console.log(average(1, 2, 3, 4));

//7
import {sum as add} from 'utils.js';

// 8
import * as fn from 'utils.js';

console.log(fn.sum(1, 2, 3, 4));
console.log(fn.average(1, 2, 3, 4));