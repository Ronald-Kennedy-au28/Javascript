
let x = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('7')
    },3000)
})

let q = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('8')
    },3000)
})

async function flalf() {
    const v = await x;  
    console.log(v)
    let y = await q
    console.log(y) // prints immediately though its 3s
    // becoz "q" is a global object already run 3s along with x
    // therefore no waiting time for q
    console.log(7)
    let z = await new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('9')
        },3000)
    })
    console.log(z)
    // however there will be a waiting time for 'z'
    // bcoz it was introduced locally not globally like "q"
    
}
flalf()

