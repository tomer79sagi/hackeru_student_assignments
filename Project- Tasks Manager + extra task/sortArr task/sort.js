function createArray() {
  let arraySize = document.getElementById("arrSize").value;
  if (arraySize <= 0) {
    alert("Please enter a valid array with 1 or more elements");
  } else {
    let arr = [];
    for (let i = 0; i < arraySize; i++) {
      arr[i] = Math.floor(Math.random() * 100 + 1);
    }

    let div = document.getElementById("presentArr");
    div.innerHTML =
      "</br>" + "The generated array of size " + arraySize + " is :" + "</br>";
    let newArr = document.createElement("div");
    let sortBtn = document.createElement("button");
    sortBtn.innerHTML = "Sort Array";

    newArr.innerHTML = arr + " ";
    newArr.appendChild(sortBtn);
    div.appendChild(newArr);

    sortBtn.onclick = () => {
      let sortedArr = sortArr(arr);
      sortBtn.style.display = 'none';
      let sorted = document.createElement("div");
      sorted.innerHTML =
        "</br>" + "The sorted array is :" + "</br>" + sortedArr + `<hr>`;
      div.appendChild(sorted);

      let filterBtn = document.createElement("button")
      filterBtn.innerHTML = "Filter to categories "
      div.appendChild(filterBtn)
      
      filterBtn.onclick = () => {
        let smallValues = sortedArr.filter( value => value<=30);
        let mediumlValues = sortedArr.filter( value => value>30 && value<=60);
        let bigValues = sortedArr.filter( value => value>60 && value<=100);

        let small = document.createElement("div");
        if(smallValues.length>0){
        small.innerHTML = "</br>" + "The Small values are :" + "</br>" + smallValues;
        }else{
          small.innerHTML = "</br>" + "There are no small values"
        }
        div.appendChild(small);
        
        let medium = document.createElement("div");
        if(mediumlValues.length>0){
        medium.innerHTML = "</br>" + "The Medium values are :" + "</br>" + mediumlValues;
        }else{
          medium.innerHTML = "</br>" + "There are no medium values"
        }
        div.appendChild(medium);

        let big = document.createElement("div");
        if(bigValues.length>0){
        big.innerHTML = "</br>" + "The Big values are :" + "</br>" + bigValues;
        }
        else{
          big.innerHTML = "</br>" + "There are no Big values"
        }
        div.appendChild(big);
        filterBtn.style.display = 'none'
      }
    };
  }
}

function sortArr(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
 