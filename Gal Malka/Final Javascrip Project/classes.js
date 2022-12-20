class Task {
    id
    title
    description
    endDate
    endTime
    status
    constructor(id,title,description,date,time){
        this.id = id
        this.title = title
        this.description = description
        this.endDate = date
        this.endTime = time
        this.status = "Incomplete"
    }
}

class TaskManager {
    tasks = {}
    createTask(){
        let key = this.generateKey(localStorage.length)
        let title = document.getElementById("task-title").value
        let description = document.getElementById("task-desc").value
        let date = document.getElementById("task-date").value
        let time = document.getElementById("task-time").value
        let task = new Task(key,title,description,date,time)
        let rtime = calculateRemainingTime(date,time)
        let possibletime = checkIfTimeHasPassed(rtime)
        if(checkForAllFields(title,description,date,time)){
            if(possibletime){
                saveData(key,task)
                this.tasks[key] = task
                console.log(task)
                clearFields()
            }
            else {
                alert("The deadline has already passes...")
            }
        } else {
            alert("Please fill all the fields")
        }
    }


    deleteTask(index){
        console.log("delete")
        deletePopup()
        closePopup()
        localStorage.removeItem(index)
        refreshAllTasks()
    }

    
    editTask(index){
        let title = document.getElementById("edit-task-title").value
        let description = document.getElementById("edit-task-desc").value
        let date = document.getElementById("edit-task-date").value
        let time = document.getElementById("edit-task-time").value
    
        let rtime = calculateRemainingTime(date,time)
        let possibletime = checkIfTimeHasPassed(rtime)
        let d = tm.tasks[index]
        console.log(index);
        if(checkForAllFields(title,description,date,time)){
            if(possibletime){
                popupVisible = false
                d.title = title
                d.description = description
                d.endDate = date
                d.endTime = time
                document.getElementById("time"+index).innerHTML = rtime
                updateData(index)
                closePopup()
                refreshAllTasks()
            }
            else {
                alert("The deadline has already passes...")
            }
        } else {
            alert("Please fill all the fields")
        }
    }

    completeTask(index){
        if(tm.tasks[index].status == "Complete"){
            tm.tasks[index].status = "Incomplete"
        } else {
            tm.tasks[index].status = "Complete"
        }
        updateData(currentJob)
        refreshAllTasks()
        deletePopup()
        closePopup()
    }

    generateKey(key){
        for(var i = 0; i <= index; ++i){
            if(this.tasks[i]){
                continue
            } else {
                return i
            }
        }
        return key++
    }
}

