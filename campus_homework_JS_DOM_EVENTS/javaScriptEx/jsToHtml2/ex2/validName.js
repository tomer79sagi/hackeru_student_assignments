function validName(){
    let promptName = prompt("");
    if(promptName.length === 0){
        document.write("Please Enter Your Name");
    }
    else if(Boolean(promptName.match(/^[a-zA-Z]+$/))){
        alert('The Name Is Valid! : )')

    }
    else{
        alert('The Name Is Not Valid')
    }
}