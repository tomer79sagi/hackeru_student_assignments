
let theTask = `
    <button onclick="CompletTask(this)">Complete task</button>
    <button onclick="taskManager.delete(this)">Delete task</button> <!-- שינוי הכפתור למתודה בתוך הכלאס -->
    <button onclick="taskManager.change(this)">Change task</button> <!-- שינוי הכפתור למתודה בתוך הכלאס -->
    `

//מערך חדש
const TaskArray = []
//מספר התחלתי של האיי די של כל טאסק
let taskNumber = TaskArray.length

const TaskStatus = {
    UNCOMPLETED: 1,
    COMPLETED: 2,
};

class Task {
    status = TaskStatus.UNCOMPLETED;
    description = "";
    //הגדרת id לכל TASK
    id = taskNumber;
}

class TaskManager {
    add(task) {
        //הגדרת התיאור של המשימה
        task.description = prompt("enter your task");

        //(newTask)אלמנט חדש בתוך הדיב הכללי
        let newDiv = document.createElement("div")

        //הגדרת האיי די של הניו דיב מבוסס על איי די של הטאסק
        newDiv.id = task.id

        //מכניס את הערכים החדשים
        newDiv.innerHTML = task.description + "<br/>" + theTask + "<br><br>"

        //ניגשים לדיב הראשי
        let the_big_one = document.querySelector(".newTask");

        //מכניסים את את הערך החדש של הדיב שיצרנו בתוך הדיב הראשי
        the_big_one.append(newDiv)

        //הכנסת המשימה למערך
        TaskArray.push(task)

        //הדפסת המערך אחרי כל משימה
        console.log(TaskArray);

        taskNumber++
    };
    delete(button) {

        // x == newDiv id
        let x = button.parentNode.id
        console.log(x);
        button.parentNode.remove()
        

        TaskArray.forEach(task => {
            if (task.id == x) {
                //עובר על המערך ומחפש איי די שדומה לאיקס ואז מוציא אותו מהמערך
                TaskArray.splice(TaskArray.indexOf(task),1)
            }
        });
        
        //מראה את המערך אחרי המחיקה
        console.log(TaskArray);

    };
    change(button) {
        let taskName = prompt("Change your task");
        button.parentNode.innerHTML = taskName + "<br/>" + theTask + "<br><br>"//מגדירים משתנה חדש ומדפיסים מחדש את כל הדיב 
    }
}

let taskManager = new TaskManager()

//הגדרת משתנה חדש לכפתור משימה חדשה
let Add_new_task = document.getElementById("Add_task")

//הגדרת כפתור לחיץ לאיידי
Add_new_task.onclick = () => { taskManager.add(new Task()) }



// document.getElementById("newTask").innerHTML += taskName+"<br/>"+theTask+"<br><br>";

// function ChangeTask(taskName){
//     taskName = prompt("Change your task");
//     document.getElementById("newTask").innerHTML += taskName+"<br><br>";
// }

//מחיקה של הדיב שמעל לכפתור המחיקה
//   function DeleteTask(button){//button = this
//     button.parentNode.remove()//parentNode = newdiv
//   }

// function ChangeTask(button) {
//     let taskName = prompt("Change your task");
//     button.parentNode.innerHTML = taskName + "<br/>" + theTask + "<br><br>"//מגדירים משתנה חדש ומדפיסים מחדש את כל הדיב 
// }

function CompletTask(button) {
    button.parentNode

}
