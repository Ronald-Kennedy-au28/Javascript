var locate = document.getElementById('geo');
locate.addEventListener('click',getLocation);


function getLocation(){
    var location = window.navigator.geolocation.getCurrentPosition(success, failure);
    
}

function success(position){
    var long = position.coords.longitude;
    var lat = position.coords.latitude;
    
    var pTag = document.getElementById('pTag');
    var longtude = `lattiude ${lat} and longitude${long}`;
    pTag.innerText = longtude;
}

function failure(error){
    pTag.innerText = error.message;
}

var clipboard = document.getElementById('clip');
clipboard.addEventListener('click',hittext);

async function hittext(){
    var text = await navigator.clipboard.readText();
    clipboard.innerText = text;
}