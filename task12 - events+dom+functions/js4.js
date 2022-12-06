const arr = [];


for (let i = 0; i < 4; i++) {
  arr[i] = prompt("please enter a string");
}

findLongest(arr);

function findLongest(arr){
  let longetStr = '';
  arr.forEach(element => {
    if(longetStr.length <= element.length){
      longetStr = element;
    }
  });
  document.write(longetStr);
}
