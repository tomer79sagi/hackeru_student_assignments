//Find elements and give them a variable
var taskInput = document.getElementById("tasktext");
var addButton = document.getElementById("createtask");
var incompletedTaskHolder = document.getElementById("taskincomplete");
var completedTaskHolder = document.getElementById("taskcomplete");

var createNewTaskItem = function(taskString) {
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");
  
   //Each element needs modifying
  
  checkBox.type = "checkbox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  
  return listItem;
}

var addTask = function() {
  console.log("add Task");
  var listItem = createNewTaskElement(taskInput.value);
  incompletedTaskHolder.appendChild(listItem);
bindTaskEvents(listItem, taskCompleted);
}

var editTask = function() {
  console.log("edit Task");
}

var deleteTask = function() {
  console.log("delete Task");
}

var taskCompleted = function() {
  console.log("task completed");
  var listItem = this.parentNode;
  completedTaskHolder.appendChild(listItem);
  bindTasksEvents(listItem, taskIncomplete);
}

var taskIncomplete = function() {
  console.log("task incomplete");
  var listItem = this.parentNode;
  incompletedTaskHolder.appendChild(listItem);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	var checkbox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
  
	editButton.onclick = editTask;
	deleteButton.onclick = deleteTask;
	checkbox.onchange = checkBoxEventHandler;
	
}

var ajaxRequest = function() {
  console.log("AJAX request");
}

//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);


for (var i = 0; i < incompletedTaskHolder.length; i++) {  bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);
}

for (var i = 0; i < completedTaskHolder.length; i++) {
 bindTaskEvents(incompletedTaskHolder.children[i], taskIncompleted);
}

addButton.onclick = addTask;