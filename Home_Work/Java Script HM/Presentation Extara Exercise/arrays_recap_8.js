//1. create an array of 10 values using input
//2. in the and ask for one more value
//3. print how many times the additional value is shown at the first 10 values

function one_more() {
  let arr = [];
  let iteration = 0;

  for (let i = 1; i <= 10; i++) {
    let ten_times = +prompt("plese enter a number and repete 10 times");
    arr.push(ten_times);
  }

  let another_one = +prompt("plese enter one more number");
  for (let i = 0; i < arr.length; i++) {
    if (another_one === arr[i]) {
      iteration += 1;
    }
  }
  document.write(iteration);
}
