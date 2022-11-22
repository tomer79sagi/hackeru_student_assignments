
// Targil 1

    function FromOneToNum(){
        let num = +prompt("Enter a number");
        for(var i=0; i<=num; i++){
            document.write("My number is now : " + i + "<br>");
        }
    }

    // Targil 2 : two numbers

    function TwoNumbers(){
        let num1 = +prompt("Enter the first number");
        let num2 = +prompt("Enter a bigger number !");

        if(num2>num1){
            for(num1 ; num1<=num2; num1++);
            document.write("My number is now : " + num1 + "<br>");

        }else{
            alert("The second number must be greater to proceed , try again !");
        }

    }

    // Targil 3 : Even numbers finder

    function EvenNums(){
        let myNum = +prompt("Please enter a number");
        for(var i=0; i<=myNum; i++){
            if(i%2==0){
                document.write("Even number is :" + i + "<br>");

            }
    }
}

// Targil 4 : Division loop

function Dividable(){
    let num = +prompt("Enter a number");
    let max = +prompt("Enter a greater number!");

    

    if(max>num){
        for(num; num<=max; num++){
           if(max%num==0){
               document.write("Maximum number: " + max + " divides by : "+ num + "<br>");
           }
    }

    }else{alert("The second number must be greater, try again!");}
   
}

// Targil 6 : series

function Series(){

    let number1 = +prompt("Enter 4 numbers , and the last one must be 99!");
    let number2 = +prompt("Enter the second number");
    let number3 = +prompt("Enter the third number");
    let number4 = +prompt("Enter the last number , it must be 99 !");

    if (number4 !== 99){
        alert("You've come so far, but the last number must be 99 ! Better luck next time");
    }else{
        document.write("First numbers is: " + number1 + "<br>" +
        "Second numbers is: " + number2 + "<br>" + 
        "Third number is : " + number3 + "<br>" +
        "Total is : " + (number1+number2+number3));
    }

}

// Targil 7 : series of numbers

function Series2(){

    let number1 = +prompt("Enter 4 numbers , and the last one must be -1!");
    let number2 = +prompt("Enter the second number");
    let number3 = +prompt("Enter the third number");
    let number4 = +prompt("Enter the last number , it must be -1 !");

    if (number4 !== -1){
        alert("So close !, but the last number must be -1 ! Try again");

    }else if(number1 !== 0 && number2 !== 0 && number3 !==0) {
        document.write("First numbers is: " + number1 + "<br>" +
        "Second numbers is: " + number2 + "<br>" + 
        "Third number is : " + number3 + "<br>" +
        "Total is : " + (number1+number2+number3) + "<br>");
        document.write("Average is : " + (number1+number2+number3)/3)

    }else if(number1 == 0){
        document.write("First numbers is: " + number1 + "<br>" +
        "Second numbers is: " + number2 + "<br>" + 
        "Third number is : " + number3 + "<br>" +
        "Total is : " + (number1+number2+number3) + "<br>");
        document.write("Average is : " + (number2+number3)/2);

    }else if(number2 == 0){
        document.write("First numbers is: " + number1 + "<br>" +
        "Second numbers is: " + number2 + "<br>" + 
        "Third number is : " + number3 + "<br>" +
        "Total is : " + (number1+number2+number3) + "<br>");
        document.write("Average is : " + (number1+number3)/2);
    }else if(number3 == 0){
        document.write("First numbers is: " + number1 + "<br>" +
        "Second numbers is: " + number2 + "<br>" + 
        "Third number is : " + number3 + "<br>" +
        "Total is : " + (number1+number2+number3) + "<br>");
        document.write("Average is : " + (number1+number2)/2);
    }
}


// Targil 8

function NegativeOrZero(){
   
    
    let number1 = +prompt("Enter the first number");
    if (number1<=0){
        alert(" Seems we hit 0 or less ");
    }
    
    let number2 = +prompt("Enter the second number");
    if(number2<=0) {
        alert(" Seems we hit 0 or less ");
    }

    let number3 = +prompt("Enter the third number");
    if(number3<=0) {
        alert(" Seems we hit 0 or less ");
    }

    let number4 = +prompt("Enter the last number ");
    if(number4<=0) {
        alert(" Seems we hit 0 or less ");
    }

    let nums = [number1,number2,number3,number4];

    let max = Math.max(...nums);

    document.write("The biggest number is : " + max);
}

// Targil 9

function NegativeOrZero2(){
   
    
    let number1 = +prompt("Enter the first number");
    if (number1<=0){
        alert(" Seems we hit 0 or less ");
    }
    
    let number2 = +prompt("Enter the second number");
    if(number2<=0) {
        alert(" Seems we hit 0 or less ");
    }

    let number3 = +prompt("Enter the third number");
    if(number3<=0) {
        alert(" Seems we hit 0 or less ");
    }

    let number4 = +prompt("Enter the last number ");
    if(number4<=0) {
        alert(" Seems we hit 0 or less ");
    }

    let nums = [number1,number2,number3,number4];

    let min = Math.min(...nums);

    document.write("Our numbers are: " + number1 + ", "+ number2 +", "+ number3 +", "+ number4 + "<br>" );
    document.write("The lowest number is : " + min);
}

