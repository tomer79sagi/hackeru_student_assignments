        const TASK_STATES = {
            COMLETED: "Comleted",
            UNCOMPLETED: "Uncomleted"
        }

        const genrateUid = () => {
            return new Date().getTime();
        }

        class TaskManager {

            constructor() {
                this.tasks = [];
            }

            add (newTask) {
                this.tasks.push(newTask);
                drawHtml();
            }

            delete (id) {
                for (let i = 0; i < this.tasks.length; i++) {
                    if (this.tasks[i].getId() === id) {
                        this.tasks.splice(i,1);
                    }
                }
                drawHtml()
            }

            getAllTasks () {
                return this.tasks;
            } 
        }


        class Task {
            // static status;
            // state = {};
            constructor(_description) {
                this.status = TASK_STATES.UNCOMPLETED
                this.description = _description;
                this.id = genrateUid();
            }
            getId () {
                return this.id;
            }

            getStatus () {
                return this.status;
            }

            setStatus() {
                this.status = TASK_STATES.COMLETED;
            }
            getDescripion() {
                return this.description;
            }

            setDescripion (_description) {
                this.description = _description;
            }
        }

        ////////////////////////////////////////////////////////

        const taskManager = new TaskManager();

        function addTask () {
            let descriptionTask = prompt("Please enter your task: ");
            const newTask = new Task(descriptionTask);
            taskManager.add(newTask);
        }




        const drawHtml = () => {
            const allTasks = taskManager.getAllTasks();
            let divTask = document.getElementById("allTasks");
            divTask.innerHTML = ""

            allTasks.forEach((someTask) => {


            let div = document.createElement("div");
            div.setAttribute("class", "task");


            let description = document.createElement("p");
            description.innerText = someTask.getDescripion();
            description.setAttribute('class', "description");


            let editButton = document.createElement("button");
            editButton.innerText = "Edit";
            editButton.setAttribute("class", "editButton");
            editButton.addEventListener("click", () => {
                let edited = prompt("Edit your task here: ");
                someTask.setDescripion(edited);
                description.innerText = someTask.getDescripion();
            })
            
            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.setAttribute("class", "deleteButton");
            deleteButton.addEventListener("click", () => taskManager.delete(someTask.getId()));


            let completeButton = document.createElement("button");
            completeButton.innerText = someTask.getStatus();
            if (someTask.status == TASK_STATES.COMLETED) {
                   completeButton.style.backgroundColor = "green"; 
            }
            completeButton.setAttribute("class", "completeButton");
            completeButton.addEventListener("click", () => {
                someTask.setStatus();
                completeButton.innerText = someTask.getStatus();
                completeButton.style.backgroundColor = "green";
            })


            div.appendChild(description);
            div.appendChild(editButton);
            div.appendChild(deleteButton);
            div.appendChild(completeButton);
            divTask.appendChild(div)
        }
   ) 
}