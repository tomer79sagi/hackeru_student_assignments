let number = +prompt("enter number of * you want to see");

if(number >= 5 && number <= 15){
    
for (let x = 1; x <= number; x++) {
    for (let i = 1; i <= number; i++) {
        document.write("*");
    }
    document.write("<br/>");
}
}else{
    document.write("refresh the page and try agian");
}