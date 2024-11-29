
function fetchUser(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>resolve(22),1000)
        setTimeout(()=>reject("Not resolved"),1000)

    })
}
function fetchany(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>resolve(24),1000)
        setTimeout(()=>reject("Not resolved"),1000)

    })
}
function fetchmoney(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>resolve(28),1000)
        setTimeout(()=>reject("Not resolved"),1000)

    })
}
function fetchData(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>resolve("Ron"),1000)
        setTimeout(()=>reject("Not solved"),1000)
    })
}

Promise.any([fetchData(),fetchUser(),fetchany(),fetchmoney()])
.then(data=> console.log(data))
.catch(err=> console.log(err))


// output => if the first setteld is resolved = returns the resolved output
// output => if all the resolves are slower than any reject = returns [AggregateError: All promises were rejected]