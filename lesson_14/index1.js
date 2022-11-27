function convertWithVAT(price){
    if(isNaN(price.value)){
        alert("You have to enter a number!");
    } else {
        document.getElementById("wVAT").value = (price.value * 1.17);
    }
}
function convertWithoutVAT(price){
    if(isNaN(price.value)){
        alert("You have to enter a number!");
    } else {
        document.getElementById("woVAT").value = (price.value / 1.17);
    }
}