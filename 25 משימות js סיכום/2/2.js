

function arrcall2() {
let array=[],i,sum=0;
    for (i=0;i<10;i++){
    array[i]=+prompt("enter number"); 
        if (array[i]<0) {
           alert("number isnt valid");
           array[i]=undefined;
           break;
        }
    sum+=array[i];



    }
    document.write(" average of numbers is: "+ sum/i);
    document.write(" length: "+ array.length);
}

    
    
   
     // Update the 'innerHTML' property
     //p_element_object.innerHTML = "Tomer Sagi";


