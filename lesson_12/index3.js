let average = () => {
    const array = [];
    let num;
    while(array.length<10){
        num = parseInt(prompt("Add your positive number"));
        if(num >= 0){
            array.push(num);
        }
    }
    let sum = 0;
    for(let i = 0;i<array.length;i++){
        sum+=array[i];
    }
    return alert("Average of given number is " + (sum/array.length));
}