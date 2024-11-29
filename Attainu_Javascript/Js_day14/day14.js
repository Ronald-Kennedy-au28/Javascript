
// JSON.parse(object) /// convert string to js
// JSON.stringify(object) // convert js to string
// https://jsonplaceholder.typicode.com/users/1
// in today's chapter we learn about
// htttp - XMLHttprequest - Get,Post,Pull,Patch,Delete
// API 
// Ajax  - Asynchronous Javascript and JSON/XML
// status 100 - inprogress, 200 success, 400 client error, 500  server errror
function getdata(){


let requestobj = new XMLHttpRequest();

requestobj.open("Get","https://jsonplaceholder.typicode.com/users/1");

requestobj.onload = function(){
    console.log("success");
    const data = JSON.parse( requestobj.response);
    const name = data.name;
    const address = data.address.city;
    const ptag = document.createElement("p");// did not work
    ptag.innerText = name ; // find out why
    span.innerText = name;
};

requestobj.onerror= function(){
    console.log("error");
};

requestobj.send();
};
let span = document.getElementById("span");
let Getdata = document.getElementById("data");
Getdata.addEventListener("click", getdata);
let requestobj = new XMLHttpRequest();