
let num,max,j=0;
num=+prompt("enter number:");
max=num;
for(let i=1;i<10;i++){
num=+prompt("enter number:");
     if (max<num){
     max=num;
     j=i;
     }

}

document.write("max num is:"+ max +"<br/>");
document.write("index num is:" + j + "<br/>");