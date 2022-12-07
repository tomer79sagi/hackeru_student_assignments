function changePic () {
   let image = document.getElementById("image"); 
   let input = document.getElementById("text").value;

   if(input == "" || input == "solar system" || input == "Solar system") {
    image.src = "solar system.jpg"; 
   } 
   else if(input == "mercury" || input == "Mercury") {
    image.src = "mercury.jpg";
   } 
   else if(input == "venus" || input == "Venus") {
    image.src = "venus.jpg";
   } 
   else if(input == "earth" || input == "Earth") {
    image.src = "earth.jpg";
   } 
   else if(input == "mars" || input == "Mars") {
    image.src = "mars.png";
   } 
   else if(input == "jupiter" || input == "Jupiter") {
    image.src = "jupiter.png";
   } 
   else if(input == "saturn" || input == "Saturn") {
    image.src = "saturn.jpg";
   } 
   else if(input == "uranus" || input == "Uranus") {
    image.src = "uranus.jpg";
   } 
   else if(input == "neptune" || input == "Neptune") {
    image.src = "neptune.jpg";
   } 
   else if(input == "pluto" || input == "Pluto") {
    image.src = "pluto.png";
   } 
   else {
    alert("Invalid name of a planet!");
   }
}