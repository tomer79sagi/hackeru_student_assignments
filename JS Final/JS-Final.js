/** @format */
var x = 0;
var array = [];

function reset_Builder() {
	x = 0;
	array = [];
}

function array_Builder(num) {
	if (num !== "") {
		array[x] = num;
		x++;
	} else {
	}
}

/* function display_array() {
	var e = "<hr/>";

	for (var y = 0; y < array.length; y++) {
		e += "Element " + y + " = " + array[y] + "<br/>";
	}
	document.getElementById("Result").innerHTML = e;
} */

function questionOne() {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += parseInt(array[i]);
	}

	document.getElementById("question_One").innerHTML = sum;
	document.getElementById("one1").disabled = true;
	reset_Builder();
}

function questionTwo() {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += parseInt(array[i]);
	}

	document.getElementById("question_Two").innerHTML = sum / array.length;
	document.getElementById("two2").disabled = true;
	reset_Builder();
}

function questionThree() {
	var array1 = [];
	var array2 = [];
	var num1;
	var num2;
	array1.push(prompt("Please enter something for Array1"));
	for (let i = 0; i <= array1.length; i++)
		if (num1 !== "") {
			num1 = prompt("Please enter something for Array1 to stop enter blank");
			array1.push(num1);
		}

	array2.push(prompt("Please enter something for Array2"));
	for (let y = 0; y <= array2.length; y++)
		if (num2 !== "") {
			num2 = prompt("Please enter something for Array2 to stop enter blank");
			array2.push(num2);
		}

	document.getElementById("question_Three").innerHTML = array1.concat(array2);
	document.getElementById("three3").disabled = true;
}

function questionFour() {
	let max_str = array[0].length;
	let result = array[0];

	for (var i = 1; i < array.length; i++) {
		let next_str = array[i].length;
		if (next_str > max_str) {
			result = array[i];
			max_str = next_str;
		}
	}

	document.getElementById("question_Four").innerHTML = result;
	document.getElementById("button3").disabled = true;
	document.getElementById("four4").disabled = true;
	reset_Builder();
}

function questionFive() {
	for (var i = 1; i < array.length; i++) {
		if (array[i] !== array[0]) {
			result = "False";
			break;
		} else {
			result = "True";
		}
	}

	document.getElementById("question_Five").innerHTML = result;
	document.getElementById("button4").disabled = true;
	document.getElementById("Five5").disabled = true;
	reset_Builder();
}

function questionSix() {
	let myarr1 = [];
	num1 = parseInt(document.getElementById("num_1").value);
	num2 = parseInt(document.getElementById("num_2").value);
	if (num1 < num2) {
		for (let i = num1; i <= num2; i++) {
			myarr1.push(i);
		}
		document.getElementById("mynumbers").innerHTML = myarr1;
		document.getElementById("button5").disabled = true;
	} else
		document.getElementById("mynumbers").innerHTML =
			"Num1 cant be lower than Num2";
}

function questionSeven() {
	var item = array[Math.floor(Math.random() * array.length)];

	document.getElementById("question_Seven").innerHTML = item;
	//document.getElementById("Seven7").disabled = true;
	//reset_Builder();
}

function questionEigth() {
	let first = array[0];
	let last = array[array.length - 1];

	document.getElementById("question_Eigth").innerHTML =
		"The First Element is: " + first + "<br/> The Last Element is: " + last;
	document.getElementById("Eigth8").disabled = true;
	reset_Builder();
}

function questionNine() {
	for (var i = 0; i < array.length; i++) {
		array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
	}
	document.getElementById("question_Nine").innerHTML = array;
	document.getElementById("Nine9").disabled = true;
	reset_Builder();
}

function questionTen() {
	for (var i = 0; i < array.length; i++) {
		for (var i = 0; i < array.length; i++) {
			if (array[i].length < 6) {
				array.splice(i, 1);
				i--;
			}
		}
	}

	document.getElementById("question_Ten").innerHTML = array;
	document.getElementById("Ten10").disabled = true;
	reset_Builder();
}

function disableButton() {
	document.getElementById("buttonOne").disabled = true;
}

function EnableButton() {
	document.getElementById("buttonOne").disabled = false;
}

function hoverGrow() {
    let img = document.getElementById("img1");
	let height = img.getAttribute('height');

	img.addEventListener("onmouseenter", () => {
		img.setAttribute(height) = height++;
	});
}
