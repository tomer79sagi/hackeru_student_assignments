const TASK_STATUS = {
  UNCOMPLITED: 1,
  COMPLITED: 2,
};

function start() {
  const uncompletedTasksList = document.querySelector(".tasks-uncomplited");
  const completedTasksList = document.querySelector(".tasks-complited");

  // load tasks from local storage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("task-")) {
      const task = JSON.parse(localStorage.getItem(key));
      const todo = new Task(task.task, task.id, task.status, task.date);
      appendTask(todo);
    }
  }

  // create task from form
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = Math.random() * 10000;
    const status = TASK_STATUS.UNCOMPLITED;
    const date = new Date();
    const todo = new Task(taskInput.value, id, status, date);
    taskInput.value = "";
    localStorage.setItem(`task-${id}`, JSON.stringify(todo)); // add task to local storage
    appendTask(todo);
  });
}

function appendTask(task) {
  const list = task.status === TASK_STATUS.COMPLITED ? completedTasksList : uncompletedTasksList;
  list.appendChild(task.displayTask());

  const checkbox = document.getElementById(task.id);
  checkbox.addEventListener("change", () => {
    const newStatus = checkbox.checked ? TASK_STATUS.COMPLITED : TASK_STATUS.UNCOMPLITED;
    updateTaskStatus(task, newStatus);
  });
}

function updateTaskStatus(task, newStatus) {
  task.status = newStatus;
  localStorage.setItem(`task-${task.id}`, JSON.stringify(task));
  const list = newStatus === TASK_STATUS.COMPLITED ? completedTasksList : uncompletedTasksList;
  list.appendChild(document.getElementById(task.id).parentElement.parentElement);
}

class Task {
  constructor(task, id, status, date) {
    this.status = status;
    this.task = task;
    this.date = date;
    this.id = id;
  }

  displayTask() {
    let div = document.createElement("div");
    div.classList.add("task");
    div.innerHTML = `<div class="task-content">
      <input
        type="checkbox"
        name="task-checkbox"
        class="task-checkbox"
        id="${this.id}"
      />
      <input
        type="text"
        name="task-text"
        class="task-text"
        value="${this.task}"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        onfocusout="updateStorage(this)"
      />
    </div>
    <div class="time">${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}</div>`;
    return div;
  }
}
