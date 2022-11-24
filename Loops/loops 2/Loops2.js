/** @format */

var myarr = [];
var myarr2 = [];
var myarr3 = [];
var myarr4 = [];
var myarr5 = [];
var myarr6 = [];
var myarr7 = [];
var myarr8 = [];
var myarr9 = [];
var myarr10 = [];
var myarr11 = [];
var myarr12 = [];
var myarr13 = [];

var sum = 0;
var sum1 = 0;
var sum2 = 1;
var sum3 = 0;
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
var num11 = 0;
var num12 = 0;
var num13 = 0;
var num14 = 0;
var num15 = 0;
var num16 = 0;
var num17 = 0;
var num18 = 0;

var numTwoDiv = 0;
var divBy1 = 1;
var divBy2 = 1;
var palin;
var digiNum = 0;
var avg = 0;
var total = 0;
var highNum = 0;
var lowNum = 1;
var arrOfDigi = [];
var arrOfDigi2 = [];
var arrOfDigi3 = [];
var reverseArr = [];
var reverseArr1 = [];
var count = 0;
var numPow = 0;
var commonNum = 0;
var factorialArr = [];
var factorial = 0;

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
	} else
		document.getElementById("myarr2").innerHTML =
			"Num1 cant be lower than Num2";
}

function evenToNum() {
	num = parseInt(document.getElementById("evenNum").value);
	for (let i = 0; i <= num; i++) {
		if (i % 2 == 0) myarr3.push(i);
	}
	document.getElementById("myarr3").innerHTML = myarr3;
	document.getElementById("Add3").disabled = true;
}

function divideByNum() {
	num = parseInt(document.getElementById("divideByNum").value);
	max = parseInt(document.getElementById("divideByMax").value);
	for (let i = 0; i <= max; i++) {
		if (i % num == 0) myarr4.push(i);
	}
	document.getElementById("myarr4").innerHTML = myarr4;
	document.getElementById("Add4").disabled = true;
}

function sumArray() {
	num3 = parseInt(prompt("Enter a number (to stop enter 99): "));
	while (num3 != 99) {
		if (num3 < 0 || isNaN(num3)) {
			num3 = parseInt(
				prompt(
					"The number must be possitive Please Enter a number (to stop enter 99): "
				)
			);
		} else {
			sum += num3;
			num3 = parseInt(prompt("Enter a number (to stop enter 99): "));
		}
	}
	document.getElementById("sum").innerHTML = sum;
	document.getElementById("Add5").disabled = true;
}

function arrayOfArray() {
	num4 = parseInt(prompt("Enter a number (to stop enter -1): "));
	while (num4 != -1) {
		if (num4 < 0 || isNaN(num4)) {
			num4 = parseInt(
				prompt(
					"The number must be possitive Please Enter a number (to stop enter -1): "
				)
			);
		} else {
			myarr5.push(num4);
			num4 = parseInt(prompt("Enter a number (to stop enter -1): "));
		}
	}
	var length = parseInt(myarr5.length);
	for (var i = 0; i < myarr5.length; i++) {
		if (myarr5[i] != 0) total = parseInt(total) + parseInt(myarr5[i]);
		if (myarr5[i] == 0) length--;
	}
	avg = parseInt(total) / length;
	document.getElementById("avg").innerHTML = avg;
	document.getElementById("myarr5").innerHTML = myarr5;
	document.getElementById("Add6").disabled = true;
}

function highOfArray() {
	num5 = parseInt(
		prompt("Enter a possitive number (to stop enter negative number or 0): ")
	);
	while (num5 > 0) {
		num5 = parseInt(
			prompt("Enter a possitive number (to stop enter negative number or 0): ")
		);
		if (num5 <= 0 || isNaN(num5)) {
			document.getElementById("highNum").innerHTML = highNum;
			break;
		} else if (num5 > highNum) {
			highNum = num5;
		}
	}
	document.getElementById("highNum").innerHTML = highNum;
	document.getElementById("Add7").disabled = true;
}

