function check () {
let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let email = document.getElementById("email");
let fav_color = document.getElementById("fav_color").value;
const name_symbols = /[ `!@#$%^&*()_+-=[\]{};':"\\|,.<>\/?~1234567890]/;


    if(name_symbols.test(fname)) {
        alert("The first name is invalid!")
        return
    }

    else if (fname == null || fname == "") {
        alert("Please enter your first name!")
        return
    } 

    if(name_symbols.test(lname)) {
         alert("The last name is invalid!")
        return
    }

    else if (lname == null || lname == "") {
        alert("Please enter your last name!")
        return
    } 

    if(email.validity.typeMismatch) {
        alert("The email is invalid!")
        return
    }

    else if (email.value == null || email.value == "") {
        alert("Please enter your email!")
        return
    } 

    if (fav_color == "red") {
        alert("צבע חם");
        return
    }

    else if (fav_color == "blue") {
        alert("צבע קר");
    }
    else if (fav_color == "none") {
        alert("?מה קרה לא בחרת צבע");
    }

    else if (fav_color == "white" || fav_color == "black" || fav_color == "orange" || fav_color == "yellow" || fav_color == "green" || fav_color == "cyan") {
        alert("תודה שבחרת צבע");
    }
}

















































// for(let i = 0; i < input.length; i++) {

//     input[i].addEventListener('invalid', function (event) {
//         if (event.target.validity.valueMissing) {
//         event.target.setCustomValidity('You have to fill this blank to continue!');
//     }
// })
// }

// fav_color.addEventListener('invalid', function (event) {
//     if (event.target.validity.valueMissing) {
//         event.target.setCustomValidity('You have to choose color to continue!');
//     } else {
//         event.target.setCustomValidity("");
//     }
// });

// fname.addEventListener("change", function(){
//     if(special_symbols.test(fname.value)){
//         fname.setCustomValidity("Name is wrong!");
//     } else {
//         fname.setCustomValidity("");
//     }
// });

// lname.addEventListener("change", function(){
//     if(special_symbols.test(lname.value)){
//         lname.setCustomValidity("Name is wrong!");
//     } else {
//         lname.setCustomValidity("");
//     }
// });


// email.addEventListener("change", function () {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I expect an e-mail with '@'");
//   } else {
//     email.setCustomValidity("");
//   }
// });





// fav_color.onchange = (event) => {
//     if(fav_color.value == "black" || fav_color.value == "blue" || fav_color.value == "purple"){
//         fav_color.style.backgroundColor = event.target.value;    
//         fav_color.style.color = "white";
//     } else if(fav_color.value == "other"){
//         fav_color.style.backgroundColor = "lightgray";
//         fav_color.style.color = "black";
//     } else {
//         fav_color.style.background = event.target.value;
//         fav_color.style.color = "black";
//     }

//     if(fav_color.value == "red"){
//         span.innerHTML = "<br/>This color is hot!<br/>"
//         span.style.backgroundColor = "red";
//         span.style.color = "black";
//     } else if (fav_color.value == "blue"){
//         span.innerHTML = "<br/>This color is cold!<br/>"
//         span.style.color = "white";
//         span.style.backgroundColor = "blue";
//     } else if (fav_color.value == ""){
//         span.innerHTML = "<br/>";
//     } else {
//         span.innerHTML = "<br/>Thank you for choosing color!<br/>"
//         span.style.backgroundColor = "white";
//         span.style.color = "black";
//     }
// }


