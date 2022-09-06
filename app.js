//Define UI Vars

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".task-list");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");
const noTaskUi = document.querySelector(".no-task");
let listCount = taskList.childElementCount;

// load all event listneners
loadEventListeners();

function loadEventListeners() {
  //add task event
  form.addEventListener("submit", addTask);
  //remove tasks
  taskList.addEventListener("click", removeTask);
  //clear tasks
  clearBtn.addEventListener("click", clearTasks);
  //filter tasks
  filter.addEventListener("keyup", filterTasks);
}

function NumOfTask() {
  listCount = taskList.childElementCount;

  if (listCount == 0) {
    clearBtn.style.display = "none";
    noTaskUi.style.display = "flex";
  } else {
    clearBtn.style.display = "block";
    noTaskUi.style.display = "none";
  }
}
NumOfTask();

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a Task");
  } else {
    const li = document.createElement("li");
    //add class
    li.className = "task";
    //create text node and append to child
    li.appendChild(document.createTextNode(taskInput.value));
    //create link element
    const link = document.createElement("a");
    //add class
    link.className = "delete-item";
    //add icon
    link.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    //append link to li
    li.appendChild(link);

    //append li to ul
    taskList.appendChild(li);
    //clea input
    taskInput.value = "";
    NumOfTask();
  }

  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
    NumOfTask();
  }
}

//clear tasks

function clearTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  NumOfTask();
}

//filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".task").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(text) != -1) {
      task.style.display = "flex";
    } else {
      task.style.display = "none";
    }
  });
}
