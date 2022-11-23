var num = +prompt("enter a positive number");
var list = " ";
while(num != -1){
    list +=num +"<br/>";
     num = +prompt("Enter a  positive number");
}
 document.write(list);