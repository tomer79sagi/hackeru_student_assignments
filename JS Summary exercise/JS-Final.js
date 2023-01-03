/** @format */
const state = {
	COMPLETED: "Completed",
	UNCOMPLETED: "Uncompleted",
};

let objectDate = new Date();
let day = objectDate.getDate();
let month = objectDate.getMonth()+1;
let year = objectDate.getFullYear();

let fullDate = `${day}/${month}/${year}`;

window.addEventListener("load", () => {
	todos = JSON.parse(localStorage.getItem("todos")) || [];
	form = document.querySelector("#new-task");
	list_el = document.querySelector("#tasks");

	form.addEventListener("submit", (e) => {
		const newTodo = {
			content: document.getElementById("content").value,
			status: false,
			createdAt: fullDate,
			dateDeadLine: document.querySelector("date")
		};

		// document.getElementById("date").value = new Date().toLocaleString();

		if (newTodo.content != "") {
			todos.push(newTodo);
			localStorage.setItem("todos", JSON.stringify(todos));
			e.target.reset();
		} else if (newTodo.content == "") {
			alert("Please Enter Info For The Task");
			return;
		}
		e.target.reset();
		e.preventDefault();

		DisplayTodos();
	});
	DisplayTodos();
});

function DisplayTodos() {
	const todoList = document.querySelector("#tasks");
	todoList.innerHTML = "";

	todos.forEach((newTodo) => {
		const task_el = document.createElement("div");
		task_el.classList.add("task");

		const task_content_el = document.createElement("div");
		task_content_el.classList.add("content");
		task_content_el.innerHTML = `<input type="text" class="text" id="text" value="${newTodo.content}" readonly style="text-decoration: none;" />`;

		task_el.appendChild(task_content_el);

		//creating a new line for the task
		//creating the text area for the task
		// const task_input_el = document.createElement("input");
		// task_input_el.classList.add("text");
		// task_input_el.type = "text";
		// task_input_el.value = `${newTodo.content}`;
		// task_input_el.setAttribute("readonly", "readonly");
		// task_content_el.appendChild(task_input_el);

		//creating the area for the buttons
		const task_actions_el = document.createElement("div");
		task_actions_el.classList.add("actions");

		//Add Time link for the task
		const createdDate = document.createElement("p");
		createdDate.classList.add("date");
		createdDate.innerHTML = newTodo.dateDeadLine;

		//creating the edit button
		const task_edit_el = document.createElement("button");
		task_edit_el.classList.add("edit");
		task_edit_el.setAttribute("id", "edit");
		task_edit_el.innerHTML = "Edit";

		//creating the delete button
		const task_delete_el = document.createElement("button");
		task_delete_el.classList.add("delete");
		task_delete_el.setAttribute("id", "delete");
		task_delete_el.innerHTML = "Delete";

		//creating the checkbox for the task
		const task_checkcon_el = document.createElement("label");
		task_checkcon_el.classList.add("containerCheck");
		task_checkcon_el.innerText = "Uncompleted";

		if (newTodo.status) {
			task_checkcon_el.classList.add("done");
		}

		if (newTodo.status == false) {
			task_checkcon_el.innerText = "Uncompleted";
			task_content_el.querySelector(".text").style.textDecoration = "none";
		} else if (newTodo.status == true) {
			task_checkcon_el.innerText = "Completed";
			task_content_el.querySelector(".text").style.textDecoration =
				"line-through";
		}

		//filling the checkbox with classes
		const task_checkbox_el = document.createElement("input");
		task_checkbox_el.type = "checkbox";
		task_checkbox_el.checked = newTodo.status;

		const task_checkmark_el = document.createElement("span");
		task_checkmark_el.classList.add("checkmark");

		//insert the elements into the checkbox
		task_checkcon_el.appendChild(task_checkbox_el);
		task_checkcon_el.appendChild(task_checkmark_el);

		//insert the elements into the container for the task
		task_actions_el.appendChild(createdDate);
		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		task_actions_el.appendChild(task_checkcon_el);
		task_el.appendChild(task_actions_el);
		list_el.appendChild(task_el);

		//used to clear the user input for a new task.
		content = "";

		task_checkbox_el.addEventListener("change", (e) => {
			newTodo.status = e.target.checked;
			localStorage.setItem("todos", JSON.stringify(todos));

			if (newTodo.status) {
				task_checkcon_el.classList.add("done");
				task_content_el.querySelector(".text").style.textDecoration =
					"line-through";
			} else {
				task_checkcon_el.classList.remove("done");
				task_content_el.querySelector(".text").style.textDecoration = "none";
			}

			DisplayTodos();
		});

		//function for edit button
		task_edit_el.addEventListener("click", (e) => {
			const task_input_el = task_content_el.querySelector("input");
			task_input_el.removeAttribute("readonly");
			task_input_el.focus();
			task_input_el.select();

			task_input_el.addEventListener("blur", (e) => {
				task_input_el.setAttribute("readonly", true);
				newTodo.content = e.target.value;
				localStorage.setItem("todos", JSON.stringify(todos));
				DisplayTodos();
			});
		});

		//function for delete button
		task_delete_el.addEventListener("click", (e) => {
			if (confirm("Are you sure You Want To Delete This Task?")) {
				todos = todos.filter((t) => t != newTodo);
				localStorage.setItem("todos", JSON.stringify(todos));
				DisplayTodos();
			}
		});

		task_checkcon_el.addEventListener("change", (e) => {
			const task_checkcon_el = task_actions_el.querySelector("label");
			const task_input_el = task_content_el.querySelector("input");

			if (task_checkcon_el.innerText.toLowerCase() == "uncompleted") {
				task_input_el.style.textDecoration = "line-through";
				task_checkcon_el.innerText = "Completed";
				task_checkcon_el.appendChild(task_checkbox_el);
				task_checkcon_el.appendChild(task_checkmark_el);
				newTodo.status = true;
				localStorage.setItem("todos", JSON.stringify(todos));
			} else if (task_checkcon_el.innerText.toLowerCase() == "completed") {
				task_input_el.style.textDecoration = "none";
				task_checkcon_el.innerText = "Uncompleted";
				task_checkcon_el.appendChild(task_checkbox_el);
				task_checkcon_el.appendChild(task_checkmark_el);
				newTodo.status = false;
				localStorage.setItem("todos", JSON.stringify(todos));
			}
		});
	});
}
