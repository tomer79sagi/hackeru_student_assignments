function changeAnimal(){
    let animalValue = document.getElementById("animals").value;
    let image = document.querySelector("img[alt = 'animals']");
    if(animalValue === "dog"){
        image.setAttribute("src","animals/dog.jpg")
    }
    else if(animalValue === "cat"){
        image.setAttribute("src","animals/cat.jpg")
    }
    else if(animalValue === "lion"){
        image.setAttribute("src","animals/lion.jpg")
    }
    else if(animalValue === "horse"){
        image.setAttribute("src","animals/horse.jpg")
    }
    else if(animalValue === "frog"){
        image.setAttribute("src","animals/frog.jpg")
    }
    else{
        image.setAttribute("src","animals/noAnimal.jpg")
    }
}