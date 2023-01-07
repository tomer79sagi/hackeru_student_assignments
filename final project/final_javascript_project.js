class Task {
    description = "";
    id;
    status = TaskStatus;
    date = "";
    constructor(description, id){
        this.description = description;
        this.id = id;
        this.status = TaskStatus.INCOMPLETE; 
        this.date = new Date().toISOString().substring(0,10);
        createDiv(this.id, this.description, this.status, this.date);
    }
}

//create a div than add a task to the div. will work by clicking the button Add Task and entering description
function createDiv(id, description, status, date){
    let new_task = `
        <p id="${id}desc" style="font-size: 20px;">${description}</p>
        <input onchange="taskManager.saveDate(this.id);" type="date" id="${id}date">
        <button onclick="taskManager.edit_task(this.id);" id="${id}edit">Edit</button>
        <button onclick="taskManager.delete_task(this.id);" id="${id}delete">Delete</button> 
        <button onclick="taskManager.change_status(this.id);" id="${id}status">${status}</button>           
    `;
    let task_base = document.createElement("div");
    task_base.id = id;
    task_base.innerHTML = new_task;
    document.getElementById("divs_container").appendChild(task_base);
    if(status === 'Incomplete'){
        document.getElementById(id+"status").classList.add("incomplete_btn");
    }
    else{
        document.getElementById(id+"status").classList.remove("incomplete_btn");
        document.getElementById(id+"status").classList.add("completed_btn");
        document.getElementById(id+"desc").classList.add("well_done");
    }
    document.getElementById(id+"date").value = date;
}

class TaskManager {

    //prop
    Tasks_array = [];

    //methods
    //add
    add(description, id){
        let key = this.gen_key(id);
        let create_task = new Task(description, key);
        this.Tasks_array[key] = create_task;
        localStorage.setItem(key,JSON.stringify(create_task));
    }

    //delete
    delete_task(id){
        let element = document.getElementById(id[0]);
        document.getElementById("divs_container").removeChild(element);
        this.Tasks_array[id[0]] = null;
        localStorage.removeItem(id[0]);
    }

    //edit
    edit_task(id){
        currentJob = id[0];
        edit_inp.id = "edit_input";
        edit_inp.value = document.getElementById(id[0]+"desc").innerHTML;   
        edit_btn.onclick = change_description;
        edit_btn.id = "edit_button";
        document.getElementById("divs_container").appendChild(edit_btn);
        document.getElementById("divs_container").appendChild(edit_inp);
    }

    //change status
    change_status(id){
        id = id[0];
        if(this.Tasks_array[id].status == TaskStatus.INCOMPLETE){
            this.Tasks_array[id].status = TaskStatus.COMPLETED;
            document.getElementById(id+"status").classList.remove("incomplete_btn");
            document.getElementById(id+"status").classList.add("completed_btn");
            document.getElementById(id+"desc").classList.add("well_done");
        }
        else{
            this.Tasks_array[id].status = TaskStatus.INCOMPLETE;
            document.getElementById(id+"status").classList.remove("completed_btn");
            document.getElementById(id+"status").classList.add("incomplete_btn");
            document.getElementById(id+"desc").classList.remove("well_done");
            
        }
        let doc = document.getElementById(id+"status");
        doc.innerHTML = this.Tasks_array[id].status;
        localStorage.setItem(id, JSON.stringify(taskManager.Tasks_array[id]));
    }

    saveDate(id){
        let my_d = document.getElementById(id).value;
        this.Tasks_array[id[0]].date = my_d;
        localStorage.setItem(id[0], JSON.stringify(taskManager.Tasks_array[id[0]]))
    }

    //check the date
    checkDate(id){
        let my_d = (new Date(this.Tasks_array[id].date)).setHours(0,0,0,0);
        let tod_d = new Date().setHours(0,0,0,0);
        if((my_d < tod_d) && (this.Tasks_array[id].status == 'Incomplete')){
            document.getElementById(id+"desc").classList.add("too_late");
            document.getElementById(id+"status").classList.remove("incomplete_btn");
            document.getElementById(id+"status").innerHTML = "Too Late";
            document.getElementById(id+"status").disabled = true;
        }
    }

    //preventing empty cells in array
    gen_key(key){
        for(let j = 0; j <= this.Tasks_array.length; j++){
            if(this.Tasks_array[j]){
                continue;
            }
            else{
                return j;
            }
        }
        return key++;
    }
}

//elements for edit_task
let currentJob = 0;
edit_inp = document.createElement("input");
edit_btn = document.createElement("button");
edit_btn.innerHTML = "Edit";

function change_description(){
    let input = document.getElementById("edit_input")
    taskManager.Tasks_array[currentJob].description = input.value;
    document.getElementById(currentJob+"desc").innerHTML = input.value;
    localStorage.setItem(currentJob, JSON.stringify(taskManager.Tasks_array[currentJob]));
    delete_edit_input()
}

//enum for status
const TaskStatus = {
    INCOMPLETE: 'Incomplete',
    COMPLETED: 'Completed'
}

//a variable of type class TaskNanager which containes the array of all the tasks 
const taskManager = new TaskManager;
//button add task - html
add_btn.onclick = show_input;
//pointer for id
let i = 0;
//clicking on the button will create an input to get the description of the task
let inp = document.createElement("input");
let new_btn = document.createElement("button");
inp.id = "input";
inp.placeholder = "Task Description";
new_btn.innerHTML = "CREATE";
function show_input(){
    new_btn.onclick = create_new_task;
    new_btn.id = "button";
    document.getElementById("divs_container").appendChild(new_btn);
    document.getElementById("divs_container").appendChild(inp);
}

//clicking on the create button will create a new task
function create_new_task(){ //disable the button unless the value of inp isn't empty
    let inp = document.getElementById("input");
    taskManager.add(inp.value, i);
    i++;
    inp.value = " ";
    delete_input();
}

//delete the input and the button after creating the task
function delete_input(){
    let inp = document.getElementById("input");
    let btn = document.getElementById("button");
    inp.remove();
    btn.remove();
}

//delete the input and the button after editting the task
function delete_edit_input(){
    let edit_inp = document.getElementById("edit_input")
    let edit_btn = document.getElementById("edit_button");
    edit_inp.remove()
    edit_btn.remove()
}

//call the tasks back from localStorage
function show_tasks(){
    let ls_array = Object.keys(localStorage);
    for(let j = 0; j <= ls_array.length-1; j++){
        if(JSON.parse(localStorage.getItem(j)) !== null){
            let taskDesc = JSON.parse(localStorage.getItem(j)).description;
            let taskStatus = JSON.parse(localStorage.getItem(j)).status;
            let taskDate = JSON.parse(localStorage.getItem(j)).date;
            taskManager.Tasks_array[j] = JSON.parse(localStorage.getItem(j));
            createDiv(j, taskDesc, taskStatus, taskDate);
            //I call this function only when refreshing or opening the page.
            taskManager.checkDate(j);
        } 
    }
}

