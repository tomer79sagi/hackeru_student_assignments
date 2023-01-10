let div = document.querySelector('div');

function numbers(){
    let numbers = [];
    let amount = parseInt(prompt("Number of numbers please"));
    if(amount > 0 && amount < 101){
        for (let i = 1; i <= amount; i++){
            numbers.push(i);
        }
        div.textContent = numbers;
        return numbers;
    } else {
        alert("Number is not good")
        numbers();
    }
}