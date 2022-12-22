function random_int() {
  let array = [];
  let continu_flag = true;
  let continu_scan_flag = true;

  for (let i = 0; i < 100; i++) {
    array[i] = Math.floor(Math.random() * 99 + 1);
    console.log(array[i]);
  }

  while (continu_flag == true) {
    let user_input = +prompt("try to guess the number until you get it");

    if (user_input < 1 || user_input > 100) {
      alert("number not in range");
      continu_flag = false;
    } else {
      for (let i = 0; i < array.length && continu_scan_flag == true; i++) {
        if (array[i] == user_input) {
          console.log("the location is" + i);
          continu_scan_flag = false;
        }
      }
    }

    console.log("iteration finished");
  }
}
