

function arrcall1() {
let array=[],i,sum=0;
    for (i=0;i<10;i++){
    array[i]=+prompt("enter number"); 
        if (array[i]<0) {
           alert("number isnt valid");
            break;
        }
    sum+=array[i];



    }
    document.write(" sum of numbers is: "+ sum);
   
}

    
    
   
     // Update the 'innerHTML' property
     //p_element_object.innerHTML = "Tomer Sagi";


