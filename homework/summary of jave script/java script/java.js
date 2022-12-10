
const Numbers = [10, 20, 30, 40, 50, 60, 73];
const vegetables = ["cucumber", "tomato", "potato", "onion", "eggplant", "beet",
    "cabbage"];

//----1-----//

function task1(Numbers) {
    let sum = 0;
    for (let i = 0; i < Numbers.length; i++) {
        sum += Numbers[i];
    }
    document.getElementById("1").innerHTML +=
        "Sum of given array is " + sum + "<br/>";
}

//----2-----//

function task2(Numbers) {
    let sum = 0;
    for (let i = 0; i < Numbers.length; i++) {
        sum += Numbers[i];
    }
    document.getElementById("2").innerHTML +=
        "average of given array is " + sum / Numbers.length + "<br/>";
}

//----3-----//

const CupleOfArry1 = Numbers
const CupleOfArry2 = Numbers

function task3(CupleOfArry1, CupleOfArry2) {

    document.getElementById("3").innerHTML += CupleOfArry1 + ", in your face, " + CupleOfArry2 + "<br/>";
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
    document.getElementById("4").innerHTML +=
        " the word whith the longest number of letters is <br/> " + longest + "<br/>";
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
    document.getElementById("5").innerHTML +=
        "the longest number is " + length + " letters";

    let short = length;

    for (let i = 0; i < vegetables.length; i++) {
        if (vegetables[i].length < short) {
            short = vegetables[i].length;
            longest = vegetables[i];
        }
    }
    document.getElementById("5").innerHTML +=
        "<br/> the shortest number is " + short + " letters";

    if (short === length) {
        document.getElementById("5").innerHTML +=
            "<br/> therefore, the answer to the question is " + true + "<br/>";
    } else {
        document.getElementById("5").innerHTML +=
            "<br/> therefore, the answer to the question is " + false  + "<br/>";
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
        document.getElementById("6").innerHTML += array + "<br/>";
    }
}

//----7-----//

function task7(vegetables) {
    let newVagetable = vegetables[Math.floor(Math.random() * vegetables.length)];

    document.getElementById("7").innerHTML += newVagetable + "<br/>";
}

//----8-----//

function task8(vegetables) {
    let first = vegetables[0];
    let last = vegetables[vegetables.length - 1];

    document.getElementById("8").innerHTML += "the first element is = " + first + "<br/>" + "and the lest element is = " + last + "<br/>";
}

//----9-----//

function task9(vegetables) {
    let FirstLetter = [];
    for (let i = 0; i < vegetables.length; i++) {
        FirstLetter += vegetables[i].charAt(0).toUpperCase() + vegetables[i].slice(1) + " ";
    }
    document.getElementById("9").innerHTML += FirstLetter + "<br/>";
}

//----10-----//

function task10(vegetables) {
    let newarray = [];
    for (let i = 0; i < vegetables.length; i++) {
        if (vegetables[i].length >= 6) {
            newarray.push(vegetables[i]);
        }
    }
    document.getElementById("10").innerHTML += newarray + "<br/>";
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
    x.style.height = "1000px";
    x.style.width = "1000px";
}

function normal(x) {
    x.style.height = "50px";
    x.style.width = "50px";
}
