function print_name() {
  let promp_user = prompt("please enter your name");
  print_name_2(promp_user);
}

function print_name_2(full_name) {
  let div_obj = document.querySelector("div");
  div_obj.innerHTML = full_name;
}
