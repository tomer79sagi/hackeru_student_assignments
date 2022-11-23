let array = [] //the array is the holding numbers

while(array.length  <= 9){
    let num = +prompt('please enter a  number');
 
    array.push(num)
}

let the_max_number = Math.max(...array);
let the_index_number = 0;
for(let i = 0; i < array.length; i++){
    if(array[i] == the_max_number){
     the_index_number = i+1
    }
}

document.write('the max number of the array is '+ the_max_number+ " and the order number is" + the_index_number)