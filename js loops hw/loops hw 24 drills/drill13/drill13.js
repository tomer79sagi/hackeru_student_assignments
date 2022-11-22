
let num=+prompt("enter number:");
let i,oger,j,result=0;
oger=num;
for( i=0;oger>=1;i++){
oger=oger/10;
}
document.write("number of sfarot is:" + i +"<br/>");

for( j=i;j>0;j--){
    result+=num%10*(10**(j-1));
    num/=10;
    num=parseInt(num);
}
document.write("result is:" + result +"<br/>");