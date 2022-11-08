var myarr = [];
var total = 0;

var highArr = [];
var high = 0;

var zeroFrom = 0;
var zeroArr = [];

var countToTenArr = [];

var divideBy = 0;
var divideByArr = [];
var dividedLengh = 0;
var count = 0;

var factorial = 0;
var factorialSum = 0;
var factorialArr = [];

var randomNum = Math.floor(Math.random() * 100);
var userSucces = 0;
var userArr = [];
var userGuees = 0;

function avgTo() {
    if (myarr.length < 10) {
        myarr.push(document.getElementById("userinput1").value);
        console.log(myarr);
        document.getElementById("myarr").innerHTML = myarr;
    }
    else {
        for (var i = 0; i < myarr.length; i++) {
            total = parseInt(total) + parseInt(myarr[i]);
        }
        var avg = parseInt(total) / parseInt(myarr.length);
        document.getElementById("myarr").innerHTML = myarr;
        document.getElementById("avg").innerHTML = avg;
        document.getElementById("Add1").disabled = true;
    }
}

function highTo() {
    if (highArr.length < 3) {
        highArr.push(document.getElementById("userinput2").value);
        console.log(highArr);
        document.getElementById("highArr").innerHTML = highArr;

    }
    else {
        high = Math.max.apply(null, highArr);
        document.getElementById("highArr").innerHTML = highArr;
        document.getElementById("high").innerHTML = high;
        document.getElementById("Add2").disabled = true;
    }
}

function zeroTo() {
    zeroFrom = document.getElementById("userinput3").value;
    console.log(zeroFrom);
    for (var i = zeroFrom; i != -1; i--) {
        zeroArr.push(i);
    }
    document.getElementById("numZero").innerHTML = zeroArr;
    document.getElementById("Add3").disabled = true;
}

function countToTen() {
    for (var i = 1; i <= 10; i++) {
        if (i != 7)
            countToTenArr.push(i);
        else {
            continue;
        }
    }
    document.getElementById("countTo").innerHTML = countToTenArr;
    document.getElementById("count").disabled = true;
}

function dividedBy() {
    divideBy = document.getElementById("userinput4").value;
    for (var i = 0; i < 1000; i++) {
        if (i % divideBy == 0)
            count++;
        else
            continue;
    }
    document.getElementById("dividedAmount").innerHTML = count;
    document.getElementById("divide").disabled = true;
}


function factorialTo() {
    factorial = document.getElementById("userinput5").value;
    var num = factorial;
    if (factorial < 1) {
        alert("the Number is Smaller then 1")
    }
    if (factorial > 100) {
        alert("the Number is Higer then 100")
    }
    if (isNaN(factorial)) {
        alert("this is not a number");
    }
    else {
        for (var i = factorial - 1; i >= 1; i--) {
            factorial = factorial * i;
            factorialArr.push(i);
            factorialSum = factorial;
        }
    }

    document.getElementById("factorialOf").innerHTML = factorialSum + " = " + num + "*" + factorialArr.join('*');
    document.getElementById("FactorialIs").disabled = true;
}


function gueesTheNumber() {
    userGuees = document.getElementById("userinput6").value;
    while (userSucces != 1 || userArr.length != 10) {
        if (userGuees < randomNum) {
            document.getElementById("hint").innerHTML = "The Number is Too Low Go Higer"
            userArr.push(userGuees);
        }
        if (userGuees > randomNum) {
            document.getElementById("hint").innerHTML = "The Number is Too High Go Lower"
            userArr.push(userGuees);
        }
        if (userGuees == randomNum) {
            document.getElementById("hint").innerHTML = "Well Done You Managed to Guees The Number: ";
            userSucces = 1;
        }

        document.getElementById("notThisNumbers").innerHTML = userArr;
    }

}