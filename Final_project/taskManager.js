class Task {
    description = "";
    completed = false;
    taskActions = new TaskManager()
}
class TaskManager {
    add(text) {
        let taskForm = `
        <div class="rowFlex">
            <div class="edit"> 
                <div class="description">${text}</div>
                <img src="https://cdn-icons-png.flaticon.com/512/6324/6324826.png" alt="edit" width="45px">
                <span>Edit</span>
            </div>
            
            <div class="delete">
                <img src="https://cdn-icons-png.flaticon.com/512/5676/5676146.png" alt="edit" width="40px">
                <span>Delete</span>
            </div>
        
            <div class="complete">
                <input type="checkbox" name="completed" class="completed">
                <span>completed</span>
            </div>
        </div>
        <br/>
        `;
        let taskRow = document.createElement("div");
        taskRow.innerHTML = taskForm;

        let mainFlex = document.querySelector("div[class = 'mainFlex']");
        mainFlex.append(taskRow);
    }
    delete(element) { 
        element.remove();
    }
}

function sortArray(array){
    const newarray = [];
    for(let i = 0; i <= array.length; i++){
        if(array[i] !== undefined){
            newarray.push(array[i]);
        }
    }
    return newarray;
}

// Executing local storage to html page
const storedInputArray = JSON.parse(localStorage.getItem("taskArray"))
if (storedInputArray) {
    console.log(storedInputArray); // check

    let executingTask = new Task()
    for (let i = 0; i < storedInputArray.length; i++) {
        executingTask.taskActions.add(storedInputArray[i].description);

        //Setting Completed CheckBox's From Local Storage
        if(storedInputArray[i].completed){
            document.querySelectorAll(".completed")[i].checked = true;
        }
    }



}
//.....................................................................
const btnTask = document.querySelector(".btnTask");
//const btnHideTask = document.querySelectorAll(".btnTask")[1];
let divEdit = document.querySelectorAll(".edit"); // the flex area
let divDelete = document.querySelectorAll(".delete"); // the flex area
let divComplete = document.querySelectorAll(".complete"); // the flex area
let inputCheck = document.querySelectorAll(".completed"); //the checkbox
let DeleteRowFlex = document.querySelectorAll(".rowFlex") // The Main flex area

// when Clicing On The Add Task Button:
btnTask.addEventListener("click", () => {
    let taskArray = [];
    // Define the Task Values
    let newTask = new Task();
    newTask.description = prompt("Enter Your Task")
    //Show In HTML 
    newTask.taskActions.add(newTask.description)

    if (localStorage.getItem("taskArray")) {
        // if there is something in Local Storage then:
        taskArray = JSON.parse(localStorage.getItem("taskArray")) // convert string to array[objects]
        taskArray.push(newTask); // adding new task to array
        localStorage.setItem("taskArray", JSON.stringify(taskArray)); // converting back to string and sending updated array to local storage
    }
    else {
        //Saving the first array item in local storage
        taskArray.push(newTask);
        let storageConv = JSON.stringify(taskArray); //Converting to String for local storage
        localStorage.setItem("taskArray", storageConv);
    }
    //Updating The Delete Button
    //divEdit = document.querySelectorAll(".edit");
    //divDelete = document.querySelectorAll(".delete");
    window.location.reload();
})

/*// when Clicing On The Hidden Completed Tasks Button:
btnHideTask.addEventListener("click", () => {
    for(let i = 0; i < divComplete.length; i++){
        if(inputCheck[i].checked){
            DeleteRowFlex[i].style.display = "none";
            //DeleteRowFlex[i].style.visibility  = "hidden";
        }
    }
})*/


// when Clicing On The EDIT Task Button:
console.log(divEdit)
/*divEdit.forEach(addEventListener("click", ()=>{
    console.log("yup")
}))*/
let newText = "";
let allTheDesc = document.querySelectorAll(".description")
for (let i = 0; i < divEdit.length; i++) {
    divEdit[i].addEventListener("click", () => {
        //Updating The Description In Html
        newText = prompt("Enter Your Edited Task",allTheDesc[i].textContent);
        allTheDesc[i].innerHTML = newText;

        //Updating The Description In Local Storage
        let getTaskArray = JSON.parse(localStorage.getItem("taskArray"))
        getTaskArray[i].description = newText;
        localStorage.setItem("taskArray",JSON.stringify(getTaskArray));
    })
}


// when Clicing On The DELETE Button:
console.log(divDelete)
let deleteAction = new Task()
for (let i = 0; i < divDelete.length; i++) {
    divDelete[i].addEventListener("click", () => {
        //Deleting The Div In Html
        deleteAction.taskActions.delete(DeleteRowFlex[i])
        divDelete[i] = undefined;
        //Updating veriabels For The Next Delete
        DeleteRowFlex = document.querySelectorAll(".rowFlex")
        divDelete = sortArray(divDelete);
        //Updating The Description In Local Storage
        let getTaskArray = JSON.parse(localStorage.getItem("taskArray"))
        getTaskArray[i] = undefined;
        getTaskArray = sortArray(getTaskArray);
        localStorage.setItem("taskArray",JSON.stringify(getTaskArray));

        window.location.reload();
    })
}

// when Clicing On The Completed Button:
for (let i = 0; i < divEdit.length; i++) {
    divComplete[i].addEventListener("click", () => {

        //Updating The check In Local Storage
        let getTaskArray = JSON.parse(localStorage.getItem("taskArray"))
        if(inputCheck[i].checked){
            getTaskArray[i].completed = true;
        }
        else{
        getTaskArray[i].completed = false;
        }
        localStorage.setItem("taskArray",JSON.stringify(getTaskArray));

    })
}

//document.querySelectorAll(".description")[1].style.color = "red";
//document.querySelectorAll(".description")[4].style.color = "red";
//document.querySelectorAll(".rowflex")[2].style.backgroundColor = "red";
//document.querySelectorAll(".description")[0].style.backgroundColor = "red";

/*
for(let a = 0; a <=10; a++){
    if(a===4 || a === 5 || a === 7){}
    else
    document.querySelectorAll(".description")[a].style.backgroundColor = "rgba(275, 0, 0, 0.277)";
}*/
