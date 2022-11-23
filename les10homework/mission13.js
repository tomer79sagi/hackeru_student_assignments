let num = +prompt("enter a number to check is he is palindrom");
 num = num.toString();
 let Palindrome = true;
 for (let i = 0; i < num.length / 2; i++) {
   if (num[i] !== num[num.length - 1 - i]) {
     Palindrome = false;
     break;
   }
 }
 document.write(Palindrome);
