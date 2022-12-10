
const Numbers = [10, 20, 30, 40, 50, 60, 73];
const vegetables = ["cucumber", "tomato", "potato", "onion", "eggplant", "beet",
    "cabbage"];

//----1-----//

function task1(Numbers) {
    let sum = 0;
    for (let i = 0; i < Numbers.length; i++) {
        sum += Numbers[i];
    }
    document.getElementById("ptask1").innerHTML +=
        "<br/><br/> Sum of given array is " + sum;
}

//----2-----//

function task2(Numbers) {
    let sum = 0;
    for (let i = 0; i < Numbers.length; i++) {
        sum += Numbers[i];
    }
    document.getElementById("ptask2").innerHTML +=
        "<br/><br/> average of given array is " + sum / Numbers.length;
}

//----3-----//

const CupleOfArry1 = Numbers
const CupleOfArry2 = Numbers

function task3(CupleOfArry1, CupleOfArry2) {

    document.getElementById("ptask3.2").innerHTML += "<br/><br/>" + CupleOfArry1 + ", in your face, " + CupleOfArry2;
}

// function task31(CupleOfArry1, CupleOfArry2) {

//     let array = CupleOfArry1;

//     for (let i = 0; i < CupleOfArry2.length; i++) {
//         let a = CupleOfArry2[i]
//         array.push(a);
//     }
//     document.getElementById("ptask31").innerHTML +=
//         "<br/><br/>" + array;
// }
    


//----4-----//

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

function task5(vegetables) {
    let longest = 0;
    let length = 0;

    for (let i = 0; i < vegetables.length; i++) {
        if (vegetables[i].length > length) {
            length = vegetables[i].length;
            longest = vegetables[i];
        }
    }
    document.getElementById("ptask5").innerHTML +=
        "<br/><br/> the longest number is " + length + " letters";

    let short = length;

    for (let i = 0; i < vegetables.length; i++) {
        if (vegetables[i].length < short) {
            short = vegetables[i].length;
            longest = vegetables[i];
        }
    }
    document.getElementById("ptask5").innerHTML +=
        "<br/><br/> the shortest number is " + short + " letters";

    if (short === length) {
        document.getElementById("ptask5").innerHTML +=
            "<br/><br/> therefore, the answer to the question is " + true;
    } else {
        document.getElementById("ptask5").innerHTML +=
            "<br/><br/> therefore, the answer to the question is " + false;
    }
}

//----6-----//

function task6(x, y) {
    x = +prompt("enter first number");
    y = +prompt("enter second number");
    let array = [];

    if (y < x) {
        alert("click the button agian");
    } else {
        for (let i = x + 1; i < y; i++) {
            array.push(i);
        }
        document.getElementById("ptask6").innerHTML +=
            "<br/><br/>" + array;
    }
}

//----7-----//

function task7(vegetables) {
    let newVagetable = vegetables[Math.floor(Math.random() * vegetables.length)];

    document.getElementById("ptask7").innerHTML += "<br/><br/>" + newVagetable;
}

//----8-----//

function task8(vegetables) {
    let first = vegetables[0];
    let last = vegetables[vegetables.length - 1];

    document.getElementById("ptask8").innerHTML += "<br/><br/>" + "the first element is = " + first + "<br/>" + "and the lest element is = " + last;
}

//----9-----//

let FirstLetter = [];

function task9(vegetables) {
    for (let i = 0; i < vegetables.length; i++) {
        FirstLetter += vegetables[i].charAt(0).toUpperCase() + vegetables[i].slice(1) + " ";
    }
    document.getElementById("ptask9").innerHTML += "<br/><br/>" + FirstLetter;
}

//----10-----//

function task10(vegetables) {
    let newarray = [];
    for (let i = 0; i < vegetables.length; i++) {
        if (vegetables[i].length >= 6) {
            newarray.push(vegetables[i]);
        }
    }
    document.getElementById("ptask10").innerHTML += "<br/><br/>" + newarray;
}

//----11-----//

function task11() {
    let btn = document.getElementById("task11");

    if (btn.innerHTML === "fuck") {
        btn.innerHTML = "you";
        btn.style.backgroundColor = "red";
    } else if (btn.innerHTML === "you") {
        btn.innerHTML = "fuck";
        btn.style.backgroundColor = "yellow";
    }
}

//----12-----//
function big(x) {
    x.style.height = "500px";
    x.style.width = "500px";
}

function normal(x) {
    x.style.height = "5px";
    x.style.width = "5px";
}
