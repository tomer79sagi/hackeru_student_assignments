function multiple(){
    let num_1=parseInt(prompt("Put first number"));
    let num_2=parseInt(prompt("Put second number"));
    return alert(num_1*num_2);
}
multiple();

function age_check(){
    let age = parseInt(prompt("How old are you?"));
    if(age>=18){
        alert("You are welcome!");
    } else {
        alert("Please try again after " + (18-age) + " years.");
    }
}
age_check();

function details_check(){
    let fname=prompt("What is your first name?");
    let lname=prompt("What is your last name?");
    let email=prompt("What is your email adress?");
    let num=prompt("What is your phone number?");
    document.write("Your name is " + fname + "&nbsp;" + lname + "<br/> Your email adress is " + email + "<br/> Your phone number is " + num + ".");
}

details_check();