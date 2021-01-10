let formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#tasks-to-do");

let createTaskHandler = function() {
    event.preventDefault();
    
    let listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a newer task.";
    tasksToDoEl.appendChild(listItemEl);
  };

  formEl.addEventListener("submit", createTaskHandler);