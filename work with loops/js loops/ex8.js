let number = +prompt("enter a number (0 of lower to stop)");
let big = number;

while(number > 0){
    if(number > big){
        big = number;
    }
    number = +prompt("enter a number  (0 of lower to stop)");
}
document.write("your bigest number is " + big);