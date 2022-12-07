const special_symbols = /[ `!@#$%^&*()_+-=[\]{};':"\\|,.<>\/?~1234567890]/;

function validName () {
    let first_name = document.getElementById("first_name").value;
    let result = document.getElementById("result");

    if(special_symbols.test(first_name)) {
        result.innerHTML = "The name is invalid!"
    } 
    else if (first_name == null || first_name == "") {
        result.innerHTML = "Please enter your name: ";
    } 
    else {
        result.innerHTML = "The name you entered is fine!"
    }
}