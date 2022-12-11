/** @format */

let backgroundcolorIn = document.getElementById("backGroundColor");

let div = document.getElementsByTagName("div");

/* backgroundcolorIn.addEventListener("change", function () {
	for (var i = 0; i < div.length; i++) {
		div[i].style.backgroundColor = backgroundcolorIn;
	}
});
 */
function changeBackGroundColor() {
	let backgroundcolorIn = document.getElementById("backGroundColor").value;
	document.body.style.backgroundColor = backgroundcolorIn;
}

function changeTextColor() {
	let textColor = document.getElementById("textColor").value;
	document.body.style.color = textColor;
}
