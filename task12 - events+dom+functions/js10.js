const vegetables = [
  "cucumber",
  "tomato",
  "potato",
  "onion",
  "eggplant",
  "beet",
  "cabbage",
];


let newArr = morethanSix(vegetables);
document.write("Original array : " + vegetables + "</br>");
document.write("Filtered Array: " + newArr);

function morethanSix(array) {
  var filtered = array.filter(function (value) {
    return value.length >= 6;
  });
  return filtered;
}
