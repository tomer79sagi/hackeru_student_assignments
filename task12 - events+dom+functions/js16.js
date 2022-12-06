function changeInputs() {
  let inp1 = document.getElementById("input1");
  let inp2 = document.getElementById("input2");

  if (inp1.value == "") {
    alert("no inpots were recieved");
  } else {
    let value1 = inp1.value;
    let value2 = inp2.value;

    inp1.value = value2;
    inp2.value = value1;
  }
}
