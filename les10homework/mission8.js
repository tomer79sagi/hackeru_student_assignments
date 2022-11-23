
let num = +prompt("enter a number");
let min = num
while (num > 0) {
  if (min>num) {
    min = num;
  }
  num = +prompt("Enter another  number");
}
document.write("the smallest number is:" + " " + min);