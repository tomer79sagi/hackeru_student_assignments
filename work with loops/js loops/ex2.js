const num = +prompt("enter number biger then 1");
let start = +prompt("enter the number you want to start from");
const end = +prompt("enter the number you want to end with")

for (let i = 1; i <= num; i++) {
    document.writeln(i);
}

document.write("<br/>");

if (start < end) {
    while (start <= end) {
        document.writeln(start);
        start++;
    }
}else{
    document.write("please enter the start number smaller then the end number");
}


