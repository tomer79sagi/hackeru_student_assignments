//משתנה שמכיל את כל הכפתורים הנדרשים
const TaskArray = [];
let taskNumber = TaskArray.length;

// a new array to put tasks inside

//serial number of task in array

//Enum
const TaskStatus = {
  UNCOMPLETED: 1,
  COMPLETED: 2,
};

class Task {
  status = TaskStatus.UNCOMPLETED;
  description = "";
  //task id / serial number
  id = taskNumber;
}

class TaskManager {
  //function that add tasks
  add(task) {
    //task description
    task.description = prompt("enter your task");
    let theTask = `
        <div>
          ${task.description}
        </div>
        <div>
          <button onclick="CompletTask(this)">Complete task</button>
          <button onclick="taskManager.delete(this)">Delete task</button> <!-- שינוי הכפתור למתודה בתוך הכלאס -->
          <button onclick="taskManager.change(this)">Change task</button> <!-- שינוי הכפתור למתודה בתוך הכלאס -->
          <input type="checkbox" id="checkboxID_${task.id}">
          <label for="checkboxID_${task.id}">completed</label>
        </div>
        `;
    // add new div inside the "father div" that we gonna add to it the tasks buttonns and description
    let newDiv = document.createElement("div");

    // add task id to the new div
    newDiv.id = task.id;

    //add the description and the buttons to the new div
    newDiv.innerHTML = theTask + "<br><br>";

    //set the div id as the "big one"
    let the_big_one = document.querySelector(".newTask");

    //add the new div value inside the "big one"
    the_big_one.append(newDiv);

    //add "task" to task array
    TaskArray.push(task);

    //print the array every task
    console.log(TaskArray);
    // add counter +1 every task
    taskNumber++;
  }

  // function for the delete button
  delete(button) {
    // x == newDiv id
    let x = button.parentNode.parentNode.id;
    console.log(x);
    button.parentNode.parentNode.remove();

    TaskArray.forEach((task) => {
      if (task.id == x) {
        //עובר על המערך ומחפש איי די שדומה לאיקס ואז מוציא אותו מהמערך
        TaskArray.splice(TaskArray.indexOf(task), 1);
      }
    });

    //show array value after deleting
    console.log(TaskArray);
  }

  //function that changing the description
  change(button) {
    let x = button.parentNode.parentNode.id;

    let taskName = prompt("Change your task");
    //new varieble that add a new discription and adds all buttons
    button.parentNode.parentNode.childNodes[1].textContent = taskName;
    TaskArray.forEach((task) => {
      if (task.id == x) {
        task.description = taskName;
      }
    });
    console.log(TaskArray);
  }
}

let taskManager = new TaskManager();

//הגדרת משתנה חדש לכפתור משימה חדשה
let Add_new_task = document.getElementById("Add_task");

//הגדרת כפתור לחיץ לאיידי
Add_new_task.onclick = () => {
  taskManager.add(new Task());
};

function CompletTask(button) {
  button.parentNode;
}
