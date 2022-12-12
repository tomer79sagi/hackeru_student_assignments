function ask_name() {
  let name1 = prompt("Please enter your name");
  document.getElementById("123").innerHTML = "asdasd";
  change_div(name1);
}

function change_div(full_name) {
  let element = document.getElementsByClassName("first_name");
  element[0].innerHTML = full_name;
}
