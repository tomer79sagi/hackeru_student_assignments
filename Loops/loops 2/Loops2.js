var myarr = [];
var myarr2 = [];
var myarr3 = [];
var myarr4 = [];
var myarr5 = [];
var myarr6 = [];
var sum = 0;
var sum1 = 0;
var num = 0;
var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var num6 = 0;
var num7 = 0;
var num8 = 0;
var num9 = 0;
var num10 = 0;
var digiNum = 0;
var avg = 0;
var total = 0;
var highNum = 0;
var lowNum = 1;
var arrOfDigi = [];
var arrOfDigi2 = [];
var reverseArr = [];
var count = 0;

function oneToNum() {
    num = parseInt(document.getElementById("one2Num").value);
    for (let i = 1; i <= num; i++) {
        myarr.push(i);
    }
    document.getElementById("myarr").innerHTML = myarr;
    document.getElementById("Add1").disabled = true;
}

function numToNum() {
    num1 = parseInt(document.getElementById("num2Num1").value);
    num2 = parseInt(document.getElementById("num2Num2").value);
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            myarr2.push(i);
        }
        document.getElementById("myarr2").innerHTML = myarr2;
        document.getElementById("Add2").disabled = true;
    }
    else
        document.getElementById("myarr2").innerHTML = "Num1 cant be lower than Num2"

}

function evenToNum() {
    num = parseInt(document.getElementById("evenNum").value);
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0)
            myarr3.push(i);
    }
    document.getElementById("myarr3").innerHTML = myarr3;
    document.getElementById("Add3").disabled = true;

}

function divideByNum() {
    num = parseInt(document.getElementById("divideByNum").value);
    max = parseInt(document.getElementById("divideByMax").value);
    for (let i = 0; i <= max; i++) {
        if (i % num == 0)
            myarr4.push(i);
    }
    document.getElementById("myarr4").innerHTML = myarr4;
    document.getElementById("Add4").disabled = true;

}

function sumArray() {
    num3 = parseInt(prompt('Enter a number (to stop enter 99): '));
    while (num3 != 99) {
        if (num3 < 0 || isNaN(num3)) {
            num3 = parseInt(prompt('The number must be possitive Please Enter a number (to stop enter 99): '));
        }
        else {
            sum += num3;
            num3 = parseInt(prompt('Enter a number (to stop enter 99): '));
        }
    }
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("Add5").disabled = true;
}

function arrayOfArray() {
    num4 = parseInt(prompt('Enter a number (to stop enter -1): '));
    while (num4 != -1) {
        if (num4 < 0 || isNaN(num4)) {
            num4 = parseInt(prompt('The number must be possitive Please Enter a number (to stop enter -1): '));
        }
        else {
            myarr5.push(num4);
            num4 = parseInt(prompt('Enter a number (to stop enter -1): '));
        }
    }
    var length = parseInt(myarr5.length)
    for (var i = 0; i < myarr5.length; i++) {
        if (myarr5[i] != 0)
            total = parseInt(total) + parseInt(myarr5[i]);
        if (myarr5[i] == 0)
            length--;
    }
    avg = parseInt(total) / length;
    document.getElementById("avg").innerHTML = avg;
    document.getElementById("myarr5").innerHTML = myarr5;
    document.getElementById("Add6").disabled = true;
}

function highOfArray() {
    num5 = parseInt(prompt('Enter a possitive number (to stop enter negative number or 0): '));
    while (num5 > 0) {
        num5 = parseInt(prompt('Enter a possitive number (to stop enter negative number or 0): '));
        if (num5 <= 0 || isNaN(num5)) {
            document.getElementById("highNum").innerHTML = highNum;
            break;
        }
        else if (num5 > highNum) {
            highNum = num5;
        }
    }
    document.getElementById("highNum").innerHTML = highNum;
    document.getElementById("Add7").disabled = true;
}

function lowOfArray() {
    num6 = parseInt(prompt('Enter a possitive number (to stop enter negative number or 0): '));
    while (num6 > 0) {
        num6 = parseInt(prompt('Enter a number (to stop enter negative number or 0): '));

        if (num6 <= 0 || isNaN(num6)) {
            document.getElementById("lowNum").innerHTML = lowNum;
            break;
        }
        else if (num6 < lowNum) {
            lowNum = num6;
        }
    }
    document.getElementById("lowNum").innerHTML = lowNum;
    document.getElementById("Add8").disabled = true;
}

function indexOfArray() {
    for (var i = 10; i > 0; i--) {
        num7 = parseInt(prompt('Enter a any number.Space left in the Array : ' + i + ' More numbers.'))
        myarr6.push(num7);
    }
    indexMax = Math.max.apply(null, myarr6);
    indexOf = myarr6.indexOf(indexMax)
    document.getElementById("indexOf").innerHTML = indexOf;
    document.getElementById("Add9").disabled = true;
}

function numberOfNumbers() {
    num8 = parseInt(prompt('Enter a number: '));
    length = num8.toString().length;
    document.getElementById("numberOfNumbers").innerHTML = length;
    document.getElementById("Add11").disabled = true;
}

function digiInNum() {
    num9 = parseInt(document.getElementById("DigiNum").value);
    digi = parseInt(document.getElementById("Digi").value);
    arrOfDigi = Array.from(String(num9), Number);

    for (var i = 0; i < arrOfDigi.length; i++)
        if (digi == arrOfDigi[i])
            count++;

    document.getElementById("amountOfDigi").innerHTML = count;
    document.getElementById("Add12").disabled = true;
}

function reverseNum() {
    num10 = parseInt(prompt('Enter a number to Reverse: '));
    arrOfDigi2 = Array.from(String(num10), Number);
    reverseArr = arrOfDigi2.reverse();
    document.getElementById("reverseNum").innerHTML = reverseArr.join('');
    document.getElementById("Add13").disabled = true;
}