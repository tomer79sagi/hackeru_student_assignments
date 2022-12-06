function printBiggerDate() {
  let firstDate = document.getElementById("firstDate");
  let secondDate = document.getElementById("secondDate");

  let fDate = new Date(firstDate.value);
  let sDate = new Date(secondDate.value);

  if (fDate >= sDate) {
    let result = document.getElementById("result");
    result.innerHTML = "The Biggest date is: " + "</br>" + fDate.getDate() + "/" + (fDate.getMonth() + 1 ) + "/" + fDate.getFullYear() ;
   
  } else {
    result.innerHTML = "The Biggest date is: " + "</br>" + sDate.getDate() + "/" + (sDate.getMonth() + 1 ) + "/" + sDate.getFullYear();
  }
}
