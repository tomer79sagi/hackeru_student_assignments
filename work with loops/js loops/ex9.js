let number = +prompt("enter a number (0 of lower to stop)");
let small = number;

while(number > 0){
    if(number < small){
        small = number;
    }
    number = +prompt("enter a number (0 of lower to stop)");
}
document.write("your smallest number is " + small);