function start(){
  let element = document.querySelector("div");

 
  onmousemove = (event) => { 
    element.style.left = event.clientX + 'px';
    element.style.top = event.clientY + 'px';
  };

}

