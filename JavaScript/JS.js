
function Average(){
let grade1 = parseInt(prompt ("Enter the 1st grade"));
let grade2 = parseInt(prompt ("Enter the 2nd grade"));
let grade3 = parseInt(prompt ("Enter the 3rd grade"));
let grade4 = parseInt(prompt ("Enter the 4rth grade"));
let grade5 = parseInt(prompt ("Enter the 5th grade"));
let grade6 = parseInt(prompt ("Enter the 6th grade"));
let grade7 = parseInt(prompt ("Enter the 7th grade"));
let grade8 = parseInt(prompt ("Enter the 8th grade"));
let grade9 = parseInt(prompt ("Enter the 9th grade"));
let grade10 = parseInt(prompt ("Enter the 10th grade"));

var sum = grade1 + grade2 + grade3 + grade4 + grade5 + grade6 + grade7 + grade8 + grade9 + grade10;
var average = sum/10;

alert(average);
}

function Max(){
    let Grade1 = parseInt(prompt ("Enter the 1st grade"));
    let Grade2 = parseInt(prompt ("Enter the 2nd grade"));
    let Grade3 = parseInt(prompt ("Enter the 3rd grade"));
alert("The highest grade is " + Math.max(Grade1,Grade2,Grade3));
}

function Countdown(){
    let num = parseInt(prompt ("Enter any number"));
       while(num>0){
         document.write(num);
         document.write("</br>");
         num--;

    }
}

function SkipSeven(){
var i=1;
 for (i = 1; i < 10; i++) {
  if (i !== 7)
  document.write ("The number is " + i + "<br>");
  } 
}

/* function Modulu(){
    let count = 0;
    let x = parseInt(prompt ("Enter any number to see how many times it can be perfectly divided"));

    for(let i=0; x>i ; i++){
        if(x%i==0){
            count+=1
        }
    }
    
   document.write(count);
 
} */

function Modulu2(){
    let count = 0;
    let x = parseInt(prompt ("Enter any number from 1 to 10"));

    for(let i=0; i<=1000 ; i++){
        if(i%x==0){
            count+=1
        }
    }
    
   document.write(count);
 
}

function Factorial(){


var Number = parseInt(prompt('Please enter a number'));
var total = 1;

for (i = 0; i < Number; i++){
    total = total * (Number - i);
}

document.write(Number + '! = ' + total);

}

function guessNumber() {

    let Num = Math.floor(Math.random() * 100);
    let guess=0;
  
      while (guess !== Num){
      guess = prompt("Guess number 1-100");
      
      if (Num > guess) {
        alert("You guessed too low");
      } else if (Num < guess) {
        alert("Guess was too high");
      }else{
        alert("You Won");
      }
    }
    
    
} 
  
  
      

