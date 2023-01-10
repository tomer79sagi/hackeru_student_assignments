function changer(){
    p_element = document.querySelector("p").style.backgroundColor = "blue";
    p_elements = document.querySelectorAll("p");
    for(let i = 0; i<p_elements.length; i++){
        p_elements[i].style.fontSize = "24px";
    }
    
}