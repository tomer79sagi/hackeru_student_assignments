// Add a new task.
let taskInput = document.getElementById("new-task");
 
// first button
let addButton = document.getElementsByTagName("button")[0];
 
// ul of #incomplete-tasks
let incompleteTaskHolder = document.getElementById("incomplete-tasks");
 
// completed-tasks
let completedTasksHolder = document.getElementById("completed-tasks");
  
/*---- 1 ----*/

// new task item
let createNewTaskElement = function (taskString) {
  
    let listItem = document.createElement("li");
  
    // input (checkbox)
    let checkBox = document.createElement("input"); // checkbox
    // label
    let label = document.createElement("label"); // label
    // input (text)
    let editInput = document.createElement("input"); // text
    // button.edit
    let editButton = document.createElement("button"); // edit button
  
    // button.delete
    let deleteButton = document.createElement("button"); // delete button
  
    label.innerText = taskString;
  
    
    checkBox.type = "checkbox";
    editInput.type = "text";
  
 
    // innerText 
    editButton.innerText = "Edit";    
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
  
    // append
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
}
/*---- 2 ----*/
let addTask = function () {
    console.log("Add Task...");
  
    let listItem = createNewTaskElement(taskInput.value);
  
    if (taskInput.value == "") {
        return;
    }
  
    // Append listItem to incompleteTaskHolder
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
  
    taskInput.value = "";
  
}
  
/*---- 3 ----*/
let editTask = function () {
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");
  
  
    let listItem = this.parentNode;
  
    let editInput = listItem.querySelector('input[type=text]');
    let label = listItem.querySelector("label");
    let containsClass = listItem.classList.contains("editMode");
    
    if (containsClass) {
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;
    }
    listItem.classList.toggle("editMode");
}
  
/*---- 4 ----*/
let deleteTask = function () {
    console.log("Delete Task...");
  
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
  
}
  
/*---- 5 ----*/
  
let taskCompleted = function () {
    console.log("Complete Task...");
  
    // Append the task list item to the #completed-tasks
    let listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
  
}
  
/*---- 6 ----*/
let taskIncomplete = function () {
    console.log("Incomplete Task...");
    // incomplete.
    let listItem = this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}
  
/*---- 7 ----*/
addButton.onclick = addTask;
addButton.addEventListener("click", addTask);
  
let bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
    console.log("bind list item events");
    // select ListItems children
    let checkBox = taskListItem.querySelector("input[type=checkbox]");
    let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");
  
  
    // Bind editTask to edit button.
    editButton.onclick = editTask;
    // Bind deleteTask to delete button.
    deleteButton.onclick = deleteTask;
    // Bind taskCompleted to checkBoxEventHandler.
    checkBox.onchange = checkBoxEventHandler;
}
  
/*---- 8 : Loop ----*/


for (let i = 0; i < incompleteTaskHolder.children.length; i++) {
  
    // bind events to list items children(tasksCompleted)
    bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}
  
// cycle over completedTasksHolder ul list items
for (let i = 0; i < completedTasksHolder.children.length; i++) {
    // bind events to list items children(tasksIncompleted)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

/*-- Local Storage --*/

// let myContainer = document.getElementsByClassName("middle");
// let myStorage = myContainer;
// localStorage.setItem("myStorage",myStorage);
// console.log(localStorage);

const input =document.querySelector("input");
localStorage.setItem("value",input.value);
console.log(localStorage);
