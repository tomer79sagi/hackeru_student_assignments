let arr = [], num, ogermin, index;
let arr30 = [], arr60 = [], arr100 = []
const element = document.getElementById("myBtn");

for (let i = 0; i < 10; i++) {
    arr[i] = +prompt("enter number in place number " + (i + 1) + ":");
}
document.getElementById("demo").innerHTML = "<p> array before ordered: " + arr + "</p>"
for (let q = 0; q < arr.length; q++) {
    for (let i = q, j = q; j < arr.length && i < arr.length; i++) {
        if (arr[i] < arr[j]) {
            index = i;
            ogermin = arr[i];
            arr[index] = arr[j]
            arr[j] = ogermin;
        }
        if (i === 9) {

            j++;
        }
    }
}

arr.map(myFunction1);


function myFunction1(num) {

    if (num < 31) {
        arr30.push(num);
    }
    else if (num >= 31 && num <= 60) {
        arr60.push(num);
    }
    else if (num >= 61 && num <= 100) {
        arr100.push(num);
    }

}
if (arr30.length > arr60.length )
    for (let i = 0; i <= arr30.length - arr60.length; i++)
        arr30.pop();

if (arr30.length > arr100.length )
    for (let i = 0; i <= arr30.length - arr100.length; i++)
        arr30.pop();

if (arr60.length > arr30.length )
    for (let i = 0; i <= arr60.length - arr30.length; i++)
        arr60.pop();

if (arr60.length > arr100.length )
    for (let i = 0; i <= arr60.length - arr100.length; i++)
        arr60.pop();

if (arr100.length > arr30.length )
    for (let i = 0; i <= arr100.length - arr30.length; i++)
        arr100.pop();

if (arr100.length > arr60.length )
    for (let i = 0; i <= arr100.length - arr60.length; i++)
        arr100.pop();







element.addEventListener("click", myFunction);
function myFunction() {
    document.getElementById("demo").innerHTML += arr + "<br>";
    document.getElementById("demo").innerHTML += "array from 0-30 is: " + arr30 + " arr30 length is: " + arr30.length+ " <br> ";
    document.getElementById("demo").innerHTML += "array from 31-60 is: " + arr60 + " arr60 length is: " + arr60.length+ " <br> ";
    document.getElementById("demo").innerHTML += "array from 61-100 is: " + arr100 + " arr100 length is: " + arr100.length+ " <br> ";
}
