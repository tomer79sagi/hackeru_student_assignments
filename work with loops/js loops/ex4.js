const max = +prompt("enter max number");
let num = +prompt("enter number");

for(let i = 0 ; i <=max ; i++){
    if(i%num==0){
        document.writeln(i);
    }
}
