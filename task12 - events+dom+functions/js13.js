const alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function fillTable() {

  let cells = document.querySelectorAll("td");

    for(i = 0 ; i< cells.length ; i++){
      cells[i].innerHTML =alphabet[Math.floor(Math.random() * (alphabet.length-1))] ;
    }
  


}
