let num1 = +prompt("Enter a number");
let num2 = +prompt("Enter a number");
let highest_divisor = 1;

for (let i = 1; i <= num1 || i <= num2; i++) {
  if (num1 % i == 0 && num2 % i == 0) {
    highest_divisor = i;
  }
}
document.write("The highest divisor of those numbers is:" + highest_divisor);
