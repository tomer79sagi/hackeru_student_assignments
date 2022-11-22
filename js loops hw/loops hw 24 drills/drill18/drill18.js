

let ogernumforprint;
let azeret=1;
let num=parseInt(prompt("enter num:"));
let result=Number.isNaN(num);        //בודק האם לא נלחץ מספר או שזהו אינו מספר.



while (num>100||num<1||result==true){
if (result==true){
alert("ITS NAN"); 
num=parseInt(prompt("enter num:"));
 result=Number.isNaN(num);
}   else  if (num>100){
alert(" the number: " + num + " " +" is bigger than 100 ");
num=+prompt("enter number between 1 to 100 indluding them:");

}
else if (num<1){
    alert("the number:  " + num +"  is smaller than 1 ");
    num=+prompt("enter number between 1 to 100 indluding them:");
} 
}
ogernumforprint=num;
while ((num>=1)&& (num<=100)){
azeret*=num;
num--;
}


    document.write("azeret of number  " +  ogernumforprint +"  is:  " +  azeret);
    
 