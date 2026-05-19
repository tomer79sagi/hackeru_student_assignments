
let num;
let min, sum=0,parts=0;
num=+prompt("enter num");
min=num;
do{
     

if (num<min){
     min=num;
}
num=+prompt("enter num");


 }while (num>0);
document.write("<br/>"+"min number is : "+min);
