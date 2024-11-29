
// In this class we learn about Promises
// Promises are of two types (before the two types we have "pending")
// fullfilled and rejected
const getEle = document.getElementById("data");


const display = document.getElementById("display");

// function dataHandler(){
    // const response = fetch("https://v2.jokeapi.dev/joke/Any");
    // here "response" is an instance of class "Promise"
    // "fetch" is a window object which works exactly like XMLHttpRequest
    // but only one parameter - the Api endpoint ("https://v2.jokeapi.dev/joke/Any  ")
    // unlike XMLHttpRequest where it has two 1."get" 2. Api endpoint
    
    // In fetch if you need post then
    // const response = fetch("https://v2.jokeapi.dev/joke/Any", { method: "POST"});
    
    // const first = response.then(onSucces);
    // function onSucces(res){
    //     let raw = res.json() 
            // the data is in readable stream(not understandable format), 
            //so we are converting it into
            // json format by using .json();
    //     return raw;
    // }
    
    // first.then(second);
    
    // function second(item){
       
    //     if(item.type === "single"){
    //         display.innerText = item.joke;
    //     } else {
    //         display.innerText = item.setup + item.delivery;
    // }
    // }

    // using arrow functions
// getEle.addEventListener("click",()=>

//         fetch("https://v2.jokeapi.dev/joke/Any")
//             .then(data1 => data1.json() , (err=> console.log(err)))
//                 .then( data2 => {
//                     if(data2.type === "single") display.innerText = data2.joke;
//                     else display.innerText = data2.setup + data2.delivery;} 
//                     )
// );


/// using async and await


getEle.addEventListener("click",noWait);

async function noWait(){
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const jsonData = await response.json();
    console.log(jsonData); 
}
