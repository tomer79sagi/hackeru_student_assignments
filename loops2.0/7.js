let flag = true
let array = []
while(flag){
    let num = +prompt('please enter a positive number');
   
    if(num < 0){
    
        flag=false
    }else{
    array.push(num)  
    }
}
let counter = 0;



for(let i = 0; i< array.length; i++){

counter = counter + array[i]

}





document.write("the avarage number is "+counter / array.length)
