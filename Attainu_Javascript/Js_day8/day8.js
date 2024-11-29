
// Geolocation 

var locationBtn = document.getElementById("location");

locationBtn.addEventListener("click",geoLocation);

function onSuccess(position){
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    console.log(lat,long);
    var ptag = document.getElementById("pTag");
    ptag.innerText = `longitude: ${long} and latitude:${lat}`;
}
function onFailure(error){
    console.log(error.message);
    var ptag = document.getElementById("pTag");
    ptag.innerText = "Oh no! access denied"
}



function geoLocation(){
    var getLocation = window.navigator.geolocation;
    var longLatt = getLocation.getCurrentPosition(onSuccess,onFailure);
    console.log(longLatt);
}

// done with geolocation
// do with clipboard and bluetooth