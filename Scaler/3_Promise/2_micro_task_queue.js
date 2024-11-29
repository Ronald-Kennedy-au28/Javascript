// MICRO TASK QUEUE  or VIP Queue or PRIORITY Queue

// Promises goes into micro task queue
// inbuilt async func like setTimeOut goes to call back queue
console.log("1")

setTimeout(()=>{
    console.log("2")
},0) // this goes to call queue
// the above setTImeout func can be written as

Promise.resolve().then(()=> console.log("2")) // this goes to micro task queue

console.log("3") /// 1 3 2

// always MICRO TASK QUEUE items are given priority over CALL QUEUE

// MICRO TASK QUEUE => Promise.resolve().then(()=> console.log("2"))
//  CALL QUEUE => setTimeout()