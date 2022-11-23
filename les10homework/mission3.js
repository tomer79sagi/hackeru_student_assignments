let num = +prompt("enter a positive number");
let max= +prompt("enter a bigger number");

for(var i =0; i<=max; i++){
    if(i % num == 0){
        document.write(i + "<br/>")
    }
}