
let num;
let sum=0,parts=0;
do{
     num=+prompt("enter num");
document.write(num + "<br/>");
if (num>0){
parts++;      
sum+=num;
}
else{
document.write( "<br/>"+"the number"+" "+ num  + "  isnt valid. <br/> " );    

}


 }while (num>0);
document.write("<br/>"+"average is : "+sum/parts);
