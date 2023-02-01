function validName(getName){
    let alertBox = document.querySelector("#alert");
    if(getName.value.length === 0){
        alertBox.value = "Please Enter Your Name";
    }
    else if(Boolean(getName.value.match(/^[a-zA-Z]+$/))){
        alertBox.value="";
    }
    else{
        alertBox.value ='The Name Is Not Valid';
    }
}
function colorChange(color){
  let alertBox = document.querySelector("#alert");
  const r = parseInt(color.substr(1,2), 16)
  const g = parseInt(color.substr(3,2), 16)
  const b = parseInt(color.substr(5,2), 16)
  if(r >= 150 && g <= 35 && b <= 35){
    alertBox.value="The Color Is Warm";
  }

  else if(r <= 35 && g <= 35 && b >= 150){
    alertBox.value="The Color Is Cold";
  }
  else{
    alertBox.value="Thank You For Choosing a Color!";
  }

// console.log("red:" + parseInt(color.substr(1,2), 16));
// console.log("green:" + parseInt(color.substr(3,2), 16));
// console.log("blue:" + parseInt(color.substr(5,2), 16));
// console.log(alertBox.value === "")
}
