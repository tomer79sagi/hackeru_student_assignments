let flag = true; //the flag is the button for closing the loop
let array = [] //the array is the holding numbers

while(flag){
    let num = +prompt('please enter a positive number');
   
    if(num < 0 && array.length > 0){
        
        flag = false
    }
    array.push(num)


   
}
let new_array = []
for(let i = 0; i <  array.length; i++){
    if(array[i] > 0){
        new_array.push(array[i])
    }

} 
let min_number
if(new_array.length > 0){
  min_number  = Math.min(...new_array)
}else{
    min_number = 'you entered only negative numbers'
}

document.write('the min number is ' + min_number)



