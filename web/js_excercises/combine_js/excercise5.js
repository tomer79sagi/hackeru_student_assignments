function changePic(){
   let image = document.getElementById("image"); 
   let input = document.getElementById("text");
   if(input.value == "default"){
    image.src = "animals.png"; 
   } else if(input.value == "bear"){
    image.src = "bear.jpg";
   } else if(input.value == "camel"){
    image.src = "camel.jpg";
   } else if(input.value == "cheetah"){
    image.src = "cheetah.jpg";
   } else if(input.value == "cow"){
    image.src = "cow.jpg";
   } else if(input.value == "deer"){
    image.src = "deer.jpg";
   } else if(input.value == "dog"){
    image.src = "dog.jpg";
   } else if(input.value == "donkey"){
    image.src = "donkey.jpg";
   } else if(input.value == "elephant"){
    image.src = "elephant.jpg";
   } else if(input.value == "fox"){
    image.src = "fox.jpg";
   } else if(input.value == "giraffe"){
    image.src = "giraffe.jpg";
   } else if(input.value == "goat"){
    image.src = "goat.jpg";
   } else if(input.value == "horse"){
    image.src = "horse.jpg";
   } else if(input.value == "pig"){
    image.src = "pig.jpg";
   } else if(input.value == "rabbit"){
    image.src = "rabbit.jpg";
   } else if(input.value == "squirrel"){
    image.src = "squirrel.jpg";
   } else if(input.value == "zebra"){
    image.src = input.value + ".jpg";
   } else {
    alert("Invalid name of animal!");
   }
}