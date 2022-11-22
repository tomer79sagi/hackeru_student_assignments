let num1=+prompt("enter number");
let num2=+prompt("enter number");

if (num1>num2){
for(let i=num2;i<=num1;i++)
document.write(i + "<br/>");//numbers between 2
}
else if(num1<num2){
for( i=num1;i<=num2;i++)
document.write(i + "<br/>");
}
else document.write("numbers are even");