
let flag = true
let array = []
while(flag){
    let num = +prompt('please enter a positive number');
    array.push(num)
    if(num===99){
    
        flag=false
    }
}
let count = 0


for(let i =0; i< array.length;i++){
   if(array[i] === 99){
    continue

   }else{
     count = count + array[i]
   }


}


document.write("the sum of all numbers is : "+count)











