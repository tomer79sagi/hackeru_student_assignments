

const TaskStatus = {
    UNCOMPLETED: 1,
    COMPLETED: 2,
  };
  
  class Task {
    status = TaskStatus.UNCOMPLETED;
    description = "";
  }

  let task = new Task()

  class TaskManager {
    add (task){
      //הגדרת התיאור של המשימה
      task.description = prompt("enter your task");
    
      //(newTask)אלמנט חדש בתוך הדיב הכללי
      let newDiv = document.createElement("div")
  
      //מכניס את הערכים החדשים
      newDiv.innerHTML = task.description + "<br/>" + theTask+"<br><br>"
  
      //ניגשים לדיב הראשי
      let the_big_one = document.querySelector(".newTask");
  
      //מכניסים את את הערך החדש של הדיב שיצרנו בתוך הדיב הראשי
      the_big_one.append(newDiv)
    };
    delete (){

    };
  }

  let taskManager = new TaskManager()
  
  let theTask = `
    <button onclick="CompletTask(this)">Complete task</button>
    <button onclick="DeleteTask(this)">Delete task</button>
    <button onclick="ChangeTask(this)">Change task</button>
    `
 
  function newTask(){
    let taskName = prompt("enter your task");
    
    //(newTask)אלמנט חדש בתוך הדיב הכללי
    let newDiv = document.createElement("div")

    //מכניס את הערכים החדשים
    newDiv.innerHTML = taskName+"<br/>"+theTask+"<br><br>"

    //ניגשים לדיב הראשי
    let the_big_one = document.querySelector(".newTask");

    //מכניסים את את הערך החדש של הדיב שיצרנו בתוך הדיב הראשי
    the_big_one.append(newDiv)

    // document.getElementById("newTask").innerHTML += taskName+"<br/>"+theTask+"<br><br>";

    // function ChangeTask(taskName){
    //     taskName = prompt("Change your task");
    //     document.getElementById("newTask").innerHTML += taskName+"<br><br>";
    // }
  }

  //מחיקה של הדיב שמעל לכפתור המחיקה
  function DeleteTask(button){//button = this
    button.parentNode.remove()//parentNode = newdiv
  }

  function ChangeTask(button){
    let taskName = prompt("Change your task");
    button.parentNode.innerHTML = taskName+"<br/>"+theTask+"<br><br>"//מגדירים משתנה חדש ומדפיסים מחדש את כל הדיב 
  }

  function CompletTask(button){
    button.parentNode

  }

