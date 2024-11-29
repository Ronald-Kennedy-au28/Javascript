
// there is a class XMLHttpRequest 
// using which client-side sends request to server-side

const getEle = document.getElementById("data");
getEle.addEventListener("click",dataHandler);

function dataHandler(){
    let requestObj = new XMLHttpRequest();
    // created an object with class XMLHttpRequest
    
    requestObj.open("GET","https://jsonplaceholder.typicode.com/users/1")
    // now sending a request to the server to get the below api 
    // https://jsonplaceholder.typicode.com/users/1
    
    requestObj.onload = function(){
        let stat = requestObj.status;
        console.log(stat); // prints status
        let resp = JSON.parse(requestObj.response);
        // the response we get from server is a string
        // therefore we convert the string to json file by using json.parse
        // to convert a json to string we use json.stringfy(file);
        console.log(resp);
        const name = resp.name;
        const city = resp.address.city;
        const pTag = document.createElement("p");
        pTag.innerText = `Name: ${name} City: ${city}`;
        const main = document.getElementById("main");
        main.append(pTag)
    }
    
    requestObj.onerror = function(){
        console.log("error")
    }
    
    requestObj.send();
    
    

}