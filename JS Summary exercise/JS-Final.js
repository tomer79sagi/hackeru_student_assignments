/** @format */
const state = {
	COMPLETED: true,
	UNCOMPLETED: false,
};
let objectDate = new Date();
let day = objectDate.getDate();
let month = objectDate.getMonth() + 1;
let year = objectDate.getFullYear();

window.addEventListener("load", () => {
	todos = JSON.parse(localStorage.getItem("todos")) || [];
	form = document.querySelector("#new-task");
	list_el = document.querySelector("#tasks");
	document.getElementById("date").value = new Date()
		.toISOString()
		.substring(0, 10);

	form.addEventListener("submit", (e) => {
		let fullDate = `${day}/${month}/${year}`;

		const newTodo = {
			content: document.getElementById("content").value,
			status: state.UNCOMPLETED,
			createdAt: fullDate,
			dateDeadLine: document.querySelector("#date").value,
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

		//create the task with text input.
		const task_content_el = document.createElement("div");
		task_content_el.classList.add("content");
		task_content_el.innerHTML = `<input type="text" class="text" id="text" value="${newTodo.content}" readonly style="text-decoration: none;" />`;

		task_el.appendChild(task_content_el);

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

		if (newTodo.status == state.UNCOMPLETED) {
			task_checkcon_el.innerText = "Uncompleted";
			task_content_el.querySelector(".text").style.textDecoration = "none";
		} else if (newTodo.status == state.COMPLETED) {
			task_checkcon_el.innerText = "Completed";
			task_content_el.querySelector(".text").style.textDecoration =
				"line-through";
			task_content_el.querySelector(".text").style.color = "yellow";
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
			const fullDate = `${day}/${month}/${year}`;

			if (
				task_checkcon_el.innerText.toLowerCase() == "uncompleted" &&
				fullDate >= newTodo.dateDeadLine
			) {
				task_input_el.style.textDecoration = "line-through";
				task_input_el.style.color = "yellow";
				task_checkcon_el.innerText = "Completed";
				task_checkcon_el.appendChild(task_checkbox_el);
				task_checkcon_el.appendChild(task_checkmark_el);
				newTodo.status = state.COMPLETED;
				localStorage.setItem("todos", JSON.stringify(todos));
			} else if (task_checkcon_el.innerText.toLowerCase() == "completed") {
				task_input_el.style.textDecoration = "none";
				task_checkcon_el.innerText = "Uncompleted";
				task_checkcon_el.appendChild(task_checkbox_el);
				task_checkcon_el.appendChild(task_checkmark_el);
				newTodo.status = state.UNCOMPLETED;
				localStorage.setItem("todos", JSON.stringify(todos));
			}
			getDateTime(newTodo.dateDeadLine);
			if (
				newTodo.status == state.UNCOMPLETED &&
				objectDate <= newTodo.dateDeadLine
			) {
				task_input_el.style.textDecoration = "none";
				task_checkcon_el.innerText = "Uncompleted";
				task_input_el.style.color = "red";
			}
		});
	});
}

/* function getDateTime(taskDate) {
	// Grab the current time and date
	const now = new Date();
	
	// From the now variable, store the current minutes, hours, day of the month, month, year and seconds
	const minuteCheck = now.getMinutes();
	const hourCheck = now.getHours();
	const dayCheck = now.getDate(); // Do not use getDay() that returns the day of the week, 1 to 7
	const monthCheck = now.getMonth();
	const yearCheck = now.getFullYear(); // Do not use getYear() that is deprecated.

	const taskMinuteCheck = taskDate.getMinutes();
	const taskHourCheck = taskDate.getHours();
	const taskDayCheck = taskDate.getDate(); // Do not use getDay() that returns the day of the week, 1 to 7
	const taskMonthCheck = taskDate.getMonth();
	const taskYearCheck = taskDate.getFullYear(); // Do not use getYear() that is deprecated.
} */
