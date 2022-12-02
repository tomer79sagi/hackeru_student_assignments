function sum(){
    let numbers = document.querySelectorAll("input[type = 'text']");
    numbers[2].value =parseInt(numbers[1].value) + parseInt(numbers[0].value);
}
