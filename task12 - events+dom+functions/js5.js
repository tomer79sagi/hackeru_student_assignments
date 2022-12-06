const arr = [];


for (let i = 0; i < 5; i++) {
  arr[i] = prompt("please enter a string");
}

document.write( isAllElementsEqual(arr) );

function isAllElementsEqual(arr){
 if( arr.reduce(function(a, b){ return (a === b) ? a : false; }) == false )
 return false;
 else return true;

}