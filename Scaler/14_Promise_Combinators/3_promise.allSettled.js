
function fetchUser(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>resolve({userId:28},1000))
    })
}
function fetchData(){
    return new Promise(function(resolve,reject){
        // setTimeout(()=>resolve({name:"Ron"},1000))
        setTimeout(()=>reject("Not resolved",1000))
    })
}

Promise.allSettled([fetchUser(),fetchData()])
.then(data=> console.log(data))
.catch(err=> console.log(err))

// output => [
//   { status: 'fulfilled', value: { userId: 28 } },
//   { status: 'fulfilled', value: { name: 'Ron' } }
// ]
// output => [
//   { status: 'fulfilled', value: { userId: 28 } },
//   { status: 'rejected', reason: 'Not resolved' }
// ]