function lowOfArray() {
	num6 = parseInt(
		prompt("Enter a possitive number (to stop enter negative number or 0): ")
	);
	while (num6 > 0) {
		num6 = parseInt(
			prompt("Enter a number (to stop enter negative number or 0): ")
		);

		if (num6 <= 0 || isNaN(num6)) {
			document.getElementById("lowNum").innerHTML = lowNum;
			break;
		} else if (num6 < lowNum) {
			lowNum = num6;
		}
	}
	document.getElementById("lowNum").innerHTML = lowNum;
	document.getElementById("Add8").disabled = true;
}

function indexOfArray() {
	for (var i = 10; i > 0; i--) {
		num7 = parseInt(
			prompt(
				"Enter a any number.Space left in the Array : " + i + " More numbers."
			)
		);
		myarr6.push(num7);
	}
	indexMax = Math.max.apply(null, myarr6);
	indexOf = myarr6.indexOf(indexMax);
	document.getElementById("indexOf").innerHTML = indexOf;
	document.getElementById("Add9").disabled = true;
}

function numberOfNumbers() {
	num8 = parseInt(prompt("Enter a number: "));
	length = num8.toString().length;
	document.getElementById("numberOfNumbers").innerHTML = length;
	document.getElementById("Add11").disabled = true;
}

function digiInNum() {
	num9 = parseInt(document.getElementById("DigiNum").value);
	digi = parseInt(document.getElementById("Digi").value);
	arrOfDigi = Array.from(String(num9), Number);

	for (var i = 0; i < arrOfDigi.length; i++) if (digi == arrOfDigi[i]) count++;

	document.getElementById("amountOfDigi").innerHTML = count;
	document.getElementById("Add12").disabled = true;
}

function reverseNum() {
	num10 = parseInt(prompt("Enter a number to Reverse: "));
	arrOfDigi2 = Array.from(String(num10), Number);
	reverseArr = arrOfDigi2.reverse();
	document.getElementById("reverseNum").innerHTML = reverseArr.join("");
	document.getElementById("Add13").disabled = true;
}

function palindromeNum() {
	palin = prompt("Enter a number to Test if it is a palindrome: ");
	reverseArr1 = palin.split("").reverse().join("");
	if (palin === reverseArr1) {
		document.getElementById("palindromeNum").innerHTML =
			"True This Number is a palindrome";
	} else {
		document.getElementById("palindromeNum").innerHTML =
			"False This Number is not a palindrome";
	}
	document.getElementById("Add14").disabled = true;
}

function powNum() {
	num11 = prompt("Enter a Possitive number to Get Power on: ");
	numPow = prompt("Enter a Possitive number Power the first number: ");
	while (num11 < 1 || numPow < 1) {
		alert("Please Enter Possitive numbers and above 0 (not including)");
		num11 = prompt("Enter a Possitive number to Get Power on: ");
		numPow = prompt("Enter a Possitive number Power the first number: ");
	}
	while (numPow > 0) {
		sum2 = sum2 * num11;
		numPow--;
	}
	document.getElementById("numPow").innerHTML =
		"The Power of: " + num11 + " Is : " + sum2;
	document.getElementById("Add15").disabled = true;
}

function divideNum() {
	num12 = parseInt(
		prompt("Enter a number To see all the integer numbers it can divide in: ")
	);
	for (var i = num12; i > 0; i--) {
		if (num12 % i == 0) {
			myarr7.push(i);
		}
	}
	document.getElementById("numDivide").innerHTML = myarr7;
	document.getElementById("Add16").disabled = true;
}

function divideTwoNum() {
	num13 = parseInt(
		prompt("Enter a number To see all the integer numbers it can divide in: ")
	);
	num14 = parseInt(
		prompt("Enter a number To see all the integer numbers it can divide in: ")
	);

	for (var i = num13; i > 0; i--) {
		if (num13 % i == 0) {
			myarr8.push(i);
		}
	}
	for (var x = num14; x > 0; x--) {
		if (num14 % x == 0) {
			myarr9.push(x);
		}
	}
	document.getElementById("numTwoDivide").innerHTML =
		"The Common Divider for the numbers is: " + checkSimilar(myarr8, myarr9);
	document.getElementById("Add17").disabled = true;
}

