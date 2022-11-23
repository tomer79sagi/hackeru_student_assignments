let num = +prompt("enter number (-1 for stop)");

while(num != -1){
    document.writeln(num);
    num = +prompt("enter number (-1 for stop)")
}

document.write("<br/>" + "you enter -1 for stop")