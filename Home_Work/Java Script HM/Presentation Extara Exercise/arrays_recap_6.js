function user_array() {
  let arr = [];

  for (let i = 1; i <= 10; i++) {
    let user_input = +prompt("plese enter a number and repete 10 times");

    if (user_input % 2 != 0) {
      arr.push(user_input);
    }
  }
  document.write(arr);
}
