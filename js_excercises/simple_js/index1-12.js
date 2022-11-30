const numbers = [88, 12, 102, 66, 1, 13, 5, 10]; // for excercises 1,2,3,5,7,8
const vegetables = ["cucumber", "tomato", "potato", "onion", "eggplant", "beet",
"cabbage"]; // for excecises 3,9,10
const example = [1, "string", true]; // for excercise 3
const greetings = "Hi there!"; // for excercise 4
const text_arr = ["This", "is", "a", "text!"]; // for excercise 4
const equal_string_arr=["Hello","Hello","Hello"]; // for excercise 5
let isOn = true; // for excercise 11

//-----------------------------------------//

function excercise1(numArray){
    let sum=0;
    for(let i=0; i<numArray.length; i++){
        sum+=numArray[i];
    }
    document.getElementById("excercise1").innerHTML += "<br/><br/> Sum of given array is " + sum;
    document.getElementById("button1").disabled = true;
}

//-----------------------------------------//


function excercise2(numArray){
    let sum=0;
    for(let i=0; i<numArray.length; i++){
        sum+=numArray[i];
    }
    document.getElementById("excercise2").innerHTML += "<br/><br/> Average of given array is " + sum/numArray.length;
    document.getElementById("button2").disabled = true;
}

//-----------------------------------------//

function excercise3(...arrays){
    let combinedArray = [];
    for(let i = 0; i<arrays.length; i++){
        for(let j = 0; j<arrays[i].length; j++){
        combinedArray.push(arrays[i][j]);
        }
    }

    document.getElementById("excercise3").innerHTML += "<br/><br/> Combine array of given arrays is " + combinedArray;
    document.getElementById("button3").disabled = true;
}

//-----------------------------------------//

function excercise4(...strings){
    let combinedText = "";
    for(let i = 0; i<strings.length; i++){
        if(Array.isArray(strings[i])){
            combinedText += strings[i].join(' ')+ " ";
        } else {
            combinedText += strings[i] + " ";
        }
    }

    document.getElementById("excercise4").innerHTML += "<br/><br/> Combine text of given texts is " + combinedText;
    document.getElementById("button4").disabled = true;
}

//-----------------------------------------//

function excercise5(array){
    let isEqual = true;
    for(let i = 1; i<array.length; i++){
        if(array[0] !== array[i]){
            isEqual = false;
            break;
        }
    }
    if(isEqual){
        document.getElementById("excercise5.1").innerHTML += "<br/><br/> Are elements equal in given array?" + isEqual;
        document.getElementById("button5.1").disabled = true;
    } else {
        document.getElementById("excercise5.2").innerHTML += "<br/><br/> Are elements equal in given array? " + isEqual;
        document.getElementById("button5.2").disabled = true;
    }
}

//-----------------------------------------//

function excercise6(num1, num2){
    if(num1 > num2){
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    const array = [];
    for(let i = num1+1; i<num2; i++){
        array.push(i);
    }
    if (array.length == 0){
        document.getElementById("excercise6").innerHTML = "<br/><br/> There are no numbers between given numbers!";
    } else {
        document.getElementById("excercise6").innerHTML = "<br/><br/> Numbers between given numbers are " + array;
    }
    
}

//-----------------------------------------//

function excercise7(array){
    document.getElementById("excercise7").innerHTML += array[Math.floor(Math.random()*array.length)] + "&nbsp;";
}

//-----------------------------------------//

function excercise8(array){
    document.getElementById("excercise8").innerHTML += "<br/><br/> First element of given array is: " + array[0] + "; and last element of given array is: " + array[array.length-1];
    document.getElementById("button8").disabled = true;
}

//-----------------------------------------//

function excercise9(array){
    const newArray = array.map(element => element[0].toUpperCase() + element.substring(1));
    document.getElementById("excercise9").innerHTML += "<br/><br/>" + newArray;
    document.getElementById("button9").disabled = true;
}

//-----------------------------------------//

function excercise10(array){
    const newArray = [];
    for(let i = 0; i< array.length; i++){
        if(array[i].length >= 6){
            newArray.push(array[i]);
        }
    }
    document.getElementById("excercise10").innerHTML += "<br/><br/>" + newArray;
    document.getElementById("button10").disabled = true;
}

//-----------------------------------------//

function excercise11(){
    let status = document.getElementById("button11");
    if(isOn){
        status.innerHTML = "OFF";
        status.style.backgroundColor = "lightcoral";
        isOn = false;
    } else {
        status.innerHTML = "ON";
        status.style.backgroundColor = "lightgreen";
        isOn = true;
    }
}

//-----------------------------------------//

function excercise12(element){
    let currWidth =  element.clientWidth;
    element.style.width = (currWidth + 10) + "px";
}