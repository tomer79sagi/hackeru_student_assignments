
let num1=+prompt("enter number1:");
let num2=+prompt("enter number2:");
let mehalek=1,biggestmehalek=1;

while ((mehalek<=num1)&&(mehalek<=num2)){
if((num1%mehalek===0)&&(num2%mehalek===0)){
    biggestmehalek=mehalek;
}
mehalek++;
}

document.write("biggestmehalek is:" +biggestmehalek +"<br/>");
    
 