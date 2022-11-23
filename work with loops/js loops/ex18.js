var number = +prompt("enter number betqeen 1 to 100");
var num = 1;

if (number > 100) {
    document.write("the number " + number + " is larger then 100");
} else if (number < 1) {
    document.write("the number " + number + " is smaller then 1");
} else {
    while (number > 0) {
        document.write(number);
        num = num * number;
        document.write("*");
        number--;
    }
    document.write(" = " + num);
}
