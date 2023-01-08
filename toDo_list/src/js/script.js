const TaskStatus = {
  UNCOMPLITED: 1,
  COMPLITED: 2,
};


function start() {
  const uncomplitedlist = document.querySelector(".tasks-uncomplited");
  const complitedlist = document.querySelector(".tasks-complited");

  //// laod task from local storage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("task-")) {
      const task = JSON.parse(localStorage.getItem(key));
      date = new Date(task.date);
      const todo = new Task(task.task, task.id,task.status,date,);
      if (todo.status === TaskStatus.COMPLITED) {
        complitedlist.appendChild(todo.displayTask());
        document.getElementById(todo.id).checked = true;
      } else {
        uncomplitedlist.appendChild(todo.displayTask());
      }
      document.getElementById(todo.id).addEventListener("change", (e) => {
        if (e.target.checked) {

          complitedlist.appendChild(document.getElementById(todo.id).parentElement.parentElement);
          todo.status = TaskStatus.COMPLITED;
          localStorage.setItem(`task-${todo.id}`, JSON.stringify(todo));
        }
        else {
          uncomplitedlist.appendChild(document.getElementById(todo.id).parentElement.parentElement);
          todo.status = TaskStatus.UNCOMPLITED;
          localStorage.setItem(`task-${todo.id}`, JSON.stringify(todo));
        }

      });
    }
  }
// create task from form
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let id = Math.random()*10000;
    let status = TaskStatus.UNCOMPLITED;
    let date = new Date();
    const todo = new Task(taskInput.value,id,status,date);
    taskInput.value = "";
    localStorage.setItem(`task-${id}`, JSON.stringify(todo)); //add task to the local storage
    uncomplitedlist.appendChild(todo.displayTask());
    document.getElementById(todo.id).addEventListener("change", (e) => {
      if (e.target.checked) {

        complitedlist.appendChild(document.getElementById(todo.id).parentElement.parentElement);
        todo.status = TaskStatus.COMPLITED;
        localStorage.setItem(`task-${todo.id}`, JSON.stringify(todo));

      }
      else {
        uncomplitedlist.appendChild(document.getElementById(todo.id).parentElement.parentElement);
        todo.status = TaskStatus.UNCOMPLITED;
        localStorage.setItem(`task-${todo.id}`, JSON.stringify(todo));
      }

    });
  });


}

class Task {
  constructor(task,id,status,date) {
    this.status = status;
    this.task = task;
    this.date = date;
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
      autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" onfocusout="updateStorage(this)" />
  </div>
  <div class="time"><span style="font-size: smaller">${this.date.toDateString()}</span> ${this.date.getHours()}:${this.date.getMinutes().toString().length>1? this.date.getMinutes():"0" + this.date.getMinutes()}</div>
  <img src="img/garbage.svg" alt="delete" class="delete" onclick="removeElem(this)"/>`;
    return div;
  }
}


function removeElem(obj) {

  localStorage.removeItem(`task-${obj.parentElement.firstChild.firstChild.nextElementSibling.id}`);
  obj.parentElement.remove();
}

function updateStorage(obj) {
  const task = JSON.parse(localStorage.getItem(`task-${obj.previousElementSibling.id}`));
  task.task = obj.value;
  localStorage.setItem(`task-${obj.previousElementSibling.id}`, JSON.stringify(task));
}

