var a = +prompt("enter number");
var b = +prompt("enter number");
var sum = a;

for(var i = 2 ; i <= b ; i++){
    sum *= a;

}
document.writeln(sum);