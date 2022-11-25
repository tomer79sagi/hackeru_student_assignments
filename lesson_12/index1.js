function changer(){
    const array = document.getElementsByTagName("li")
    for(let i = 0; i<array.length;i++){
        array[i].innerHTML = i+1;
    }
}
