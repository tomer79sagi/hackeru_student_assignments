let flag = true;

let array = []
let i = 0;
while(flag){
    let num = +prompt('please enter a positive number');
   
    if(num < 0 && array.length > 0){
        document.write( " ,the number you enter is lower then ziro " + num+ "<br/>")
        flag=false
    
    }

    array.push(num)  

  
  
}

document.write("the max number is :" +Math.max(...array))



