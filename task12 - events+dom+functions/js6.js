
let num1= +prompt("please enter a number");
let num2= +prompt("please enter another number");


let arr = fillArray(num1, num2);
document.write(arr);

function fillArray(num1,num2){
  let newArr= [];
  let index = 0;
  for(let i=((num1>=num2)? num2 : num1 ) ; i<=((num1>=num2)? num1 : num2 ) ; i++){
    newArr[index] = i;
    index++;
  }
  return newArr;
}