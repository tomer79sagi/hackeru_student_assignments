function withVat(cost) {
  if (isNaN(cost.value)) {
    alert("Enter only a number");
  } else {
    document.getElementById("including_VAT").value = cost.value * 1.17;
  }
}

function withoutVat(cost) {
  if (isNaN(cost.value)) {
    alert("Enter only a number");
  } else {
    document.getElementById("without_VAT").value = cost.value / 1.17;
  }
}
