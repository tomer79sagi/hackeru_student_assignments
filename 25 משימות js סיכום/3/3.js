

function arrcall3() {
let array1=[],array2=[],array3=[];
let i,check1,check2 
array1[0]=0,array2[0]=0;
    for (i=0;i<10;i++){
   check1=+prompt("enter num fo arr1");
   check2=+prompt("enter num fo arr2");      
    if (check1>=0) {
    array1[i]=check1;
    }if (check2>=0) {
    array2[i]=check2;

    }
     if (check1<0||check2<0){
    break;
    }

    }   
 array3.length=array1.length+array2.length;

 for (i=0,j=0;i<array3.length;i++,j++){
   
    if (array1[i]>=0) {
      
    array3[j]=array1[i];
    document.write("number"+ (j+1)+" in array 3 is: "+ array3[j]+"<br/>");
    j++;
   
    } if (array2[i]>=0) {
    array3[j]=array2[i];
 document.write("number"+ (j+1)+" in array 3 is: "+ array3[j]+"<br/>");
    }
   
    
    
    }

}

     // Update the 'innerHTML' property
     //p_element_object.innerHTML = "Tomer Sagi";


