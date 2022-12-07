function result () {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let result = document.getElementById("res");

    let value1 = parseInt(num1.value);
    let value2 = parseInt(num2.value);
    if(isNaN(value1) || isNaN(value2)) {
        alert("Please enter a number!")
    } 
    else {
        result.value = value1 + value2;
    }
}