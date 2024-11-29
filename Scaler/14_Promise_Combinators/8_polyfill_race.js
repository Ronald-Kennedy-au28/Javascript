
Promise.myRace = function(arr){
    return new Promise((resolve,reject)=>{
        arr.forEach((item,index) => {
            Promise.resolve(item).then(res=>{
                resolve(res)
            })
            .catch(err =>{
                reject(err)
            })
    })
})}

function fetchUser(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>resolve({userId:28},1000))
    })
}
function fetchData(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>resolve({name:"Ron"},1000))
        // setTimeout(()=>reject("Not resolved",1000))
    })
}

function fetchany(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>resolve(24),1000)
        // setTimeout(()=>reject("Not resolved"),1000)

    })
}
function fetchmoney(){
    return new Promise(function(resolve,reject){
        // setTimeout(()=>resolve(28),1000)
        setTimeout(()=>reject("Not resolved"),1000)

    })
}

Promise.myRace([fetchData(),fetchUser(),fetchany(),fetchmoney()])
.then(data=> console.log(data))
.catch(err=> console.log(err))

// the first resolved output will return
// if all are rejected then error