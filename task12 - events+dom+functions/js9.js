const arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = prompt("please enter a string");
}

FirstLetterUpperCase(arr);

function FirstLetterUpperCase(arr){

  arr.forEach(element => {
    element = element.split("");
    element[0] = element[0].toUpperCase();
    element=element.join("");
    document.write(element + " ");
    
  });

}

