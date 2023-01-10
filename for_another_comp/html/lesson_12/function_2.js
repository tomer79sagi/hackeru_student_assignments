function findTags() {
    // Retrieve the <p> element as HTMLElement object
    const array = document.getElementsByTagName("div");
    for(let i = 0;i<array.length; i++){
        array[i].innerHTML = i+1;
    }
}
