
function one() {
    let num1 = document.getElementById("1_1").value
    let num2 = document.getElementById("1_2").value

    let big_number = Math.max(num1,num2)
    document.getElementById("one").innerHTML = big_number;
}

function two() {
    let num1 = document.getElementById("2_1").value
    let num2 = document.getElementById("2_2").value

    let power_number = Math.pow(num1,num2)
    document.getElementById("two").innerHTML = power_number;
}

function three(){
    let number = document.getElementById("3").value
    let num = 1

    while(number > 0){
        num = num * number;
        number--;
    }
    document.getElementById("three").innerHTML = num;
}

function four() {
    let num = document.getElementById("4").value
    let newNum = ""

    for(let i = num.length - 1; i >=0; i--){
        newNum += num[i]
    }
    document.getElementById("four").innerHTML = newNum;
}

function five(){
    let num = document.getElementById("5").value
    let num1 = 0
    let word = document.getElementById("massage").value

    for(let i = 0;i < num;i++){
        let number = +prompt("enter number");
        num1 += number
    }
    document.getElementById("five").innerHTML = num1
    document.getElementById("word").innerHTML = word
}

// function six(){}

function seven(){
    let num1 = document.getElementById("7_1").value
    let num2 = document.getElementById("7_2").value

    let random = Math.floor(Math.random() * (num2 - num1)+num1);

    document.getElementById("seven").innerHTML = random;
}