let num = +prompt("Enter a number");
 document.write("The integer divisors of your number are: <br/>");
 for (var i = 1; i <= num; i++) {
   if (num % i == 0) {
     document.write(i + "<br/>");
   }
 }