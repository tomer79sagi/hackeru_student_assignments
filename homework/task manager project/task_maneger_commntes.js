/**
 * @file taskManeger.js
 *
 * @copyright Copyright 2022 Eytan Bellin | All rights
 *                         to reserved to Eytan Bellin.
 *
 * @project    Task Manager
 * @date       December 27, 2022
 * @brief      This file comprises the implementation
 *                         of the Task Manager module.
 *******************************************************************************/

/******************************************************************************/
/*     ENUMS                                                                  */
/******************************************************************************/

const TaskStatus = {
    UNCOMPLETED: 1,
    COMPLETED: 2,
  };
  
  /******************************************************************************/
  /*     CLASSES IMPLEMENTATION                                                 */
  /******************************************************************************/
  
  /* Task Class */
  class Task {
    /* Class Attributes */
    status = TaskStatus.UNCOMPLETED;
    description = "";
    id = taskNumber;
  }
  
  /* Task Manager Class */
  class TaskManager {
    /* Class Functions: */
    /* 1. AddTask       */
    /* 2. DeleteTask    */
    /* 3. EditTask      */
    /* 4. CompletTask   */
  
    /**
     * This function adds a new task.
     * Executed when AddTask button is pressed.
     *
     * @param  task - A new instance of Task class
     *
     * @return None
     */
    AddTask(task) {
      /* Task description */
      task.description = prompt("enter your task");
  
      /* Create all task elements */
      let taskStructure = `
          <div>
              ${task.description}
          </div>
  
          <div>
              <button onclick="taskManager.CompletTask(this)">Complete task</button>
  
              <button onclick="taskManager.DeleteTask(this)">Delete task</button>
            
              <button onclick="taskManager.EditTask(this)">Change task</button>
            
              <input type="checkbox" id="checkboxID_${task.id}">
  
              <label for="checkboxID_${task.id}>completed</label>
          </div>
          `;
  
      // add new div inside the "father div" that we gonna add to it the tasks buttonns and description
      let newDiv = document.createElement("div");
  
      /* Assign the task id to the new div */
      newDiv.id = task.id;
  
      //add the description and the buttons to the new div
      newDiv.innerHTML = taskStructure + "<br><br>";
  
      //set the div id as the "big one"
      let the_big_one = document.querySelector(".newTask");
  
      //add the new div value inside the "big one"
      the_big_one.append(newDiv);
  
      //add "task" to task array
      taskArray.push(task);
      //print the array every task
      console.log(taskArray);
      // add counter +1 every task
      taskNumber++;
    }
  
    /**
     * This function deletes an existing task.
     * Executed when DeleteTask button is pressed.
     *
     * @param  button - The button that triggered the function
     *
     * @return None
     */
    DeleteTask(button) {
      let x = button.parentNode.parentNode.id;
      console.log(x);
  
      button.parentNode.parentNode.remove();
  
      taskArray.forEach((task) => {
        if (task.id == x) {
          //עובר על המערך ומחפש איי די שדומה לאיקס (המיקום במערך) ואז מוציא אותו מהמערך
          taskArray.splice(taskArray.indexOf(task), 1);
        }
      });
  
      //show array value after deleting
      console.log(taskArray);
    }
  
    /**
     * This function allowas editing the description of an existing task.
     * Executed when EditTask button is pressed.
     *
     * @param  button - The button that triggered the function
     *
     * @return None
     */
    EditTask(button) {
      let x = button.parentNode.parentNode.id;
      let taskName = prompt("Change your task");
  
      //new varieble that add a new discription and adds all buttons
      button.parentNode.parentNode.childNodes[1].textContent = taskName;
  
      taskArray.forEach((task) => {
        if (task.id == x) {
          task.description = taskName;
        }
      });
  
      console.log(x);
      console.log(taskArray);
    }
  
    /**
     * This function completes an existing task.
     * Executed when CompletTask button is pressed.
     *
     * @param  button - The button that triggered the function
     *
     * @return None
     */
    CompletTask(button) {
      let x = button.parentNode.parentNode.id;
  
      taskArray.forEach((task) => {
        if (task.id == x) {
          task.status = TaskStatus.COMPLETED;
          let taskDiv = document.getElementById(task.id);
          taskDiv.style.textDecoration = "line-through";
          let checkbox = taskDiv.querySelector(`#checkboxID_${task.id}`);
          checkbox.checked = true;
        }
      });
      console.log(taskArray);
    }
  }
  
  /******************************************************************************/
  /*     GLOBAL VARIABLES                                                       */
  /******************************************************************************/
  
  /* Create Tasks array */
  const taskArray = [];
  
  /* Create Task Manager instance */
  let taskManager = new TaskManager();
  let taskNumber = taskArray.length;
  
  /* Define Add Task Button */
  let add_task_button = document.getElementById("Add_task");
  
  /* Define OnClick action */
  add_task_button.onclick = () => {
    taskManager.AddTask(new Task());
  };