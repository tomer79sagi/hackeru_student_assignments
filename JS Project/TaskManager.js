window.onload = function() {
// Get references to the form and task list
const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Add a new task to the task list
function addTask(event) {
    event.preventDefault();

    // Get the task name and due date
    const taskName = document.getElementById('task-name').value;
    const taskDueDate = document.getElementById('task-due-date').value;

    // Create the task element
    const task = document.createElement('li');
    task.innerHTML = `
      <input type="checkbox">
      <span>${taskName}</span>
      <button class="edit">Edit</button>
      <button class="remove">Remove</button>
    `;

    // Add the task to the task list
    taskList.appendChild(task);

    // Clear the form
    form.reset();
}

// Edit an existing task in the task list
function editTask(event) {
    if (event.target.className === 'edit') {
        // Get the task name element
        const taskNameElement = event.target.previousSibling.previousSibling;

        // Get the current task name and due date
        const taskName = taskNameElement.textContent;
        const taskDueDate = taskNameElement.nextSibling.textContent;

        // Update the task name element with an input field
        taskNameElement.innerHTML = `
        <input type="text" value="${taskName}">
        <input type="date" value="${taskDueDate}">
      `;

        // Update the edit button to a save button
        event.target.textContent = 'Save';
        event.target.className = 'save';
    } else if (event.target.className === 'save') {
        // Get the input field and due date
        const inputField = event.target.previousSibling.previousSibling;
        const dueDateField = inputField.previousSibling;

        // Update the task name element with the new task name
        inputField.previousSibling.textContent = inputField.value;

        // Update the due date element with the new due date
        inputField.nextSibling.textContent = dueDateField.value;

        // Update the save button to an edit button
        event.target.textContent = 'Edit';
        event.target.className = 'edit';
    }
}

        // Remove a task from the task list
        function removeTask(event) {
    if (event.target.className === 'remove') {
        event.target.parentNode.remove();
    }
}

        // Mark a task as completed
        function markAsCompleted(event) {
    if (event.target.type === 'checkbox') {
        const taskNameElement = event.target.nextSibling;
        taskNameElement.classList.toggle('completed');
    }
}

        // Event listeners
        form.addEventListener('submit', addTask);
        taskList.addEventListener('click', editTask);
        taskList.addEventListener('click', removeTask);
        taskList.addEventListener('click', markAsCompleted);
}