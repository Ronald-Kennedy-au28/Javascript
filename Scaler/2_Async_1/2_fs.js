
let fs = require('fs')

let data = fs.readFileSync("filename")
console.log(data + "")


fs.readFile("filename",(data,error)=>{
    return data +""  // to convert data to string
})   // async files executes depending upon the size of the file
// small to big => first come first serve

