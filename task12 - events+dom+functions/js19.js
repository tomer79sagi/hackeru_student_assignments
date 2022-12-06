function start(){
  let range = document.getElementById("myRange");
  let p = document.getElementById("par");

  range.onchange = () => {

    p.style.fontSize = range.value

  }
}



