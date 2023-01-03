const taskstatus = Object.freeze({
  COMPLETED: "Completed",
  UNCOMPLETED: "Uncompleted",
});

class Task {
  todo;
  completed;
  index;
  constructor(todo) {
    this.todo = todo;
    this.completed = taskstatus.UNCOMPLETED;
  }
  changeStatsToCompleted() {
    this.completed = taskstatus.COMPLETED;
  }
}

class TaskManager {
  constructor() {
    this.allTasks = [];
  }
  add(task) {
    let t = new Task(task);
    t.index = this.allTasks.length;
    this.allTasks.push(t);
    return t;
  }
  delete(task) {
    this.allTasks = this.allTasks.filter((item) => item.index != task.index);
    this.allTasks.forEach((element) => {
      if (element.index > task.index) {
        element.index--;
      }
    });
  }
  edit(task, editedtxt) {
    this.allTasks[task.index].todo = editedtxt;
    this.allTasks[task.index].completed = taskstatus.UNCOMPLETED;
  }
  updateCompleted(task, iscompleted) {
    iscompleted
      ? (task.completed = taskstatus.COMPLETED)
      : (task.completed = taskstatus.UNCOMPLETED);
  }
  alltheTasks() {
    return this.allTasks;
  }
}

let taskManager = new TaskManager();
var tasks = [];

function onLoad() {
  triggerBtnClickOnEnter();

  console.log("storage", JSON.parse(localStorage.getItem("tasks")));

  tasks = JSON.parse(localStorage.getItem("tasks"));

  tasks.forEach((element) => {
    manageTasks(element);
  });

  taskManager.allTasks = tasks;
}

function createNewTask() {
  let taskTxt = document.querySelector("input").value;
  document.querySelector("input").value = "";

  let newTaskObj = taskManager.add(taskTxt);

  localStorage.setItem("tasks", JSON.stringify(taskManager.alltheTasks()));

  manageTasks(newTaskObj);
}

function manageTasks(newTaskObj) {
  const newDiv = document.createElement("div");
  newDiv.id = newTaskObj.index;
  const newSpan = document.createElement("span");
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.id = "chkBox";
  const dltBtn = document.createElement("button");
  dltBtn.innerHTML = "DELETE";
  dltBtn.id = "dltBtn";
  const edtBtn = document.createElement("button");
  edtBtn.innerHTML = "EDIT";
  edtBtn.id = "edtBtn";

  checkBox.onchange = () => {
    taskManager.updateCompleted(newTaskObj, checkBox.checked);
    let element = document.getElementById(newTaskObj.index);
    if(checkBox.checked){
        element.style.textDecoration = "line-through";
        element.style.color = 'green'
       }
      else{
        element.style.textDecoration = "none";
        element.style.color = 'black'
      } 
    localStorage.setItem("tasks", JSON.stringify(taskManager.allTasks));
  };

  dltBtn.onclick = () => {
    for (i = newTaskObj.index + 1; i < taskManager.allTasks.length; i++) {
      document.getElementById(i).id -= 1;
    }
    taskManager.delete(newTaskObj);
    localStorage.setItem("tasks", JSON.stringify(taskManager.allTasks));
    let element = document.getElementById(newTaskObj.index);
    element.parentNode.removeChild(element);
  };

  edtBtn.onclick = () => {
    let newEditedTask = prompt("enter new task here to edit your task:");
    taskManager.edit(newTaskObj, newEditedTask);

    let y = document.getElementById(newTaskObj.index);
    checkBox.checked = false;
    y.style.textDecoration = "none";
    y.style.color = "black"
    y.innerHTML = newEditedTask;
    y.appendChild(newSpan).appendChild(checkBox);
    y.appendChild(dltBtn);
    y.appendChild(edtBtn);
    localStorage.setItem("tasks", JSON.stringify(taskManager.allTasks));
  };

  newDiv.innerHTML = newTaskObj.todo;
  let x = document.getElementById("tasksList").appendChild(newDiv);
  x.appendChild(newSpan).appendChild(checkBox);
  x.appendChild(dltBtn);
  x.appendChild(edtBtn);

  if (newTaskObj.completed == taskstatus.COMPLETED) {
    checkBox.checked = true;
    newDiv.style.textDecoration = "line-through";
    newDiv.style.color = "green"

  }
}

function triggerBtnClickOnEnter() {
  document
    .querySelector("input")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("addTaskBtn").click();
      }
    });
}
