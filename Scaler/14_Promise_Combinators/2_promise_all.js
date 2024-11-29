
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

Promise.all([fetchUser(),fetchData()])
.then(data=> console.log(data))
.catch(err=> console.log(err))

// output => [ { userId: 28 }, { name: 'Ron' } ] if both are resolved,else
// output => Not resolved