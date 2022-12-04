function picturing(){
  let img=document.getElementById("mage");
  let picname=document.getElementById("nameofpic");


  if(picname.value=="לברון גיימס"){
  img.src="הורדהלברון.jfif";
  }
  else if(picname.value=="מייקל גורדן"){
    img.src="מייקלגורדן.jfif";
    }
      else if(picname.value=="לוקה דונציץ"){
      img.src="לוקה.jfif";
      }
        else if(picname.value=="דני אבדיה"){
        img.src="דניאבדיה.jfif";
        }
          else if(picname.value=="גיימס הארדן"){
          img.src="גיימסהארדן.jfif";
          }
          else alert("לא נבחרה תמונה!");




}
