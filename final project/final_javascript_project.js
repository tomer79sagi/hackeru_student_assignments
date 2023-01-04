class Task {
    description = "";
    id;
    status = TaskStatus;
    constructor(description, id){
        this.description = description;
        this.id = id;
        this.status = TaskStatus.INCOMPLETE;
        createDiv(id, description);
        
    }
}

//create a div than add a task to the div. will work by clicking the button Add Task and entering description
function createDiv(id, description){
    let new_task = `
        <p id="${id}desc" style="font-size: 20px;">${description}</p>
        <input onchange="taskManager.checkDate(this.id);" type="date" id="${id}date">
        <button onclick="taskManager.edit_task(this.id);" id="${id}edit" >Edit</button>
        <button onclick="taskManager.delete_task(this.id);" id="${id}delete" >Delete</button> 
        <button onclick="taskManager.change_status(this.id);" class="incomplete_btn" id="${id}status">${TaskStatus.INCOMPLETE}</button>           
    `;
    let task_base = document.createElement("div");
    task_base.id = id;
    task_base.innerHTML = new_task;
    document.getElementById("divs_container").appendChild(task_base); 
}
 
class TaskManager {

    //prop
    Tasks_obj = [];//change name to task_array

    //methods
    //add
    add(description, id){
        let key = this.gen_key(id);
        let create_task = new Task(description, key);
        this.Tasks_obj[key] = create_task;
        localStorage.setItem(key,JSON.stringify(create_task));
        console.log(this.Tasks_obj[key]);
    }

    //delete
    delete_task(id){
        let element = document.getElementById(id[0]);
        document.getElementById("divs_container").removeChild(element);
        this.Tasks_obj[id[0]] = null;
        console.log(this.Tasks_obj);
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
        if(taskManager.Tasks_obj[id].status == TaskStatus.INCOMPLETE){
            taskManager.Tasks_obj[id].status = TaskStatus.COMPLETED;
            document.getElementById(id+"status").classList.remove("incomplete_btn");
            document.getElementById(id+"status").classList.add("completed_btn");
        }
        else{
            taskManager.Tasks_obj[id].status = TaskStatus.INCOMPLETE;
            document.getElementById(id+"status").classList.remove("completed_btn");
            document.getElementById(id+"status").classList.add("incomplete_btn");
        }
        let doc = document.getElementById(id+"status");
        doc.innerHTML = taskManager.Tasks_obj[id].status;
        console.log(id);
        console.log(taskManager.Tasks_obj[id]);
        console.log(JSON.stringify(taskManager.Tasks_obj[id]));
        localStorage.setItem(id, JSON.stringify(taskManager.Tasks_obj[id]));
        console.log(localStorage.getItem(id));
    }

    checkDate(id){
        let my_d = new Date(document.getElementById(id).value).setHours(0,0,0,0);
        let tod_d = new Date().setHours(0,0,0,0);
        console.log(typeof(my_d)+my_d);
        console.log(typeof(tod_d)+tod_d);
        if((my_d < tod_d) && (this.Tasks_obj[id[0]].status == 'Incomplete')){
            console.log("Too Late!");
            document.getElementById(id[0]+"desc").classList.add("too_late");
        }
        else if(my_d > tod_d){
            console.log("Too Soon!");
        }
        else if((my_d < tod_d) && (this.Tasks_obj[id[0]].status == 'Completed')){
            console.log("completed in time");
        }
        else{
            console.log("Today");
        }
        //localStorage.setItem(id[0], JSON.stringify(localStorage.getItem(id)))
    }
    //preventing empty cells in array
    gen_key(key){
        for(let j = 0; j <= this.Tasks_obj.length; j++){
            if(this.Tasks_obj[j]){
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
    taskManager.Tasks_obj[currentJob].description = input.value;
    document.getElementById(currentJob+"desc").innerHTML = input.value;
    localStorage.setItem(currentJob, JSON.stringify(taskManager.Tasks_obj[currentJob]));
    delete_edit_input()
}

//enum for status
const TaskStatus = {
    INCOMPLETE: 'Incomplete',
    COMPLETED: 'Completed'
}

//a variable of type class TaskNanager which containes the array of all the tasks 
const taskManager = new TaskManager;
console.log(taskManager);
//button add task - html
add_btn.onclick = show_input;
//pointer for id
let i = 0;
//clicking on the button will create an input to get the description of the task
let inp = document.createElement("input");
let new_btn = document.createElement("button");
inp.id = "input";
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
    console.log(taskManager.Tasks_obj);
}

//delete the input and the button after creating the task
function delete_input(){
    let inp = document.getElementById("input");
    let btn = document.getElementById("button");
    inp.remove();
    btn.remove();
}

function delete_edit_input(){
    let edit_inp = document.getElementById("edit_input")
    let edit_btn = document.getElementById("edit_button");
    edit_inp.remove()
    edit_btn.remove()
}



//the code will be running in a browser, this assumes the browser is running for at least 24 hrs and will not work otherwise.
//var dayInMilliseconds = 1000 * 60 * 60 * 24;
//setInterval(function() { console.log("foo"); }, dayInMilliseconds );

function show_tasks(){
    //console.log(JSON.parse(localStorage));
    let ls_array = Object.keys(localStorage);
    for(let j = 0; j <= ls_array.length-1; j++){
        if(JSON.parse(localStorage.getItem(j)) !== null){
            //console.log(typeof(JSON.parse(localStorage.getItem(j))));
            //console.log(JSON.parse(localStorage.getItem(j)));
            taskManager.Tasks_obj[j] = JSON.parse(localStorage.getItem(j));
            createDiv(j, JSON.parse(localStorage.getItem(j)).description);
        }
    }
    console.log(taskManager);
}

