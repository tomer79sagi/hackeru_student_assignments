let num = +prompt('enter a number')
let max = +prompt('enter a higher number')
if(max<num){
    document.write('the second number is too small')
}
else{
    for(let i = 0; i<max; i++){
        if(i%num===0){
            document.write(i+ ", ")
        }
    }
}