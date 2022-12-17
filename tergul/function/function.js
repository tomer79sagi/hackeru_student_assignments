
function one(num1, num2) {
    num1 = document.getElementById("1_1")
    num2 = document.getElementById("1_2")

    if (num1 > num2) {
        document.getElementById("one").innerHTML+=num1;
    } else
        document.getElementById("one").innerHTML+=num2;
}