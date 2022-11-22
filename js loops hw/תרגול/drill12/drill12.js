
let num=+prompt("enter number:");
let digit=+prompt("enter digit:");
let i,j;
for( j=0,i=0;num>=1;i++){
if (num%10==digit){
j++;}
num/=10;
num=parseInt(num);
}
document.write("number of digit"+ " "+ digit + " " + "is:" + j );
