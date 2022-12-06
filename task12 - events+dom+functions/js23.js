function start() {
  let validFirst = true;
  let validLast = true;
  let validMail = true;

  document.getElementById("first").onchange = () => {
    let first = document.getElementById("first").value;
    if (!onlyLetters(first)) {
      alert("invalid first name");
      validFirst = false;
    }else{
      validFirst = true;
    }
  };
  document.getElementById("last").onchange = () => {
    let last = document.getElementById("last").value;
    if (!onlyLetters(last)) {
      alert("invalid Last name");
      validLast = false;
    }else{
      validLast = true;
    }
  };
  document.getElementById("email").onchange = () => {
    let email = document.getElementById("email").value;
    if (!validEmail(email)) {
      alert("invalid email");
      validMail = false;
    }
    else{
      validMail = true;
    }
  };

  document.getElementById("color").onchange = () => {
    let color = document.getElementById("color").value;
    switch (color) {
      case "red":
        alert(" warm color");
        break;
      case "blue":
        alert("cold color");
        break;
      default:
        alert("Thank you for choosing a color");
        break;
    }
  };

  document.getElementById("btn").onclick = () => {
   
      const element = document.querySelector("form");
      element.addEventListener("submit", (event) => {
        if (!validFirst || !validLast || !validMail)
        event.preventDefault();
         });
    
  };
}

function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}
function validEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
