

function arrcall6() {

let j,i,num1,num2,arr=[];
  num1=+prompt("enter num1");
   num2=+prompt("enter num2");      
   if (num1>num2){
      for(j=0,i=num2+1;i<num1;i++,j++){
      arr[j]=i;
      document.write( arr[j]+"<br/>");
      }
   }
   else if (num1<num2){
      for(j=0,i=num1+1;i<num2;i++,j++){
         arr[j] =i;
      document.write(arr[j]+"<br/>");
      }
   }
   else{
      document.write("numbers are even");
   }


     // Update the 'innerHTML' property
     //p_element_object.innerHTML = "Tomer Sagi";

}
