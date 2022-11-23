let number = +prompt("enter number");
let bigest = number;
let count = 0;

for (let i = 2; i <=10; i++){
    if(number > bigest){
        bigest = number;
        count = i;
    }
    number = +prompt("enter a number");
}
document.write(count);