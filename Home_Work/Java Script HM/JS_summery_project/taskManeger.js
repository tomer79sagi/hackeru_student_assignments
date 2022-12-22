const TaskStatus = {
  UNCOMLETED: 1,
  COMPLETED: 2,
};

class TaskManager {
  add = "Add task";
  delete = "Delete";
}

class Task {
  status = TaskStatus.UNCOMLETED;
  description = "";
}

function newTask() {
  let text = prompt("");
  let task = `
<button onclick="deleteTask();">Delete</button>
<button onclick="editTask();">Edit</button>
<button onclick="completedTask();">Completed</button>
`;
  document.getElementById("addTask").innerHTML += task + text + "<br/><br/>";
}

// function deleteTask(){

// }

// function editTask(){
//     let text = document.createElement("input");
// }

// function completedTask()

// <label for="7_1">enter first number</label><br>
//     <input type="number" name="7_1" id="7_1"><br>
