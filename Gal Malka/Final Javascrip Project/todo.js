const allTask = document.getElementById("all-tasks")
const subTasks = document.getElementById("sub-tasks")
const Popup = document.getElementById("popup-screen")

let currentJob
let popupVisible = false
let showCompleteTasks = false
let index = 0
const tm = new TaskManager
const data = {}

//Local Storage

function loadData(){
    if(typeof(Storage) !== undefined){
        index = localStorage.length
        console.log(localStorage);
        console.log(index);
        Object.keys(localStorage).forEach(key => {
            tm.tasks[key] = JSON.parse(localStorage.getItem(key))
            data[key] = JSON.parse(localStorage.getItem(key))
            createTaskDiv(data[key])
            createSubTask(data[key])
        });
        console.log(tm);
        console.log(data);
    }
}

function saveData(key,value){
    if(typeof(Storage) !== undefined){
        data[key] = value
        localStorage.setItem(key, JSON.stringify(value))
        createTaskDiv(value)
        createSubTask(value)
        index++
    }
}

function updateData(id){
    localStorage.setItem(id,JSON.stringify(data[id]))
}


//Task related
function createTask(){
    var key = generateKey(index)
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

function clearFields(){
    let input_field = document.getElementById("input-field")
    let inputs = input_field.querySelectorAll("input")
    inputs.forEach(element => {
        element.value = ""
    });
}

function refreshAllTasks(){
    let child = allTask.lastElementChild
    while(child){
        allTask.removeChild(child)
        child = allTask.lastElementChild
    }
    child = subTasks.lastElementChild
    while(child){
        subTasks.removeChild(child)
        child = subTasks.lastElementChild
    }
    loadData()
}


//Popup related
function show_task_info(id){
    if(popupVisible){
        closePopup()
    }
    createPopup()
    console.log(id);
    currentJob = id
    popupVisible = true
    console.log(data[id])
    let popup = document.getElementById("popup-screen")
    if(data[id]){
        document.getElementById("form-task-title").innerHTML = data[id].title
        document.getElementById("form-task-desc").innerHTML = data[id].description
        document.getElementById("form-task-date").innerHTML = data[id].endDate
        document.getElementById("form-task-time").innerHTML = data[id].endTime
        document.getElementById("form-task-rtime").innerHTML = calculateRemainingTime(data[id].endDate,data[id].endTime)
        if(data[id].status == "Complete"){
            document.getElementById("check-box").checked = true
        }
        popup.classList.add("active")
    }
}

function saveEdit(){
    let title = document.getElementById("edit-task-title").value
    let description = document.getElementById("edit-task-desc").value
    let date = document.getElementById("edit-task-date").value
    let time = document.getElementById("edit-task-time").value

    let rtime = calculateRemainingTime(date,time)
    let possibletime = checkIfTimeHasPassed(rtime)
    let d = data[currentJob]
    console.log(currentJob);
    if(checkForAllFields(title,description,date,time)){
        if(possibletime){
            popupVisible = false
            d.title = title
            d.description = description
            d.endDate = date
            d.endTime = time
            document.getElementById("time"+currentJob).innerHTML = rtime
            updateData(currentJob)
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

function deleteTask(){
    console.log("delete")
    deletePopup()
    closePopup()
    localStorage.removeItem(currentJob)
    refreshAllTasks()
}


function completeTask(){
    popupVisible = false
    if(data[currentJob].status == "Complete"){
        data[currentJob].status = "Incomplete"
    } else {
        data[currentJob].status = "Complete"
    }
    updateData(currentJob)
    refreshAllTasks()
    deletePopup()
    closePopup()
}

function deletePopup(){
    let child = Popup.lastElementChild
    while(child){
        Popup.removeChild(child)
        child = Popup.lastElementChild
    }
}


function closePopup(){
    popupVisible = false
    Popup.classList.remove("active")
    deletePopup()
}


function setPlaceholders(){
    let title = document.getElementById("edit-task-title")
    let description = document.getElementById("edit-task-desc")
    
    title.placeholder = data[currentJob].title
    description.placeholder = data[currentJob].description
}

//Helpers
function checkForAllFields(title,desc,date,time){
    if(title && desc && date && time){
        return true
    } else {
        return false
    }
}

function generateKey(key){
    for(var i = 0; i <= index; ++i){
        if(data[i]){
            continue
        } else {
            return i
        }
    }
    return key++
}

function updateRemainingTime(){
    console.log("calculating")
    for(var i = 0 ; i<= index;++i){
        if(data[i]){
            let rtime = calculateRemainingTime(data[i].endDate, data[i].endTime)
            document.getElementById("time"+data[i].id).innerHTML = rtime
        }
    } 
}


//Create Divs
function createPopup(){
    let task_html = `
    <div class="close-btn" onclick="closePopup()">&times;</div>
        <div class="form">
            <div class="form-element">
                <label for="email">Task Title</label>
                <div id="form-task-title">Test</div>
            </div>
            <div class="form-element">
                <label for="email">Task Description</label>
                <div id="form-task-desc">Test</div>
            </div>
            <div class="form-element">
                <label for="email">End Date</label>
                <div id="form-task-date">18/12/2022</div>
            </div>
            <div class="form-element">
                <label for="email">End Time</label>
                <div id="form-task-time">18:00</div>
            </div>
            <div class="form-element">
                <label for="email">Remaining Time</label>
                <div id="form-task-rtime">0 Days , 5 Hours , 32 Minutes</div>
            </div>
            <div class="icons-element">
                <img id="edit-icon" src="assets/edit.png" alt="" onclick="editTask()">
                <input class="switch" type="checkbox" id="check-box" onclick="completeTask()"></input>
                <img id="delete-icon" src="assets/delete.png" alt="" onclick="deleteTask()">
            </div>
        </div>
    `

    let task_obj = document.createElement('div')
    task_obj.innerHTML = task_html
    Popup.appendChild(task_obj)
}

function editTask(){
    deletePopup()
    let task_html = `
    <div class="close-btn" onclick="closePopup()">&times;</div>
        <div class="form">
            <div class="form-element">
                <label for="email">Task Title</label>
                <input type="text" id="edit-task-title"></input>
            </div>
            <div class="form-element">
                <label for="email">Task Description</label>
                <input type="text" id="edit-task-desc"></input>
            </div>
            <div class="form-element">
                <label for="email">End Date</label>
                <input type="date" id="edit-task-date"></input>
            </div>
            <div class="form-element">
                <label for="email">End Time</label>
                <input type="time" id="edit-task-time"></input>
            </div>
            <div class="icons-element">
                <button onclick="saveEdit()">Submit</button>
            </div>
        </div>
    `

    let task_obj = document.createElement('div')
    task_obj.innerHTML = task_html
    Popup.appendChild(task_obj)
    setPlaceholders()
}

function createTaskDiv(fields){
    if(showCompleteTasks == false){
        if(fields.status == "Incomplete"){
            let rTime = calculateRemainingTime(fields.endDate,fields.endTime)
            let task_html = `
                    <div class="task_container" id="${fields.id}" onclick="show_task_info(this.id)">
                        <div id="title${fields.id}" class="title">${fields.title}</div>
                        <div id="time${fields.id}" class="remaining-time">${rTime}</div>
                        <div id="status${fields.id}">${fields.status} </div>
                        </label>
                        
                    </div>
                `
            let task_obj = document.createElement('div')
            task_obj.innerHTML = task_html
            allTask.appendChild(task_obj)
        }
    } else {
        let rTime = calculateRemainingTime(fields.endDate,fields.endTime)
        let task_html = `
                <div class="task_container" id="${fields.id}" onclick="show_task_info(this.id)">
                    <div id="title${fields.id}" class="title">${fields.title}</div>
                    <div id="time${fields.id}" class="remaining-time">${rTime}</div>
                    <div id="status${fields.id}">${fields.status} </div>
                    </label>
                    
                </div>
            `
        let task_obj = document.createElement('div')
        task_obj.innerHTML = task_html
        allTask.appendChild(task_obj)
    }
}

function createSubTask(fields){
    let rTime = calculateRemainingTime(fields.endDate,fields.endTime)
    let days = String(rTime).charAt(0)
    console.log(days);
    if(days == 0 && fields.status == "Incomplete"){
        let task_html = `
                <div class="task_container" id="${fields.id}" onclick="show_task_info(this.id)">
                    <div id="title${fields.id}" class="sub-title">${fields.title}</div>
                    <div id="time${fields.id}" class="sub-remaining-time">${rTime}</div>
                    <div id="status${fields.id}">${fields.status} </div>
                    </label>
                    
                </div>
            `
        let task_obj = document.createElement('div')
        task_obj.innerHTML = task_html
        subTasks.appendChild(task_obj)
    }
}

function toggleFilter(){
    if(showCompleteTasks){
        showCompleteTasks = false 
    } else {
        showCompleteTasks = true
    }
    refreshAllTasks()
}

setInterval(updateRemainingTime,60000)