
// CLOSURE
var temp = "hi";
console.log(temp);
function print(){
    console.log(temp);
     temp = "bye";
    call();
    function call(){
        console.log(temp);
    }
}
print();
console.log(temp);

// ASYNC
// setTimeout()
// setInterval()

// SETTIMEOUT()
function timeout(){
    console.log("timeout");
}

var count = 0;
function interval(){
    count++
    if (count == 2){
        clearInterval(sd)
    }
    console.log("interval");
}

setTimeout(timeout, 2000); // 2 argu ,1 = callback function, 2 = number in millisecs
// this setTimeout fn executes after all functions are executed
setInterval(interval, 1000); // 2 argu, 1=callback, 2= number in millisecs
// setInterval() executes every 2 secs - infinite


// if we store the setTimeout() in a var
var sc = setTimeout(timeout, 2000); // this creates an id 
// if we store the setInterval() in a var
var sd = setIntervaleout(interval, 2000); // this creates an id to stop the infinite loop 
