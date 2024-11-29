
// today we learn about fetch()
/// *** watch the video again for fewer line of codes
// learn arrow functions and async and await

function getdata(){

    let response = fetch("https://v2.jokeapi.dev/joke/Any  " );

    function Onsuccess(res){
            let jsonResponce = res.json();
            return jsonResponce
    };
    function Onfailure(error){
        console.log(error);
    }

    let promiseResponce = response.then(Onsuccess,Onfailure);
    promiseResponce.then(data);
    function data(item){
        if(item.error){
        alert("no joke found");
        }else{
            if(item.type === "single"){
                span.innerText = item.joke;
            } else {
                 span.innerText = item.setup + item.delivery;
        }
                    

    }
}
}    
    // promiseResponce.then( (data) => {
    //     if(data.error){
    //         alert("no joke found");
    //     }else{
    //         if(data.type === "single"){
    //             span.innerText = data.joke;
    //         } else {
    //              span.innerText = data.setup + data.delivery;
    //         }
            
    //     }
    // })


let span = document.getElementById("span");
let Getdata = document.getElementById("data");
Getdata.addEventListener("click", getdata);