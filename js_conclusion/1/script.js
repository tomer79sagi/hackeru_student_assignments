const numbers = [88, 12, 102, 66, 1, 13, 5, 10];
const vegetables = [
  "cucumber",
  "tomato",
  "potato",
  "onion",
  "eggplant",
  "beet",
  "cabbage",
];

/* --1-- */
function summation(arr) {
  let sum = 0;
  for (i of arr) {
    sum += i;
  }
  return sum;
}
document.querySelector(".ex-1-10").innerHTML +=
  "Test 1: " + summation(numbers) + "</br>";

/* --2-- */
function average(arr) {
  let sum = 0;
  for (i of arr) {
    sum += i;
  }
  return sum / arr.length;
}
document.querySelector(".ex-1-10").innerHTML +=
  "Test 2: " + average(numbers) + "</br>";

/* --3-- */
function arraysMerge() {
  return [].concat(...arguments);
}
document.querySelector(".ex-1-10").innerHTML +=
  "Test 3: " + arraysMerge(numbers, numbers, numbers) + "</br>";
console.log(arraysMerge(numbers, numbers, numbers)); // returns array

/* --4-- */
function longestString(arr) {
  let longest = "";
  for (i of arr) {
    if (i.length > longest.length) longest = i;
  }
  return longest;
}
document.querySelector(".ex-1-10").innerHTML +=
  "Test 4: " + longestString(vegetables) + "</br>";

/* --5-- */
function areEqualItems(a) {
  if (a.length === 1 || a.length === 0) return true;
  if (a[0] === a[1]) return areEqualItems(a.slice(1));
  else return false;
}
document.querySelector(".ex-1-10").innerHTML +=
  "Test 5: " + areEqualItems(numbers) + "</br>";
document.querySelector(".ex-1-10").innerHTML +=
  "Test 5: " + areEqualItems([5, 5, 5, 5, 5, 5, 5]) + "</br>";

/* --6-- */
function betweenNumbers(a, b) {
  let arr = [];
  for (a++; a < b; a++) {
    arr.push(a);
  }
  return arr;
}

/* --recursive function but include the first num-- */

/* function betweenNumbers(a, b) {
  if (a + 1 === b) return a;
  return [].concat(a, betweenNumbers(++a, b));
} */

document.querySelector(".ex-1-10").innerHTML +=
  "Test 6: " + betweenNumbers(1, 10) + "</br>";

/* --7-- */
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
document.querySelector(".ex-1-10").innerHTML +=
  "Test 7: " + randomItem(numbers) + "</br>";

/* --8-- */
function extremelyItems(arr) {
  return [arr[0], arr[arr.length - 1]];
}
document.querySelector(".ex-1-10").innerHTML +=
  "Test 8: " + extremelyItems(numbers) + "</br>";

/* --9-- */
function capitalize(arr) {
  const capitalizedArr = arr.map((i) => i[0].toUpperCase() + i.slice(1));

  return capitalizedArr;
}
document.querySelector(".ex-1-10").innerHTML +=
  "Test 9: " + capitalize(vegetables) + "</br>";

/* --10-- */
function sixCharsOrLonger(arr) {
  let newArr = [];
  for (i of arr) {
    if (i.length > 6) newArr.push(i);
  }
  return newArr;
}
document.querySelector(".ex-1-10").innerHTML +=
  "Test 10: " + sixCharsOrLonger(vegetables) + "</br>";

/* --11-- */
function darkMode() {
  let mode = document.getElementById("ex-11-switch");
  /* console.log(mode.checked); */
  if (mode.checked) {
    document.querySelector("body").style.backgroundColor = "#5F7161";
  } else {
    document.querySelector("body").style.backgroundColor = "#D0C9C0";
  }
}

/* --12-- */
function maximaze() {
  arguments[0].style.transition = ".25s";
  arguments[0].style.width = arguments[0].offsetWidth + 10 + "px";
}

/* --13-- */
function generate() {
  let emojis = [
    0x1f600, 0x1f604, 0x1f34a, 0x1f344, 0x1f37f, 0x1f363, 0x1f370, 0x1f355,
    0x1f354, 0x1f35f, 0x1f6c0, 0x1f48e, 0x1f5fa, 0x23f0, 0x1f579, 0x1f4da,
    0x1f431, 0x1f42a, 0x1f439, 0x1f424,
  ];
  let tdNode = document.querySelectorAll(".ex-13 td");
  for (i = 0; i < tdNode.length; i++) {
    tdNode[i].innerHTML =
      "&#" + emojis[Math.floor(Math.random() * emojis.length)] + ";";
  }
}

/* --14-- */
function mouseFollower() {
  let cursor = document.getElementById("ex-14-element");
  document.addEventListener("mousemove", function (e) {
    cursor.style.position = "sticky";
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor.style.transform = "translate(0%, 0%)";
  });
}

/* --15-- */
function colorChange() {
  let colors = ["#C7C48F", "#A4A880", "#828D70", "#5F7161"];
  let elem = document.getElementById("ex-15-element");
  setInterval(() => {
    elem.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  }, 1000);
}

/* --16-- */
function switchValue() {
  let value1 = document.getElementById("ex-16-first").value;
  let value2 = document.getElementById("ex-16-second").value;

  document.getElementById("ex-16-first").value = value2;
  document.getElementById("ex-16-second").value = value1;
}

/* --17-- */
function printDates() {
  let firstDate = new Date(document.getElementById("ex-17-first").value);
  let secondDate = document.getElementById("ex-17-second").value;

  console.log(firstDate + " " + secondDate);
  firstDate.setFullYear(1998);
  console.log(firstDate + " " + secondDate);
}

window.onload = () => {
  colorChange();
};
