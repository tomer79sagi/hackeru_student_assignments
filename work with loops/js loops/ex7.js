let num = 0;
let count = 0;
let number = +prompt("enter number (-1 for stop)");

while(number != -1){
    num+=number;
    count++;
    number = +prompt("enter number (-1 for stop)");
}
let ave = num/count;
document.write("the average number of your numbers is " + ave);