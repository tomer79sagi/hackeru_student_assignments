function start(){
    while(true){
        let number = parseInt(prompt("Please enter a number between 1 to 10 please!"));
        if(isNaN(number) || number < 1 || number > 10){
            alert("Wrong!");
        } else {
            for(let i = 1; i <= number; i++){
                let div = document.createElement("div");   
                div.innerHTML = Math.floor(Math.random()*100);
                document.body.appendChild(div);
            }
            break;
        }
    }

}