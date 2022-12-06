const arr = [];

for(let i=0; i<5 ; i++){
    arr[i] = +prompt("please enter a number")
}

printSum(arr);

function printSum(arr){
    let sum=0;
    arr.forEach(num => {
        sum+=num;
    });
    
    document.write("the sum of all the numbers is: " + sum);
}