function checkSimilar(array1, array2) {
	for (var i = 0; i < array1.length; i++) {
		for (var j = 0; j < array2.length; j++) {
			if (array1[i] == array2[j] && commonNum < array1[i]) {
				commonNum = array1[i];
			}
		}
	}
	return commonNum;
}

function factorialTo() {
	factorial = document.getElementById("userinput5").value;
	var num = factorial;
	if (factorial < 1) {
		alert("the Number is Smaller then 1");
	}
	if (factorial > 100) {
		alert("the Number is Higer then 100");
	}
	if (isNaN(factorial)) {
		alert("this is not a number");
	} else {
		for (var i = factorial - 1; i >= 1; i--) {
			factorial = factorial * i;
			factorialArr.push(i);
			var factorialSum = factorial;
		}
	}

	document.getElementById("factorialOf").innerHTML =
		factorialSum + " = " + num + "*" + factorialArr.join("*");
	document.getElementById("Add18").disabled = true;
}

function dividedBy() {
	var divideBy = document.getElementById("userinput4").value;
	for (var i = 0; i < 1000; i++) {
		if (i % divideBy == 0) count++;
		else continue;
	}
	document.getElementById("dividedAmount").innerHTML = count;
	document.getElementById("Add19").disabled = true;
}

function starSquare() {
	num15 = parseInt(
		prompt(
			"Enter a number Between 5 - 15 and the function will print a square of the same size: "
		)
	);
	while (num15 > 15 || num15 < 5)
		num15 = parseInt(
			prompt(
				"Please Enter a number Between 5 - 15 and the function will print a square of the same size: "
			)
		);
	for (var i = 0; i < num15; i++) {
		myarr10.push("<br>");
		for (var j = 0; j < num15; j++) {
			myarr10.push("&nbsp&nbsp*");
		}
	}

	document.getElementById("starSquare").innerHTML = myarr10.join("");
	document.getElementById("Add20").disabled = true;
}

function starSquareHollow() {
	num16 = parseInt(
		prompt(
			"Enter a number Between 5 - 15 and the function will print a square of the same size: "
		)
	);
	while (num16 > 15 || num16 < 5)
		num16 = parseInt(
			prompt(
				"Please Enter a number Between 5 - 15 and the function will print a square of the same size: "
			)
		);
	for (var row = 0; row < num16; row++) {
		myarr11.push("<br>");
		for (var col = 0; col < num16; col++) {
			if (row == 0 || row == num16 - 1 || col == 0 || col == num16 - 1) {
				myarr11.push("&nbsp&nbsp*");
			} else {
				myarr11.push("&nbsp&nbsp&nbsp&nbsp");
			}
		}
	}
	console.log(myarr11);
	document.getElementById("starSquareHollow").innerHTML = myarr11.join("");
	document.getElementById("Add21").disabled = true;
}

function starPyramid() {
	num17 = parseInt(
		prompt(
			"Enter a number the function will print a pyramid of the same size: "
		)
	);
	for (var i = 1; i <= num17; i++) {
		myarr12.push("<br>");
		for (var j = 1; j <= num17 - i; j++) {
			myarr12.push("&nbsp&nbsp&nbsp&nbsp");
		}
		for (var k = 0; k < 2 * i - 1; k++) {
			myarr12.push("&nbsp&nbsp*");
		}
	}
	console.log(myarr12);
	document.getElementById("starPyramid").innerHTML = myarr12.join("");
	document.getElementById("Add22").disabled = true;
}

function multiBoard() {
	num18 = parseInt(
		prompt(
			"Enter a number the function will print the multification board until that number: "
		)
	);
	for (var i = 1; i <= num18; i++) {
		myarr13.push(i + ' * ' + num18 + ' = ' + (i * num18) + '<br>');
	}
	console.log(myarr13);
	document.getElementById("multiBoard").innerHTML = myarr13.join("");
	document.getElementById("Add23").disabled = true;
}
