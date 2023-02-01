function changeColors(){
    let bgc = document.getElementById("bgc");
    let tc = document.getElementById("tc");
    if(bgc.value == null || bgc.value == ""){
    } else {
        document.body.style.backgroundColor = bgc.value;
    }
    if(tc.value == null || tc.value == ""){
    } else {
        document.body.style.color = tc.value;
    }
}
