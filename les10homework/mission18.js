let num = +prompt("Please enter a positive number between 1 - 100");
var sum = num;
 if (num > 100) {
   document.write("try number is smaller then 100");
 } 
 else if (num < 1){
   document.write("try number isbigger then 1");
 }
  else if (isNaN(num)){
            document.write("try enter a number");
  }
  else if (num >= 1 && num <= 100 && isNaN(num) == false) {
        while (num > 1) {
                document.write(num + "*");
                num--;
                sum *= num;
            }
             work = true;
        }

        if (work) {
                document.write("1 = " + sum);
        }
