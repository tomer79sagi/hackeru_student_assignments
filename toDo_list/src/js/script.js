const TaskStatus = {
  UNCOMPLITED: 1,
  COMPLITED: 2,
};

function start() {
  const uncomplitedlist = document.querySelector(".tasks-uncomplited");
  const complitedlist = document.querySelector(".tasks-complited");
  const checkboxes = document.querySelector(".task-checkbox");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = new Task(taskInput.value);
    taskInput.value = "";
    uncomplitedlist.appendChild(todo.displayTask());
    console.log(checkboxes);
  });
}

class Task {
  constructor(task) {
    this.staus = TaskStatus.UNCOMPLITED;
    this.task = task;
    this.date = new Date();
  }

  displayTask() {
    let div = document.createElement("div");
    div.classList.add("task");
    div.innerHTML = `<div class="task-content">
    <input
      type="checkbox"
      name="task-checkbox"
      class="task-checkbox"
    />
    <input
      type="text"
      name="task-text"
      class="task-text"
      value="${this.task}"
      autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
      
    />
  </div>
  <div class="time">${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}</div>
  <img src="img/garbage.svg" alt="delete" class="delete" onclick="this.parentElement.remove()"/>`;
    return div;
  }
}
