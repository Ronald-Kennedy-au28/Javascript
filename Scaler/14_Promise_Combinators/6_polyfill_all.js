
Promise.myAll = function(arr){
    return new Promise((resolve,reject)=>{
        let result = [];
        let totalResolved = 0;
        arr.forEach((item,index) => {
            item.then(res=>{
            // Promise.resolve(item).then(res=>{ handling error where the arguments 
            //are not a func =>Promise.myAll([fetchData(),fetchUser(),4,3])
                result[index] = res; // since, expecting all to resolve, using the index
                totalResolved++;
                if(totalResolved === arr.length){ // bcoz in all we expect all to be resolved
                    resolve(result)
                }
            }).catch(err=> reject(err))
        });
    })
}

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

Promise.myAll([fetchData(),fetchUser(),fetchany(),fetchmoney()])
.then(data=> console.log(data))
.catch(err=> console.log(err))
// [ { name: 'Ron' }, { userId: 28 }, 24, 28 ] => if all resolved
// Not resolved => if even one is rejected