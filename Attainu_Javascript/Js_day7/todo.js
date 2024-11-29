var inputTask = document.getElementById("taskName");
var buttonTask = document.getElementById("taskButton");
var listElement = document.getElementById("taskList");


buttonTask.addEventListener("click",tapButton);
// inputTask.addEventListener("input",inputValue);

function tapButton(){
    
    var inputEntered = inputTask.value ;

    var currentlist = listElement.innerHTML;
    var newlist =  `${currentlist} <li> ${inputEntered}<button>x</button></li>`;
    listElement.innerHTML = newlist;

    if (inputEntered.length === 0){
        alert("Enter a valid task");
    }else{
        var newtask = document.createElement("li");
        newtask.innerText = inputEntered;

        var xButton = document.createElement("button");
        xButton.innerText = 'x';

        newtask.appendChild(xButton);
        listElement.appendChild(newtask);
        
        inputTask.value = "";

        xButton.addEventListener("click",closeButton);
    }
}
// function inputValue(){
//     var inputEntered = inputTask.value
//     console.log(inputEntered);
// }
function closeButton(event){
    event.target.parentElement.remove();
}


newtask.appendChild(xButton);
// just like append we have prepend 
// list text would be the parent element
// to have button after the list element i,e parent element
// we use appendchild like mentioned above
// to have something befor the list element
// we use prepend(parent element)
