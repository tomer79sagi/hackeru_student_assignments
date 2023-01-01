

class Task {
    description = "";
    id;
    status = TaskStatus;
    constructor(description, id){
        this.description = description;
        this.id = id;
        this.status = TaskStatus.INCOMPLETE;
        //create a div than add a task to the div. will work by clicking the button Add Task and entering description 
        let new_task = `
                <p id="${id}desc" style="font-size: 20px;">${description}</p>
                <button onclick="taskManager.edit_task(this.id);" id="${id}edit" >Edit</button>
                <button onclick="taskManager.delete_task(this.id);" id="${id}delete" >Delete</button> 
                <button onclick="taskManager.change_status(this.id);" class="incomplete_btn" id="${id}status">${TaskStatus.INCOMPLETE}</button>
        `;
        let task_base = document.createElement("div");
        task_base.id = id;
        task_base.innerHTML = new_task;
        document.getElementById("divs_container").appendChild(task_base);
    }
}

 
class TaskManager {

    //prop
    Tasks_obj = [];//change name to task_array

    //methods
    //add
    add(description, id){
        let create_task = new Task(description,id);
        //console.log(create_task);
        this.Tasks_obj[id] = create_task;
    }

    //delete
    delete_task(id){
        let element = document.getElementById(id[0]);
        document.getElementById("divs_container").removeChild(element)
        this.Tasks_obj.splice(id[0], 1);
        console.log(this.Tasks_obj);
    }

    //edit
    edit_task(id){
        currentJob = id[0]
        console.log(id);
        console.log(typeof(edit_btn));
        console.log(typeof(edit_inp));
        edit_inp.id = "edit_input";
        edit_inp.value = document.getElementById(id[0]+"desc").innerHTML;   
        edit_btn.onclick = change_description;
        edit_btn.id = "edit_button";
        document.body.appendChild(edit_inp);
        document.body.appendChild(edit_btn);
        
    }

    //change status
    change_status(id){//add change of button's style
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
    }
}


function change_description(id, edit_inp){
        let input = document.getElementById("edit_input")
        taskManager.Tasks_obj[currentJob].description = input.value;
        document.getElementById(currentJob).innerHTML = input.value;
}

let currentJob = 0

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
new_btn.innerHTML = "CREATE";
function show_input(){
    inp.id = "input";
    new_btn.onclick = create_new_task;
    new_btn.id = "button";
    document.body.appendChild(inp);
    document.body.appendChild(new_btn);
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

//elements for edit_task
edit_inp = document.createElement("input");
edit_btn = document.createElement("button");
edit_btn.innerHTML = "Edit";
