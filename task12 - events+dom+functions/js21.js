function validate(){
  let userInput = document.getElementById("userInput").value;

  if (onlyLetters(userInput))
  alert("Valid Text!")
  else
  alert("Invalid Text!")


}

function onlyLetters(str) {
  return /^[a-zA-Z]+$/.test(str);
}