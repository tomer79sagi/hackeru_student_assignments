/** @format */

//working non enum + localstorage task manager.
// const todolist = {
// 	content: document.querySelector("#content").value,
// 	status: document.querySelector("#containerCheck"),
// 	createdAt: new Date().getTime(),
// }

// class TaskManager {
// 	taskinfo = content;
// 	state = status;
// 	getTime = createdAt;
// }

window.addEventListener("load", () => {
	const form = document.querySelector("#new-task");
	const input = document.querySelector("#content");
	const list_el = document.querySelector("#tasks");

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		//gets the iput for the task
		const task = input.value;

		//check if the input is not empty
		if (!task) {
			alert("Please Enter Info For The Task");
			return;
		}
		const task_el = document.createElement("div");
		task_el.classList.add("task");
		//creating a new line for the task
		const task_content_el = document.createElement("div");
		task_content_el.classList.add("content");
		task_el.appendChild(task_content_el);

		//creating the text area for the task
		const task_input_el = document.createElement("input");
		task_input_el.classList.add("text");
		task_input_el.type = "text";
		task_input_el.value = task;
		task_input_el.setAttribute("readonly", "readonly");
		task_content_el.appendChild(task_input_el);

		//creating the area for the buttons
		const task_actions_el = document.createElement("div");
		task_actions_el.classList.add("actions");

		//creating the edit button
		const task_edit_el = document.createElement("button");
		task_edit_el.classList.add("edit");
		task_edit_el.innerHTML = "Edit";

		//creating the delete button
		const task_delete_el = document.createElement("button");
		task_delete_el.classList.add("delete");
		task_delete_el.innerHTML = "Delete";

		//creating the checkbox for the task
		const task_checkcon_el = document.createElement("label");
		task_checkcon_el.classList.add("containerCheck");
		task_checkcon_el.innerText = "Uncompleted";

		//filling the checkbox with classes
		const task_checkbox_el = document.createElement("input");
		task_checkbox_el.classList.add("checkbox");
		task_checkbox_el.type = "checkbox";

		const task_checkmark_el = document.createElement("span");
		task_checkmark_el.classList.add("checkmark");

		//insert the elementts into the checkbox
		task_checkcon_el.appendChild(task_checkbox_el);
		task_checkcon_el.appendChild(task_checkmark_el);

		//insert the elements into the container for the task
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		task_actions_el.appendChild(task_checkcon_el);
		task_el.appendChild(task_actions_el);
		list_el.appendChild(task_el);

		//used to clear the user input for a new task.
		input.value = "";

		//function for edit button
		task_edit_el.addEventListener("click", () => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
				task_input_el.select();
				task_edit_el.innerText = "Save";
			} else {
				task_input_el.setAttribute("readonly", "readonly");
				task_edit_el.innerText = "Edit";
			}
		});

		//function for delete button
		task_delete_el.addEventListener("click", () => {
			if (confirm("Are you sure You Want To Delete This Task?")) {
				list_el.removeChild(task_el);
			}
		});

		task_checkcon_el.addEventListener("change", () => {
			if (task_checkcon_el.innerText.toLowerCase() == "uncompleted") {
				task_input_el.style.textDecoration = "line-through";
				task_checkcon_el.innerText = "Completed";
				task_checkcon_el.appendChild(task_checkbox_el);
				task_checkcon_el.appendChild(task_checkmark_el);
			} else if(task_checkcon_el.innerText.toLowerCase() == "completed"){
				task_input_el.style.textDecoration = "none";
				task_checkcon_el.innerText = "Uncompleted";
				task_checkcon_el.appendChild(task_checkbox_el);
				task_checkcon_el.appendChild(task_checkmark_el);
			}
		});
	});
});
