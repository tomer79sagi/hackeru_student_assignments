

 function arrcall9() {

let textcheck,long,i,j,arr=[],result;

for(i=0;i<3;i++){arr[i]=prompt("enter sentence");}

for(i=0;i<arr.length;i++){

textcheck=arr[i];
long=arr[i].length;
result=arr[i][0].toUpperCase();

arr[i]=result;
for(j=1;j<long;j++){
    arr[i]+=textcheck[j];
     
     }

}
for(i=0;i<3;i++){document.write("<br/>"+arr[i]);}
}

     // Update the 'innerHTML' property
     //p_element_object.innerHTML = "Tomer Sagi";


    