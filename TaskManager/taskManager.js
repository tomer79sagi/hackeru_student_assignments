let taskInput = document.getElementById("new-task");
let addButton = document.getElementsByTagName("button")[0];
let TaskHolder = document.getElementById("incomplete-tasks");
let completedTasksHolder = document.getElementById("completed-tasks");

let createNewTaskElement = function (taskString) {
	let listItem = document.createElement("li");
	let checkBox = document.createElement("input"); 
	let label = document.createElement("label"); 
	let editInput = document.createElement("input"); 
	let editButton = document.createElement("button"); 
	let deleteButton = document.createElement("button"); 

	label.innerText = taskString;

	checkBox.type = "checkbox";
	editInput.type = "text";

	editButton.innerText = "Edit";	
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	listItem.appendChild(checkBox);

	return listItem;
}
let addTask = function () {

	let listItem = createNewTaskElement(taskInput.value);
	if (taskInput.value == "") {
		return;
	}

	TaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value = "";

}

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

let deleteTask = function () {
	console.log("Delete Task...");

	let listItem = this.parentNode;
	let ul = listItem.parentNode;
	ul.removeChild(listItem);

}

let taskCompleted = function () {
	console.log("Complete Task...");

	let listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);

}
let taskIncomplete = function () {
	console.log("Incomplete Task...");
	let listItem = this.parentNode;
	TaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
}

addButton.onclick = addTask;
addButton.addEventListener("click", addTask);

let bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
	console.log("bind list item events");
	let checkBox = taskListItem.querySelector("input[type=checkbox]");
	let editButton = taskListItem.querySelector("button.edit");
	let deleteButton = taskListItem.querySelector("button.delete");


	editButton.onclick = editTask;
	deleteButton.onclick = deleteTask;
	checkBox.onchange = checkBoxEventHandler;
}


