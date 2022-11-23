let num = +prompt ('Enter a number')
let num1 = +prompt ('Enter a smaller number')

if(num<num1){
document.write('the second number you have entered is too big')
}
else{
    for(let i=num1;i <=num; i++){
        document.write(i+', ')
    }
}