function start() {
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

class Task {
  constructor(task) {
    this.task = task;
  }
  setTask(task) {
    this.task = task;
  }
}
