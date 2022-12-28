let count = 0;
const add_task = document.getElementById("add_task");
const all_task = document.getElementById("all_task");
const completed_task = document.getElementById("completed_task");
const uncompleted_task = document.getElementById("uncompleted_task");
const Standing = Object.freeze({
  Uncompleted: Symbol(0),
  Completed: Symbol(1),
});
let taskArr = [];

class Task {
  description = "New Task";
  standing = Standing.Uncompleted;
  id = `task_${count}`;
  dateTime;

  changeId(currentItem, taskArr) {
    let displayedTask = document.querySelectorAll(".task");
    for (let i = currentItem; i < count; i++) {
      displayedTask[i].id = `task_${i}`;
      taskArr[i].id = `task_${i}`;
      localStorage.setItem(
        taskArr[i].id,
        JSON.stringify({
          ...taskArr[i],
          standing: taskArr[i].standing.toString(),
        })
      );
    }
    localStorage.removeItem(`task_${count}`);
  }

  static recreateTask(task) {
    let temp_task = new Task();
    temp_task.description = task.description;
    temp_task.id = task.id;
    temp_task.standing = task.standing;
    temp_task.dateTime = Date.parse(task.dateTime);
    return temp_task;
  }
}

class TaskManager {
  addTask(task) {
    taskArr.push(task);
    this.renderTask(task);
    this.setCurrentDate(task);
    this.deleteTask(task);
    this.changeStanding(task);
    this.editTask(task);
    this.saveData(task);
    // console.log("after creating:", taskArr);
  }

  renderTask(task) {
    const manager = document.querySelector(".task-manager");
    const div = document.createElement("div");
    div.className = "task";
    div.id = task.id;
    if (task.standing == Standing.Uncompleted) {
      div.innerHTML = `<div class="description">${task.description}</div>
            <div class="date-container center">
                <input type="date" class="date" readonly>
                <input type="time" class="date" readonly>
            </div>
            <ul class="button-bar">
                <li class="edit button">
                    <i class="fi fi-rr-edit"></i>
                </li>   
                <li class="delete button">
                    <i class="fi fi-rr-trash"></i>
                </li>
                <li class="uncompleted button">
                    <i class="fi fi-rr-square"></i>
                </li>
            </ul>
            `;
    } else if (task.standing == Standing.Completed) {
      div.innerHTML = `<div class="description">${task.description}</div>
            <div class="date-container center">
                <input type="date" class="date" readonly>
                <input type="time" class="date" readonly>
            </div>
            <ul class="button-bar">
                <li class="edit button">
                    <i class="fi fi-rr-edit"></i>
                </li>   
                <li class="delete button">
                    <i class="fi fi-rr-trash"></i>
                </li>
                <li class="completed button">
                    <i class="fi fi-rr-checkbox"></i>
                </li>
            </ul>
            `;
    }
    manager.append(div);
    if (completed_task.className == "button nav") {
      div.style.display = "none";
    }
  }

  setCurrentDate(task){
    let currentTask = document.querySelector("#" + task.id);
    let date = new Date();
    date.setDate(date.getDate() + 1);
    let currentDate = date.toISOString().substring(0,10);
    let currentTime = date.toISOString().substring(11,16);
    currentTask.childNodes[2].childNodes[1].value = currentDate;
    currentTask.childNodes[2].childNodes[3].value = currentTime;
    task.dateTime = date.toISOString();
  }

  deleteTask(task) {
    let currentTask = document.querySelector("#" + task.id);
    // console.log(currentTask);
    // console.log(currentTask.childNodes[4]);
    // console.log(currentTask.childNodes[4].childNodes[3]);
    currentTask.childNodes[4].childNodes[3].onclick = function () {
      localStorage.removeItem(task.id);
      this.parentNode.parentNode.remove();
      taskArr.splice(task.id.charAt(task.id.length - 1), 1);
      count--;
      task.changeId(task.id.charAt(task.id.length - 1), taskArr);
      // console.log("after deleting", taskArr);
    };
  }

  changeStanding(task) {
    let currentTask = document.querySelector("#" + task.id);
    currentTask.childNodes[4].childNodes[5].onclick = function () {
      if (task.standing == Standing.Uncompleted) {
        this.className = "completed button";
        this.innerHTML = `<i class="fi fi-rr-checkbox"></i>`;
        task.standing = Standing.Completed;
        localStorage.setItem(
          task.id,
          JSON.stringify({ ...task, standing: task.standing.toString() })
        );
        if (uncompleted_task.className == "button nav") {
          currentTask.style.display = "none";
        }
      } else if (task.standing == Standing.Completed) {
        this.className = "uncompleted button";
        this.innerHTML = `<i class="fi fi-rr-square"></i>`;
        task.standing = Standing.Uncompleted;
        localStorage.setItem(
          task.id,
          JSON.stringify({ ...task, standing: task.standing.toString() })
        );
        if (completed_task.className == "button nav") {
          currentTask.style.display = "none";
        }
      }
      // console.log("after changing Standing", taskArr);
    };
  }

