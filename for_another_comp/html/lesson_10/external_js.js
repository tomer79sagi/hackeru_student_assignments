while (true){
    let number = prompt("Put a number from 1 to infinity:");
    if(number>=1){
        for(let i=1;i<=number;i++){
            for(let j=1;j<=i;j++){
                document.write(i);
            }
            document.write('<br/>');
        }
        break;
    } else {
        alert("I thought I was very clear...");
    }
}