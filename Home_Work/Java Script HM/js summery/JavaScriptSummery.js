const vegetables = [
  "cucumber",
  "tomato",
  "potato",
  "onion",
  "eggplant",
  "beet",
  "cabbage",
];

//Task 1*/

// const sumOfNum = [10, 20, 30, 40, 50, 60, 73];

// function task1(sumOfNum) {
//   let sum = 0;
//   for (let i = 0; i < sumOfNum.length; i++) {
//     sum += sumOfNum[i];
//   }
//   document.getElementById("ptask1").innerHTML +=
//     "<br/><br/> Sum of given array is" + sum;
// }

//--------------------------------*/
//Task 2*/

// const averageOfNum = [10, 20, 30, 40, 50, 60, 73];

// function task2(averageOfNum) {
//   let average = 0;
//   for (let i = 0; i < averageOfNum.length; i++) {
//     average += averageOfNum[i];
//   }
//   document.getElementById("ptask2").innerHTML +=
//     "<br/><br/> The average of given array is" + average / averageOfNum.length;
// }

//--------------------------------*/
// Task 3*/

function task3(Array1, Array2) {
  for (let i = 0; i < Array2.length; i++) {
    Array1.push(Array2[i]);
  }
  return Array1;
}

function task3_test() {
  const a1 = [10, 20, 30, 40, 50, 60, 73];
  const a2 = [10, 20, 30, 40, 50, 60, 73];
  const a3 = task3(a1, a2);

  document.write(a3);
}
//--------------------------------*/
// Task 4*/

// function task4(vegetables) {
//   let longest = 0;
//   let length = 0;

//   for (let i = 0; i < vegetables.length; i++) {
//     if (vegetables[i].length > length) {
//       length = vegetables[i].length;
//       longest = vegetables[i];
//     }
//   }
//   document.getElementById("ptask4").innerHTML += "<br/><br/>" + longest;
// }

//--------------------------------*/
// Task 5*/

function task5() {
  let longest = 0;
  let length = 0;

  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i].length > length) {
      length = vegetables[i].length;
      longest = vegetables[i];
    }
  }
  document.getElementById("ptask5").innerHTML += "<br/><br/>" + length;

  let short = length;

  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i].length < short) {
      short = vegetables[i].length;
      longest = vegetables[i];
    }
  }
  document.getElementById("ptask5").innerHTML += "<br/><br/>" + short;

  if (short === length) {
    document.getElementById("ptask5").innerHTML += "<br/><br/>" + true;
  } else {
    document.getElementById("ptask5").innerHTML += "<br/><br/>" + false;
  }
}

//--------------------------------*/
// Task 6*/

// function task6(x, y) {
//   let array = [];

//   x = +prompt("please enter a number");
//   y = +prompt("please enter a number");

//   if (y < x) {
//     alert("click the button agian");
//   } else {
//     for (let i = x + 1; i < y; i++) {
//       array.push(i);
//     }
//     document.getElementById("ptask6").innerHTML += "<br/><br/>" + array;
//   }
// }

//--------------------------------*/
// Task 7*/

// function task7() {
//   let x = +prompt("please enter a number");
//   x = document.getElementById("ptask7").innerHTML = Math.random();
// }

//--------------------------------*/
// Task 8*/

// function task8(vegetables) {
//   let first = vegetables[0];
//   let last = vegetables[vegetables.length - 1];

//   document.getElementById("ptask8").innerHTML +=
//     "<br/><br/>" +
//     "the first element is = " +
//     first +
//     "<br/>" +
//     "and the lest element is = " +
//     last;
// }

//--------------------------------*/
// Task 9*/

// let FirstLetter = [];

// function task9(vegetables) {
//   for (let i = 0; i < vegetables.length; i++) {
//     FirstLetter +=
//       vegetables[i].charAt(0).toUpperCase() + vegetables[i].slice(1) + "  ";
//   }
//   document.getElementById("ptask9").innerHTML += "<br/><br/>" + FirstLetter;
// }

//--------------------------------*/
// Task 10*/

// function task10(vegetables) {
//   let newarray = [];
//   for (let i = 0; i < vegetables.length; i++) {
//     if (vegetables[i].length >= 6) {
//       newarray.push(vegetables[i]);
//     }
//   }
//   document.getElementById("ptask10").innerHTML += "<br/><br/>" + newarray;
// }

//--------------------------------*/
//Task11*/

//first push ON second push OFF and changing color each time you press it*/

// function task11() {
//   let btn = document.getElementById("ptask11");

//   if (btn.innerHTML === "ON") {
//     btn.innerHTML = "OFF";
//     btn.style.backgroundColor = "red";
//   } else if (btn.innerHTML === "OFF") {
//     btn.innerHTML = "ON";
//     btn.style.backgroundColor = "yellow";
//   }
// }

//--------------------------------*/
//Task12*/

// function big(x) {
//   x.style.height = "500px";
//   x.style.width = "500px";
// }

// function normal(x) {
//   x.style.height = "5px";
//   x.style.width = "5px";
// }

//--------------------------------*/
//Task13*/
