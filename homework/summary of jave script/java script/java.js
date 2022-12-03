//----1-----//
const SumOfNum = [10, 20, 30, 40, 50, 60, 73];

function task1(SumOfNum) {
    let sum = 0;
    for (let i = 0; i < SumOfNum.length; i++) {
        sum += SumOfNum[i];
    }
    document.getElementById("ptask1").innerHTML +=
        "<br/><br/> Sum of given array is " + sum;
}

//----2-----//

const AveOfNum = [10, 20, 30, 40, 50, 60, 73];

function task2(AveOfNum) {
    let sum = 0;
    for (let i = 0; i < AveOfNum.length; i++) {
        sum += AveOfNum[i];
    }
    document.getElementById("ptask2").innerHTML +=
        "<br/><br/> average of given array is " + sum / AveOfNum.length;
}

//----3-----//

const CupleOfArry1 = [10, 20, 30, 40, 50, 60, 73];
const CupleOfArry2 = [10, 20, 30, 40, 50, 60, 73];

function task3(CupleOfArry1, CupleOfArry2) {

    document.getElementById("ptask3.2").innerHTML += "<br/><br/>" + CupleOfArry1 + ", in your face " + CupleOfArry2;

}

//----4-----//

const vegetables = ["cucumber", "tomato", "potato", "onion", "eggplant", "beet",
    "cabbage"];

function task4(vegetables) {
    let longest = 0;
    let length = 0;

    for (let i = 0; i < vegetables.length; i++) {
        if (vegetables[i].length > length) {
            length = vegetables[i].length;
            longest = vegetables[i];
        }
    }
    document.getElementById("ptask4").innerHTML +=
        "<br/><br/>" + longest;
}

//----5-----//

const vegetables1 = ["cucumber", "tomato", "potato", "onion", "eggplant", "beet",
    "cabbage"];

function task5(vegetables1) {
    let longest = 0;
    let length = 0;

    for (let i = 0; i < vegetables1.length; i++) {
        if (vegetables1[i].length > length) {
            length = vegetables1[i].length;
            longest = vegetables1[i];
        }
    }
    document.getElementById("ptask5").innerHTML +=
        "<br/><br/>" + length;

    let short = length;

    for (let i = 0; i < vegetables1.length; i++) {
        if (vegetables1[i].length < short) {
            short = vegetables1[i].length;
            longest = vegetables1[i];
        }
    }
    document.getElementById("ptask5").innerHTML +=
        "<br/><br/>" + short;

    if (short === length) {
        document.getElementById("ptask5").innerHTML +=
            "<br/><br/>" + true;
    } else {
        document.getElementById("ptask5").innerHTML +=
            "<br/><br/>" + false;
    }
}

//----6-----//

function task6(x, y) {
    x = +prompt("enter first number");
    y = +prompt("enter second number");
    let array = [];

    if (y < x) {
        alert("click the button agian");
    }else{
        for (let i = x+1; i <y; i++){
            array.push(i);
        }
        document.getElementById("ptask6").innerHTML +=
            "<br/><br/>" + array;
    }

}

//----7-----//

const vegetables2 = ["cucumber", "tomato", "potato", "onion", "eggplant", "beet",
    "cabbage"];

function task7(vegetables2){
    let newVagetable = vegetables2[Math.floor(Math.random() * vegetables2.length)];

   document.getElementById("ptask7").innerHTML += "<br/><br/>" + newVagetable;
}