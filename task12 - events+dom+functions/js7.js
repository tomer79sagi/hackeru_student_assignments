const arr = [15,24,14,0,300];

let rand = getRundomItem(arr);

function getRundomItem(arr){

  let random = Math.floor(Math.random() * 5);
  document.write(arr[random]);
  return arr[random];

}

