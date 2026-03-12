let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks(){
let list = document.getElementById("taskList");
list.innerHTML = "";

tasks.forEach(function(task, index){

let li = document.createElement("li");
li.textContent = task;

let btn = document.createElement("button");
btn.textContent = "Delete";

btn.onclick = function(){
deleteTask(index);
};

li.appendChild(btn);
list.appendChild(li);

});

}

function addTask(){

let taskInput = document.getElementById("task");
let task = taskInput.value;

if(task === ""){
alert("Please enter a task");
return;
}

tasks.push(task);

localStorage.setItem("tasks", JSON.stringify(tasks));

taskInput.value = "";

showTasks();

}

function deleteTask(index){

tasks.splice(index,1);

localStorage.setItem("tasks", JSON.stringify(tasks));

showTasks();

}

showTasks();