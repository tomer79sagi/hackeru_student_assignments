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
	let currwidth = img.clientWidth;
	if (currwidth >= 500) {
		alert("Maximum Size level reached.");
	} else {
		img.style.width = currwidth + 50 + "px";
	}
}

function tableCreator() {
	tbl = document.getElementById("myTable");
	var characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var charactersLength = characters.length;

	var row = parseInt(document.getElementById("row1").value);
	var col = parseInt(document.getElementById("col1").value);

	for (var i = 0; i < row; i++) {
		const tr = tbl.insertRow();
		for (var j = 0; j < col; j++) {
			if (i == row && j == col) {
				break;
			} else {
				const td = tr.insertCell();
				td.appendChild(
					document.createTextNode(
						characters.charAt(Math.random() * charactersLength)
					)
				);
			}
		}
	}
}

function tableClear() {
	tbl = document.getElementById("myTable");
	var row = parseInt(document.getElementById("row1").value);

	for (var i = row; i > 0; i--) {
		tbl.deleteRow(0);
	}
}

function followMouse() {
	let mouseDiv = document.getElementById("mouseFrame");
	mouseDiv.style.display = "";
	const move = (e) => {
		try {
			var x = e.pageX;
			var y = e.pageY;
		} catch (e) {}
		mouseDiv.style.left = x + "px";
		mouseDiv.style.top = y + "px";
	};
	document.addEventListener("mousemove", (e) => {
		move(e);
	});
	document.addEventListener("onmouseleave", (e) => {
		hide(e);
	});
}

function hideMouse() {
	let mouseDiv = document.getElementById("mouseFrame");
	mouseDiv.style.display = "none";
}

function colorsRandom() {
	let square = document.getElementById("colorSquare");
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
		square.style.backgroundColor = color;
	}
}

function colorStop() {
	let square = document.getElementById("colorSquare");
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
		square.style.backgroundColor = color;
	}
}

function randomString() {
	let string1 = document.getElementById("string3").value;
	let string2 = document.getElementById("string4").value;
	let randStr1;
	let randStr2;
	var shuffledWord1 = "";
	var shuffledWord2 = "";

	randStr1 = string1.split("");
	while (randStr1.length > 0) {
		shuffledWord1 += randStr1.splice((randStr1.length * Math.random()) << 0, 1);
	}

	randStr2 = string2.split("");
	while (randStr2.length > 0) {
		shuffledWord2 += randStr2.splice((randStr2.length * Math.random()) << 0, 1);
	}

	document.getElementById("string3").value = shuffledWord1;
	document.getElementById("string4").value = shuffledWord2;
}

function datesBetween() {
	document.getElementById("Dates").innerHTML = "";
	let date1 = new Date(document.getElementById("date1").value);
	let date2 = new Date(document.getElementById("date2").value);
	const dates = [];
	while (date1 <= date2) {
		var day = date1.getDate();
		var month = date1.getMonth() + 1;
		var year = date1.getFullYear();
		var dateStr = day + "/" + month + "/" + year + "<br/>";
		dates.push(dateStr);
		date1.setDate(date1.getDate() + 1);
	}
	document.getElementById("Dates").innerHTML = dates.join("");
}

function datesBetween() {
	document.getElementById("Date2").innerHTML = "";
	let date1 = new Date(document.getElementById("date3").value);
	let date2 = new Date(document.getElementById("date4").value);
	var day1 = date1.getDate();
	var month1 = date1.getMonth() + 1;
	var year1 = date1.getFullYear();
	var day2 = date2.getDate();
	var month2 = date2.getMonth() + 1;
	var year2 = date2.getFullYear();

	if (day1 >= day2 && month1 >= month2 && year1 >= year2) {
		document.getElementById("Date2").innerHTML =
			"The First Date is the Higest: <br/>" + date1;
	} else {
		document.getElementById("Date2").innerHTML =
			"The Second Date is the Higest: <br/>" + date2;
	}
}

function changeFontSize() {
	var range = document.getElementById("slider");
	var con = document.getElementById("normal");
	con.style.fontSize = range.value + "px";
}
