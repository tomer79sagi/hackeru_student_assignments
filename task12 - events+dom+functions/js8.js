const arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = prompt("please enter a string");
}

getFirstandLast(arr);

function getFirstandLast(arr){

  document.write("first is: " + arr[0] + " and last is: "+ arr[arr.length-1]);

}

