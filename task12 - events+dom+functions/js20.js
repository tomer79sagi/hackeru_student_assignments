function changeColor(){
  let bgColor = document.getElementById("bgColor");
  let txtColor = document.getElementById("txtColor");

  document.querySelector("body").style.backgroundColor = bgColor.value;
  document.querySelector("body").style.color = txtColor.value;

}

