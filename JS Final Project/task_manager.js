let count = 0;
const add_task = document.getElementById("add_task");
const Status = Object.freeze({
    Uncompleted: Symbol("0"),
    Completed: Symbol("1")
});

class Task{

    description = "New Task";
    standing = Status.Uncompleted;
    id = `task_${count}`;
    
    changeId(currentItem, taskArr){
        let displayedTask = document.querySelectorAll(".task");
        for (let i=currentItem; i<count;i++){
            displayedTask[i].id = `task_${i}`;
            taskArr[i].id = `task_${i}`;   
        }
    }
}

class TaskManager {
    
    taskArr = []
    
    addTask(task){
        this.taskArr.push(task);
        this.renderTask(task);
        this.deleteTask(task);
        this.changeStanding(task);
        this.editTask(task);
        console.log("after creating:" , this.taskArr);
    }

    renderTask(task){
        const manager = document.querySelector(".task-manager");
        const div = document.createElement("div");
        div.className = "task";
        div.id = task.id;
        div.innerHTML=`<div class="description">${task.description}</div>
        <ul class="button-bar">
            <li class="edit button">
                <i class="fi fi-rr-edit"></i>
                Edit
            </li>   
            <li class="delete button">
                <i class="fi fi-rr-trash"></i>
                Delete
            </li>
            <li class="uncompleted button">
                <i class="fi fi-rr-cross"></i>
                <span>Uncompleted</span>
            </li>
        </ul>
        `;
        manager.append(div);
        count++;
    }

    // changeId(currentItem){
    //     let taskArr = document.querySelectorAll(".task");
    //     for (let i=currentItem; i<count;i++){
    //         taskArr[i].id = `task_${i}`;
    //         this.taskArr[i].id = `task_${i}`;
    //         console.log("after deleting" , this.taskArr);   
    //     }
    // }

    deleteTask(task){
        let currentTask = document.querySelector("#" + task.id);
        currentTask.childNodes[2].childNodes[3].onclick =  function(){
            this.parentNode.parentNode.remove();
            taskArr.splice(task.id.charAt(task.id.length - 1), 1);
            count--;
            task.changeId(task.id.charAt(task.id.length - 1), taskArr);
            console.log("after deleting" , taskArr);
        }
        // currentTask.childNodes[2].childNodes[3].addEventListener = ("click", this.changeId(task.id.charAt(task.id.length - 1)));
    }

    changeStanding(task){
        let currentTask = document.querySelector("#" + task.id);
        currentTask.childNodes[2].childNodes[5].onclick = function(){
            if(task.standing == Status.Uncompleted){
            this.className = "completed button";
            this.innerHTML = `<i class="fi fi-rr-check"></i>
            Completed
            `
            task.standing = Status.Completed;
            } else if(task.standing == Status.Completed){
                this.className = "uncompleted button";
                this.innerHTML = `<i class="fi fi-rr-cross"></i>
                Uncompleted
                `
                task.standing = Status.Uncompleted;
            }
            console.log("after changing status" , taskArr);
        }
    }

    editTask(task){
        let currentTask = document.querySelector("#" + task.id);
        let input = document.createElement('input');
        let description = currentTask.firstChild;
        input.type = "text";
        input.value = description.innerHTML;
        currentTask.childNodes[2].childNodes[1].onclick = function(){
            description.innerHTML = "";
            description.appendChild(input);
            input.focus();
            input.select();
            input.onblur = () => {
                description.textContent = input.value;
                task.description = description.textContent
                console.log("after editing status" , taskArr);
            }
            input.onkeyup = (e) => {
                if(e.key === 'Enter' || e.keyCode === 13){
                    description.textContent = input.value;
                    task.description = description.textContent
                }
            }
        }
    }
}

let taskManager = new TaskManager();
taskArr = taskManager.taskArr;

function createTask(){
    taskManager.addTask(new Task());
}
add_task.onclick = createTask;

