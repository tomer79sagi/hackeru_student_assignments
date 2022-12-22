function odd_even() {
  let arr = [];
  let num = 0;
  for (let i = 1; i <= 10; i++) {
    let user_input = +prompt("plese enter a number and repete 10 times");
    num = user_input;

    if (user_input % 2 == 0) {
      num += 1;
    }
    if (user_input % 3 == 0) {
      num -= 1;
    }
    arr.push(num);
  }
  document.write(arr);
}
