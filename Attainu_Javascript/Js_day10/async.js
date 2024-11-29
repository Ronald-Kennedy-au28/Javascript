console.log("1");
setTimeout(timeout1,1000);

function timeout1(){
    console.log("timeout1");
    clearTimeout(hogaya);// unique id to clear timeouts
}
var trans = setInterval(interval1,2000);/// trans unique id

var count = 0;
function interval1(){
    count++;
    console.log('interval1');
    if (count == 3){
        clearInterval(trans);// use this unique id to clear the infinite intervals
    }
}
var hogaya = setTimeout(timeout2,3000);
function timeout2(){
    console.log("timeout2");
}

setTimeout(timeout3,1000);
function timeout3(){
    console.log("timeout3");
}