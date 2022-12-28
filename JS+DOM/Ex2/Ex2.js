function average() {
    let avr , sum =0;
    let array = [];
    for (let i = 0;i < 5; i++){
        array[i] = +prompt("Please enter numbers");
        sum += array[i];

    } 

    avr = sum / array.length
    document.write("The average is: " + avr);
}