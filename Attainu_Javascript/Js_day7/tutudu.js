var intEle = document.getElementById('int');
var butEle = document.getElementById('but');
var ulList = document.getElementById('ulList');

butEle.addEventListener('click',addTask);
// var unorder = document.createElement('ul');

function addTask(){
    var task = intEle.value;
    var list = document.createElement('li');
    list.innerText = task;

    var axe = document.createElement('button');
    axe.innerText = "x";    
    
    ulList.appendChild(list);
    list.appendChild(axe);

    intEle.value = "";

    axe.addEventListener('click',clear);
}

function clear(e){
    e.target.parentElement.remove();
}
