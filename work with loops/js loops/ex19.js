var a = +prompt("enter number between 1 to 10");
var sum = 0;
for(var x = 0;x <= 1000;x++){
    if (x % a == 0) {
        sum++;
    }
}
document.write(sum);