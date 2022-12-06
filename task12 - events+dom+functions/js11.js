let clicked = false;

function buttonClicked(){
  
  if(!clicked){
  document.querySelector("button").innerHTML = "ON";
  document.querySelector("button").style.backgroundColor = "green";
  clicked = true;
  }else{
    document.querySelector("button").innerHTML = "OFF";
  document.querySelector("button").style.backgroundColor = "red";
  clicked=false;
  }

}