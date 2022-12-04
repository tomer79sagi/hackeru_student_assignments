function plusing(){
let first_name=document.getElementById("privatename");
let family_name=document.getElementById("familyename");
let mail=document.getElementById("mail");
let color=document.getElementById("coloro");
let message=document.getElementById("message");
message.value="";

    if(mail.value=="") message.value= "בקשה הכנס מייל                ";
      else if (mail.value===false){
        message.value+= "כתוב מייל תקין     ";
        } 
         
        if(first_name.value==""||family_name.value==""){
         message.value+= "בבקשה הכנס שם מלא                ";
        }
        
      
            for ( i=0;i< first_name.value.length;i++){
            if (parseInt( first_name.value[i])== first_name.value[i]){
            message.value+= "שם פרטי אינו תקין               ";
            break;}

       
      
       }
            for ( i=0;i<family_name.value.length;i++){
            if (parseInt( family_name.value[i])== family_name.value[i]){
            message.value+= "שם משפחה אינו תקין            ";
            break;
       
       }
       }


       if(color.value===""){
        message.value+= "בבקשה הכנס צבע                     ";
       }
    
        else if (color.value==="אדום"){
        message.value+= " צבע חם                      ";
      }
          else if (color.value==="כחול"){
        message.value+= " צבע קר                 ";
      }
             else{
             for (i=0;i< color.value.length;i++){
             if ( parseInt(color.value[i]) == color.value[i]){
             message.value+= "צבע שהוזן אינו תקין                ";
            break;}

             
            }
           if (color.value=="ירוק"||color.value=="צהוב"||color.value=="לבן"||color.value=="ורוד"||
                color.value=="תכלת"||color.value=="כתום"||color.value=="שחור") message.value+= "תודה שבחרת בצבע    ";
                else message.value+="צבע שהוזן אינו תקין                  ";   


}  
}









