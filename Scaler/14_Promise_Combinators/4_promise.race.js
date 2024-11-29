
function fetchUser(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>resolve(28),500)
    })
}
function fetchData(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>resolve("Ron"),1000)
        setTimeout(()=>reject("Not resolved"),5000)
    })
}

Promise.race([fetchData(),fetchUser()])
.then(data=> console.log(data))
.catch(err=> console.log(err))

// output => one output with less seconds