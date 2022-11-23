let num = +prompt("enter a positive number");
 sum = 0;
while(num!=99){
    sum+=num;
     num = +prompt("Enter another  number ");
}
document.write("The summation is" + sum);