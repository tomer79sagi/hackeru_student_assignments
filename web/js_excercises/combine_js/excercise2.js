const special_symbols = /[ `!@#$%^&*()_+-=[\]{};':"\\|,.<>\/?~1234567890]/;

function check_name(){
    let fname = document.getElementById("fname").value;
    let message = document.getElementById("message");
    if(special_symbols.test(fname)){
        message.innerHTML = "Name is wrong!"
    } else if (fname == null || fname == ""){
        message.innerHTML = "Please write your name";
    } else {
        message.innerHTML = "Name is fine"
    }
}

