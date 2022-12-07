function changeColors () {

    let back_color = document.getElementById("back_color");
    let text_color = document.getElementById("text_color");

    if(back_color.value == null || back_color.value == "") {
        alert("Please enter a valid background color!")
    }

    else {
        document.body.style.backgroundColor = back_color.value;
    }

    if (text_color.value == null || text_color.value == "") {
        alert("Please enter a valid text color!")
    }

    else {
        document.body.style.color = text_color.value;
    }
}