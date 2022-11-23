let sum = 0;
let i =0;
let num = +prompt("Enter a positive number");
while(num!=0){
    sum += num;
    i++
    num = +prompt("Enter another positive number");
}
document.write(sum/i);