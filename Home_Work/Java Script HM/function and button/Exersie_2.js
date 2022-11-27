function AddToFirstDiv() {
  let first_div = document.getElementById("First");
  let name = document.createTextNode(prompt);
  name = prompt("Plese enter yout name");
  first_div.append(name);
  
  //changing the button name
  new_name = document.getElementById("button");
  new_name.innerHTML = "Press me";
}
