let input = document.getElementById("input-array")
let display = document.getElementById("display-array")
let checkbox = document.getElementById("checkbox")

function createRandomArray(){
    let array = new Array
    for(let i = 0; i < 50; ++i){
        let random = Math.floor(Math.random() * 100 + 1)
        array[i] = random
    }
    if(checkbox.checked){
        let sorted = sortArray(array)
        let split = splitArray(sorted)
        display.innerHTML = "Small Array: " + split.sArray + "<br>" +
        "Medium Array: " + split.mArray + "<br>" + 
        "Big Array: " + split.bArray
    } else {
        let sorted = sortArray(array)
        display.innerHTML = sorted
    }
    
}

function getInputArray(){
    let parts = String(input.value).split(",")
    if(parts.includes(" ")){
        alert("Please make sure your input is correct")
    }
    if(checkbox.checked){
        let sorted = sortArray(parts)
        let split = splitArray(sorted)
        display.innerHTML = "Small Array: " + split.sArray + "<br>" +
        "Medium Array: " + split.mArray + "<br>" + 
        "Big Array: " + split.bArray
    } else {
        let sorted = sortArray(parts)
    display.innerHTML = sorted
    }
    
}

function sortArray(array) {
    var done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          let tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
}

function splitArray(array){
    let arrayContianer = new Object
    let smallArray = new Array
    let mediumArray = new Array
    let bigArray = new Array
    for(let i = 0; i < array.length; ++i){
        if(array[i] >= 0 && array[i] <= 30){
            smallArray[smallArray.length] = array[i]
        }
        else if(array[i] > 30 && array[i] <= 60){
            mediumArray[mediumArray.length] = array[i]
        }
        else if(array[i] > 60 && array[i] <= 100){
            bigArray[bigArray.length] = array[i]
        }
    }
    arrayContianer = {
        sArray: smallArray,
        mArray: mediumArray,
        bArray: bigArray
    }
    console.log(smallArray);
    console.log(mediumArray);
    console.log(bigArray);
    return arrayContianer
}