// Targil:10

function SeriesOfTen(){
    let number1 = +prompt("Enter 10 numbers");
    let number2 = +prompt("Enter the second number");
    let number3 = +prompt("Enter the third number");
    let number4 = +prompt("Enter the 4th number");
    let number5 = +prompt("Enter the 5th number");
    let number6 = +prompt("Enter the 6th number");
    let number7 = +prompt("Enter the 7th number");
    let number8 = +prompt("Enter the 8th number");
    let number9 = +prompt("Enter the 9th number");
    let number10 = +prompt("Yes! Enter the last number");

    let nums = [number1,number2,number3,number4,number5,number6,number7,number8,number9,number10];
    let max = Math.max(...nums);

    let position = 0;
    if (number1 == max){
         position = 1;
    }else if(number2 == max){
        position = 2;
    }else if(number3 == max){
         position = 3;
    }else if(number4 == max){
        position = 4;
    }else if(number5 == max){
         position = 5;
    }else if(number6 == max){
        position = 6;
    }else if(number7 == max){
        position = 7;
    }else if(number8 == max){
        position = 8;
    }else if(number9 == max){
         position = 9;
    }else if(number10 == max){
        position = 10;
    }
    
    document.write("The biggest number is : " + max + " on position number : " + position);

}


   //Targil 11 : 

   function LengthOf(){
    let num = prompt("Enter a number to check it's legth");
    alert(num.length);
   }


   //Targil 12:

   function Digit(){
    
    let num1 = prompt("Enter a number");
    let dig = prompt("Enter a digit , it must be less than 10");

    if (dig<10){
        let count = 0;
        for(let i=0;i<num1.length;i++){
            if(dig==num1[i]){
                count++
            }
            
        }
        alert("Your number repeats " + count + " times !");
       
    }else{
        alert("Enter a number that is less than 10 !")
    }

   }

   //Targil 13:

   function Backwards() {
    
    let number = prompt("Enter a number");
    var splitStr = number.split(""); 
    
    var reverse1 = splitStr.reverse();
   
    var joinArray = reverse1.join(""); 
    
    alert(joinArray); 
}

//Targil 14 : Checking if it's a palindrome;

function Palindrome() {
    const string = prompt('Enter a string: ');
   
    const arrayValues = string.split('');

   
    const reverseArrayValues = arrayValues.reverse();

  
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        document.write('It is a palindrome');
    }
    else {
        document.write('It is not a palindrome');
    }
}

//Targil 15 : Power loop

function PowerLoop(){
    let x = +prompt("Enter a number");
    let y = +prompt("Enter the second number ( The power )");
    let total =1;

    for(let i=0; i<y; i++){
total *= x ;
    }

    alert(total);


}

//Targil 16 : finding all the dividables

function LetsDivide(){
    let myNumber = +prompt("Enter a number");
    
    for(let i=0; i<=myNumber; i++){
        if(myNumber%i==0){
            document.write(myNumber + " can be divided by " + i + "</br>");
        }
    }

}

//Targil 17 : Greatest Common Divisor

function GreatestDivisor(){
    let myNumber = +prompt("Enter a number");
    let myNumber2 = +prompt("Enter another number");
    let min = 1;
    let counter = 0;

    if(myNumber<myNumber2){
        min = myNumber
     } else {
        min = myNumber2
    }
    
    
    for(let i=0; i<=min; i++){
        if(myNumber%i==0 && myNumber2%i==0){
            //The last successfull cycle is the biggest
           counter = i;

        }

      
    }

      document.write("The greatest common divisor for : " + myNumber + " and " + myNumber2 + " is  " + counter + "</br>");

}

//Targil 18: Factorial

function Factorial2(){

    var total = 1;
  var Number = parseInt(prompt('Please enter a number from 1 to 100'));
  
  if (Number>100){
    alert("The number is larger than 100")
  }else if(Number<1){
    alert("Number is smaller than 1");
  }else{
  
  
  for (i = 0; i < Number; i++){
      total = total * (Number - i);
  }
  
  document.write(Number + '! = ' + total);
  }
  }

  // Targil 19: How many numbers can divide by x


function OneToThousand(){
    let num1 = +prompt("Enter a number to see how many times it can be divided , from 1 to 1000 !");
    let count = 0;

for(let i=1; i<=1000 ; i++){
    if(i%num1==0){
        count++;
        document.write(num1 + " can be divided by " + i + "</br>")
    }

    
}
document.write("Total times " + num1 + " was divided is : " + count +  "</br>")
}

// Targil 20 : Coding art

function CodingArt(){
    let number = +prompt("Enter a number from 5 to 15 !");

    for(let i=0; i<number ; i++){
        
        for(let j=0; j<number ; j++){
            document.write("*")
        }
        document.write("</br>")
}
}

function CodingArt2(){
    let number = +prompt("Enter a number from 5 to 15 !");

    for(let i=0; i<number ; i++){
       
        for(let j=0; j<number ; j++){

            

            for(let k=0; k<number ; k++){

                document.write(" * ")
            } 
        document.write("</br>")
        }

        document.write("*" + "    "  + "*")
    }

}



  


 




   


    




