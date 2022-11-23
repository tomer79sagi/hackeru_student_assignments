var num = +prompt("enter a number");
function reversedNum(num) {
  return (
    parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
  );
}
 document.write(reversedNum(num));
