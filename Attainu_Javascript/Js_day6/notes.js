// In this class we learn about

// DOM manipulation
// Element get by ID, Class and tag 
// Events
// Event Bubbling --e.stopPropagation()
// e.stopImmediatePropation()
// e.preventDefault()
// Prevent default event actions


// the browser reads the html by the dom tree
// dom tree - document object module
// next comes the cssom tree - css object module

// the dom tree + cssom tree = render tree


// ** getElement (ID,Class,Tag)--- addEventListner ---- removeEventListner
var clickCounter = 0;
function but1Handler(e){
    clickCounter++
    
    if (clickCounter === 3){
        button1.removeEventListener('click',but1Handler);// important
    }
    console.log("Did you CLick me?");
}

var button1 = document.getElementById("clicky");
button1.addEventListener('mouseenter',but1Handler);



// **getelement by CLASS and Tag --- e.preventDefault()

function anchorHandler(e){
    console.log("mouse entered");
    e.preventDefault();
}


var anchorGoogle = document.getElementsByTagName('a')
anchorGoogle[0].addEventListener('click',anchorHandler);


// ** e.stopPropagation() --- eventbubbling -- elements by tagname
function gpHandler(){
    console.log("grand parent")
}

function pHandler(e){
    e.stopPropagation()
    console.log(" parent")
}

function childHandler(e){
    e.stopPropagation()
    console.log("child")
}

var gpDiv = document.getElementsByTagName('div');
gpDiv[2].addEventListener('click',gpHandler);


gpDiv[3].addEventListener('click',pHandler);


gpDiv[4].addEventListener('click',childHandler);

