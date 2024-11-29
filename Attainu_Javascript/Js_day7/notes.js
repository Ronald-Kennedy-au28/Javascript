// Firstly we learn about the e.stopImmediatePropagation()

var rainyEle = document.getElementById('rainy');
rainyEle.addEventListener('click',Immediate);
rainyEle.addEventListener('click',Propagation);

function Immediate(e){
    
    console.log("Immediate");
    e.stopImmediatePropagation();
}

function Propagation(e){
    console.log("Propagation");
    //e.stopImmediatePropagation();

}


