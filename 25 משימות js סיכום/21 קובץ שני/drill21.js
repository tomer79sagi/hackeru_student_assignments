function checkstring(){
let check=document.querySelector("#back");
   let x=check.value;
   let i;
    if(x==""){
    alert("בבקשה הכנס שם משתמש");
    }

        else{   
        for ( i=0;i<x.length;i++){
        if (parseInt(x[i])==x[i]){
        alert("השם אינו תקין");
        break;
        }
        }
        
       if (i===x.length)
        {
        alert("השם  תקין");
        }
        else{ alert("השם אינו תקין");}
    }

}  