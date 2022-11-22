
let num=+prompt("enter number:");
let i,checksfarot,checkoppositenum,j,resultpolindrum=0;
checksfarot=num;
checkoppositenum=num;
for( i=0;checksfarot>=1;i++){
    checksfarot=checksfarot/10;
}
document.write("number of sfarot is:" + i +"<br/>");

for( j=i;j>0;j--){
    resultpolindrum+=checkoppositenum%10*(10**(j-1));
    checkoppositenum/=10;
    checkoppositenum=parseInt(checkoppositenum);
}
document.write("result is:" + resultpolindrum +"<br/>");
if (resultpolindrum===num){
document.write("result " + resultpolindrum +"equal to original num:"+ num );
}