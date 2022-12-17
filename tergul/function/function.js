
function one() {
    let num1 = document.getElementById("1_1").value
    let num2 = document.getElementById("1_2").value

    let big_number = Math.max(num1,num2)
    document.getElementById("one").innerHTML = big_number;
}

function two() {
    let num1 = document.getElementById("2_1").value
    let num2 = document.getElementById("2_2").value

    let power_number = Math.pow(num1,num2)
    document.getElementById("two").innerHTML = power_number;
}

function three(){
    let number = document.getElementById("3").value
    let num = 1

    while(number > 0){
        num = num * number;
        number--;
    }
    document.getElementById("three").innerHTML = num;
}
