
let num=+prompt("enter number:");
let mehalek=1,i=0, arr=[];

while (mehalek<=num/2){
if(num%mehalek===0){
arr[i]=mehalek;
i++;}
mehalek++;
}
for (i=1;i<arr.length;i++){
    document.write("mehalek is:" + arr[i] +"<br/>");
    
    }