var inputEle = document.getElementById("inputid");
var buttonEle = document.getElementById("buttonid");
var ulEle = document.getElementById("ulid");

buttonEle.addEventListener("click",taskmaster);

function taskmaster(){
    // task = inputEle.value;
    // var currentTask = ulEle.innerHTML;
    // var newTask = `${currentTask} <li> ${task} <button> X </button> </li> `;
    // ulEle.innerHTML = newTask;
    // inputEle.value = "";

   var task = inputEle.value;

   if (task === ""){
        alert("Enter a valid task");
   }
   else{
    var liEle = document.createElement("li");
    liEle.innerText = task;
    

    var xbut = document.createElement("button");
    xbut.innerText = "X";
    liEle.prepend(xbut);

    ulEle.appendChild(liEle);
    inputEle.value = "";

    }
    xbut.addEventListener("click",taskDone);

    function taskDone(e){
        e.target.parentElement.remove();
 
     
 
 
     
 }

   };

 
