const arr = [];

for (let i = 0; i < 5; i++) {
  arr[i] = +prompt("please enter a number");
}
printArrAverage();

function printArrAverage() {
  let sum = arr.reduce((accumlator, currNum) => accumlator + currNum);
  document.write("the average of all the numbers is: " + sum / arr.length);
}
