

let square=+prompt("enter square");
let i,j;
for(i=1;i<=square;i++){
for(j=1;j<=square;j++){
    if ((j>1)&&(j<square)){
    document.write("&nbsp    "); }
    else {document.write("*");
    }
   
}
document.write("<br/>");

}
