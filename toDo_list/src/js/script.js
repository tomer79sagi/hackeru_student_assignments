const TaskStatus = {
  UNCOMPLITED: 1,
  COMPLITED: 2,
};


function start() {
  const uncomplitedlist = document.querySelector(".tasks-uncomplited");
  const complitedlist = document.querySelector(".tasks-complited");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let id = Math.random()*10000;
    console.log(id);
    const todo = new Task(taskInput.value,id);
    taskInput.value = "";
    uncomplitedlist.appendChild(todo.displayTask());
    document.getElementById(todo.id).addEventListener("change", (e) => {
      if (e.target.checked) {

        complitedlist.appendChild(document.getElementById(todo.id).parentElement.parentElement);
        todo.staus = TaskStatus.COMPLITED;

      }
      else {
        uncomplitedlist.appendChild(document.getElementById(todo.id).parentElement.parentElement);
        todo.staus = TaskStatus.UNCOMPLITED;
      }

    });
  });


}

class Task {
  constructor(task,id) {
    this.staus = TaskStatus.UNCOMPLITED;
    this.task = task;
    this.date = new Date();
    this.id = id;
  }

  displayTask() {
    let div = document.createElement("div");
    div.classList.add("task");
    div.innerHTML = `<div class="task-content"  >
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
      autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />
  </div>
  <div class="time">${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}</div>
  <img src="img/garbage.svg" alt="delete" class="delete" onclick="this.parentElement.remove()"/>`;
    return div;
  }
}
