let count = 0;
function askName(obj){
    function addName(prompt){
        let div = document.getElementById("first_div");
        let content = document.createTextNode(prompt);
        div.appendChild(content);
        
    }
    if(count < 1){
        let full_name = prompt("What is your full name?");
        addName(full_name);
        obj.innerHTML="Press me!";
        count++;
    } else { 
        alert("You alredy clicked me!");
    }
}