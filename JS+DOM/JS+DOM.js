//1 - Calculating sum

function calculateSum(){
    let array1 = [];
    let sum1 = 0;
     for(let i = 0; i < 10; i++){
      let x = +prompt("Enter a number");
      array1.push(x);
      sum1 += x
     }
     document.write("The sum of your array is : " + sum1 );
}



//2 - calculating average

function calculateAverage(){
    let array2 = [];
    let sum2 = 0;
    let average1 = 0;
     for(let i = 0; i < 7; i++){
      let x = +prompt("Enter a number");
      array2.push(x);
      sum2 += x
     }
     average1 = sum2/array2.length;
     document.write("The average of your array is : " + average1 );
}


//3 - combining two arrays into one

function combineArrays(){
    let myArray1 = [];
    let myArray2 = [];
    let combinedArray = [];

    for(let i = 0; i < 6; i++){
        let x = +prompt("Add a number to the first array");
        myArray1.push(x);
        
       }

       for(let i = 0; i < 6; i++){
        let y = +prompt("Add a number to the second array");
        myArray2.push(y);
       }

       combinedArray = myArray1.concat(myArray2);
       document.write("Your combined array is : " + combinedArray);
    
}


//4 - connecting different strings into single text

function connectStrings(){

    let myString =[];
    let combinedStrings = [];

    for(let i = 0; i < 10; i++){
        let x = prompt("Enter any text");
        myString.push(x);
        combinedStrings +=x
        
       }
 

       
       document.write("Your combined array is : " + combinedStrings);
}


//5 - Check equality

function checkEquality(){

    let numbers = [];
    
    for(let i = 0; i < 5; i++){
        let x = +prompt("Enter any number");
        numbers.push(x);
       }

       if (numbers.every( v => v === numbers[0] )){
document.write("True ! All the numbers are equal");
       }else{
        document.write("False, the numbers are not equal");
       }

    }



    //6 - numbers in between

function numbersBetween(){

    let myArray =[];
    let x = +prompt("Enter any number");
    let y = +prompt("Enter a bigger number");
        
     for(x; x < y; x++){
        myArray.push(x);    
        }
    document.write(myArray);     
}

//7 - return a random number from my array
function returnRandom(){

    let numbers = [];
    
    for(let i = 0; i < 7; i++){
        let x = +prompt("Enter any number");
        numbers.push(x);
       }

     
       var random = numbers[Math.floor(Math.random()*numbers.length)];
       document.write(random);

 
}

//8 - The first and the last element of array

function firstAndLast(){
    let myArray = [];

    for(let i=0;i<7;i++){
    let elem1 = prompt("Enter element number " + (i+1));
    myArray.push(elem1);
    }

    let x = myArray[0];
    let y = myArray[myArray.length - 1];
    document.write("Your first and last elements are : " + x + " and " + y );
}

//9 - All capital letters

function allCapital(){
    let myArray1 = [];

    for(let i=0; i<8; i++){
    let str1 = prompt("Enter text only!");
    myArray1.push(str1);
    }

    let xyz = myArray1.map(elem => {
        document.write (elem.toUpperCase());
      });

    
   
}

//10 - longer than six

function longerThanSix(){
    let myArr = [];

    for(let i=0; i<8; i++){
    let str = prompt("Enter text");
      if(str.length > 6){
       myArr.push(str);
      }
    }

    document.write(myArr);

}

//11 - Toggle switch - was made on the html file
// function toggleSwitch(){
//
//}

//12 - Enlarge image onclick

function imageEnlarge(){

    var theImg = document.getElementById('myImg');
    myImg.height = 450;
    myImg.width = 600;
}

function getback(){
    
    myImg.height = 180;
    myImg.width = 270;
}


// 13 - random table

function drawTable() {

    
    document.write("<table border=1px; >");
    for(i=1;i<=10;i++){
        document.write("<tr>");
    for(j=1;j<=10;j++){
       result = Math.random().toString(36).substring(2,7);
        document.write(" <td> "+result+"<td/>");
      
       
    }
        document.write("</tr>");
    
    }
        document.write("</table>");
}
       
    //14 - moving a button by hovering

    function onMouse(){
    let button = document.getElementById('element');
       function onMouse  (x) {
        button.style.left = x.pageX + 'px';
        button.style.top = x.pageY + 'px';
        }
        document.addEventListener('mousemove', onMouse);
    }

    //15 Change colors
    
    var doc = document.getElementById("clr");
    var color = ["black", "blue", "brown", "green"];
    var i = 0;
    function changeColor() {
      doc.style.color = color[i];
      i++;
      
      if(i > color.length - 1) {
        i = 0;
      }
      setInterval(changeColor, 1000);
    }
    
//16 change text
            function textChange() {
    
                var text =document.getElementById("text").value;
                document.getElementById("myTextarea").value=text;
            }

//17 calculating dates
function calculateDays(){
    let d1 = document.getElementById("d1").value;
    let d2 = document.getElementById("d2").value;
    let dateOne = new Date(d1);
    let dateTwo = new Date(d2);
    let time = Math.abs(dateTwo - dateOne);
    let days = Math.ceil(time/(1000*60*60*24));
    document.getElementById("output").innerHTML=days;
    alert(days);

}

//18 



//19
function fontSize(){
    let font_size=document.querySelector("#fontsize");
    document.body.style.fontSize=font_size.value+"px";
    }
                 
                
                
        