  editTask(task) {
    let currentTask = document.querySelector("#" + task.id);
    let input = document.createElement("input");
    let description = currentTask.firstChild;
    input.type = "text";
    input.className = "onchange";
    input.value = description.innerHTML;
    currentTask.childNodes[4].childNodes[1].onclick = function () {
      description.innerHTML = "";
      description.appendChild(input);
      input.focus();
      input.select();
      input.onblur = () => {
        description.textContent = input.value;
        task.description = description.textContent;
        localStorage.setItem(
          task.id,
          JSON.stringify({ ...task, standing: task.standing.toString() })
        );
        // console.log("after editing standing", taskArr);
      };
      input.onkeyup = (e) => {
        if (e.key === "Enter" || e.keyCode === 13) {
          description.textContent = input.value;
          task.description = description.textContent;
        }
      };
    };
  }
  saveData(task) {
    if (typeof Storage !== "undefined") {
      // console.log(task);
      localStorage.setItem(
        task.id,
        JSON.stringify({ ...task, standing: task.standing.toString() })
      );
      // console.log(
      //   "current item",
      //   localStorage.key(count),
      //   localStorage.getItem(task.id)
      // );
      count++;
    }
  }
}

const symbolFromString = (symbolAsString) =>
  symbolAsString === "Symbol(0)" ? Standing.Uncompleted : Standing.Completed;
function loadData() {
  if (typeof Storage !== "undefined") {
    count = localStorage.length;
    // Object.keys(localStorage).forEach((key) => {                                       /------------------------------\
    //   let idx = parseInt(key.charAt(key.length - 1));                                  |                              \
    //   taskArr[idx] = JSON.parse(localStorage.getItem(key));                            |                              \
    //   taskArr[idx].standing = symbolFromString(taskArr[idx].standing);                 |                              \
      // console.log(taskArr[idx]);                                                       |                              \
      // taskArr[idx] = Task.recreateTask(taskArr[idx]);                                  |                              \
      // console.log(taskArr[idx]);                                                       |                              \
      // taskManager.renderTask(taskArr[idx]);                                            |                              \
      // taskManager.deleteTask(taskArr[idx]);                                            |         NOT WORKING          \
      // taskManager.changeStanding(taskArr[idx]);                                        |  MAYBE I'LL FIX THIS ONE DAY \
      // taskManager.editTask(taskArr[idx]);                                              |                              \
      // console.log(idx)                                                                 |                              \
    // });                                                                                |                              \
    // console.log(localStorage);                                                         |                              \
    // console.log(count);                                                                |                              \
    // console.log(taskArr);                                                              \------------------------------|
    for(let i = 0; i<Object.keys(localStorage).length; i++){
      taskArr[i] = JSON.parse(localStorage.getItem(`task_${i}`));
      taskArr[i].standing = symbolFromString(taskArr[i].standing);
      // console.log(taskArr[i]);
      taskArr[i] = Task.recreateTask(taskArr[i]);
      // console.log(taskArr[i]);
      taskManager.renderTask(taskArr[i]);
      taskManager.deleteTask(taskArr[i]);
      taskManager.changeStanding(taskArr[i]);
      taskManager.editTask(taskArr[i]);
      console.log(i)
    }
    console.log(localStorage.length);
  }
}

function createTask() {
  taskManager.addTask(new Task());
}

let taskManager = new TaskManager();

document.body.onload = loadData;
add_task.onclick = createTask;

function displayTask(button) {
  let disactive = "button nav disactive";
  let active = "button nav";
  let completed = document.querySelectorAll(".completed");
  let uncompleted = document.querySelectorAll(".uncompleted");
  if (button == all_task) {
    all_task.className = active;
    completed_task.className = disactive;
    uncompleted_task.className = disactive;
    completed.forEach((elem) => {
      elem.parentNode.parentNode.style.display = "flex";
    });
    uncompleted.forEach((elem) => {
      elem.parentNode.parentNode.style.display = "flex";
    });
  } else if (button == completed_task) {
    all_task.className = disactive;
    completed_task.className = active;
    uncompleted_task.className = disactive;
    uncompleted.forEach((elem) => {
      elem.parentNode.parentNode.style.display = "none";
    });
    completed.forEach((elem) => {
      elem.parentNode.parentNode.style.display = "flex";
    });
  } else if (button == uncompleted_task) {
    all_task.className = disactive;
    completed_task.className = disactive;
    uncompleted_task.className = active;
    completed.forEach((elem) => {
      elem.parentNode.parentNode.style.display = "none";
    });
    uncompleted.forEach((elem) => {
      elem.parentNode.parentNode.style.display = "flex";
    });
  }
}

all_task.addEventListener("click", () => {
  displayTask(all_task);
});
completed_task.addEventListener("click", () => {
  displayTask(completed_task);
});
uncompleted_task.addEventListener("click", () => {
  displayTask(uncompleted_task);
});
