function addTaskToHtml(newTask) {

    // Add new task list item
    let ui_task = document.createElement("li");
    ui_task.setAttribute("id", newTask.id);
    let description = document.createElement("span");
    description.setAttribute("class","desc");
    description.innerHTML = newTask.description;
    ui_task.appendChild(description);
    
    // Add delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.addEventListener("click", userDeletedTask);
    ui_task.appendChild(deleteBtn);

    // Add edit button
    let editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.addEventListener("click", userEditedTask);
    ui_task.appendChild(editBtn);

    // Add complete button
    let completeBtn = document.createElement("button");
    completeBtn.innerHTML = "Complete";
    completeBtn.addEventListener("click", userCompletedTask);
    ui_task.appendChild(completeBtn);
    
    // Add task item to the list
    let tasksListElement = document.getElementById("tasks-list");
    tasksListElement.appendChild(ui_task);
}

const TaskStatus = {
  Uncompleted: 0,
  Completed: 1,
};

class Task {
  constructor(id, description) {
    this.id = id;
    this.description = description;
    this.status = TaskStatus.Uncompleted;
  }
  edit(newDescription) {
    this.description = newDescription;
  }
  completeTask() {
    this.status = TaskStatus.Completed;
  }
}

class TaskManager {
  constructor() {
    this.tasksArray = [];
    this.currentTaskId = 0;
  }
  addTask(description) {
    let newTask = new Task(this.currentTaskId, description);
    this.currentTaskId++;
    this.tasksArray.push(newTask);
    addTaskToHtml(newTask);
  }
  deleteTask(id) {
    let index = 0;
    while (this.tasksArray[index].id != id) {
      index++;
    }
    this.tasksArray.splice(index, 1);
  }
  editTask(id, newDescription) {
    let index = 0;
    while (this.tasksArray[index].id != id) {
      index++;
    }
    this.tasksArray[index].edit(newDescription);
  }
  completeTask(id) {
    let index = 0;
    while (this.tasksArray[index].id != id) {
      index++;
    }
    this.tasksArray[index].completeTask();
  }
}

let taskManager = new TaskManager();

function userAddedTask() {
  let description = prompt("Enter a description for your task");
  if (description == "") {
    alert("please add a valid description");
  } else {
    taskManager.addTask(description);
  }
}

function userDeletedTask() {
    let taskToDelete = this.parentElement;
    taskManager.deleteTask(taskToDelete.id);
    taskToDelete.remove();
}

function userEditedTask() {
    let newDescription = prompt("please enter a new describtion");
    if (newDescription == "") {
      alert("please add a valid description");
    } else {
      let taskToEdit = this.parentElement;
      taskManager.editTask(taskToEdit.id, newDescription);
      taskToEdit.getElementsByClassName("desc")[0].innerHTML = newDescription; 
    }
}

function userCompletedTask() {
  let taskToComplete = this.parentElement;
  taskManager.completeTask(taskToComplete.id);
  taskToComplete.setAttribute("class", "completed");
}
