function printDatesBetween() {
  let dateFrom = document.getElementById("dateFrom");
  let dateTo = document.getElementById("dateTo");

  let dFrom = new Date(dateFrom.value);
  let dTo = new Date(dateTo.value);

  if (dFrom <= dTo) {
    let result = document.getElementById("result");
    result.innerHTML = "The dates are: " + "</br>";
    
    let date = dFrom;

    while (date <= dTo) {
      result.innerHTML +=
        date.getDate() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getFullYear() +
        "</br>";

      let newDate = date.setDate(date.getDate() + 1);
      date = new Date(newDate);
    }
  } else{
    alert("First date is bigger than the second date");
  }
}
