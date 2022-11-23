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

document.write("these are all the numbers: "+array)

