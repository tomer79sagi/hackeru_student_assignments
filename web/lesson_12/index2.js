let count = 0;
function addName(){
    // if (count < 1){
    //     const div = document.getElementById("first_div").innerHTML += "Maksim Mirkin";
    //     count++;
    // }
    if(count < 1){
        const div = document.getElementById("first_div");
        const content = document.createTextNode("Maksim Mirkin");
        div.appendChild(content);
        count++;
    }
}