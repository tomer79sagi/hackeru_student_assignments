// Ex1
function sum_of_array() {
   let array = [] , sum = 0
    for (let i = 0; i < 10; i++) {
        array[i] = +prompt("Please enter a number");
        sum += array[i];

    }
    document.write("Sum of the array is: " + sum);
}