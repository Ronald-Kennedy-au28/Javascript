

// var locEle = document.getElementById("locate");
// locEle.addEventListener("click",mylocation);

// function mylocation(){
//     navigator.geolocation.getCurrentPosition(success,failure);
    
// }

// function success(position){
//     var longitude = position.coords.longitude;
//     var latitude = position.coords.latitude;
//     var p1 = document.createElement("p");

//     p1.innerText = `latitude: ${latitude} and longitude: ${longitude}`;
//     document.body.appendChild(p1);

// }

// function failure(error){
//     console.log(error.message);
// }

// var clipButton = document.createElement("button");
// clipButton.innerText = "Get the clipboard";
// document.body.appendChild(clipButton);

// clipButton.addEventListener("click",copiedText);

// async function copiedText(){
//     var text =  await navigator.clipboard.readText();
//     var pTag = document.createElement("p");
//     pTag.innerText = text;
//     document.body.appendChild(pTag);
    
// }

var blueELe = document.createElement("button");
blueELe.innerText = "Bluetooth Info";
document.body.appendChild(blueELe);

blueELe.addEventListener("click", bluConnect);

function bluConnect(){

    console.log('connected');// not able to do
    // try plugins -- navigator.plugins
}