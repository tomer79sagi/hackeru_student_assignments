//list pf nums
let num = +prompt("enter a number");
let max = 0
while(num >0){
    if(max<num){
        max = num
    }
    num = +prompt("Enter another  number");
}
document.write("the biggest number is:" +" " +max);
