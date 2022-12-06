function start() {
  let element = document.getElementById("element");

   let colors = ["red", "green", "yellow", "blue"];

   function changeColors(){
    element.style.backgroundColor = colors[Math.floor(Math.random() * (colors.length-1))];
 }
 
   setInterval(changeColors,500);


}
