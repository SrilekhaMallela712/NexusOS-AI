// =====================
// TASK BOARD
// =====================

let counter = 0;

function addTask(){

let input = document.getElementById("taskInput");

if(!input) return;

if(input.value.trim()==="") return;

let task = document.createElement("div");

task.className = "task";

task.id = "task" + counter++;

task.draggable = true;

task.ondragstart = function(e){
e.dataTransfer.setData("text", task.id);
};

task.innerHTML = input.value;

document.getElementById("todo").appendChild(task);

input.value = "";

saveBoard();
}

function allowDrop(e){
e.preventDefault();
}

function drop(e){

e.preventDefault();

let data = e.dataTransfer.getData("text");

let task = document.getElementById(data);

e.currentTarget.appendChild(task);

saveBoard();
}

function saveBoard(){

let board = document.querySelector(".board");

if(board){

localStorage.setItem(
"taskBoard",
board.innerHTML
);

}

}

// =====================
// RESET DATA
// =====================

function resetData(){

let confirmReset = confirm(
"Are you sure you want to reset all data?"
);

if(confirmReset){

localStorage.clear();

alert("All data reset successfully.");

}

}

// =====================
// DARK MODE
// =====================

document.addEventListener("DOMContentLoaded",()=>{

let darkToggle = document.getElementById("darkMode");

if(darkToggle){

darkToggle.addEventListener("change",()=>{

if(darkToggle.checked){

document.body.style.background="#0f172a";
document.body.style.color="white";

}else{

document.body.style.background="#f8fafc";
document.body.style.color="#111827";

}

});

}

});

// =====================
// TASK LOAD
// =====================

window.onload = function(){

let saved = localStorage.getItem("taskBoard");

if(saved){

let board = document.querySelector(".board");

if(board){

board.innerHTML = saved;

document.querySelectorAll(".task").forEach(task=>{

task.draggable = true;

task.ondragstart = function(e){

e.dataTransfer.setData("text", task.id);

};

});

}

}

};