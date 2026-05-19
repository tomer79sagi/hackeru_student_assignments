
function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function colr(){
let y=document.querySelector("div");

 y.style.color= 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
}