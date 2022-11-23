const end = "99";
let num = 0;
let number = +prompt("enter number");

while(number != 99){
    num+=number;
    number = +prompt("enter number");
}

document.writeln(num + "-" + end);