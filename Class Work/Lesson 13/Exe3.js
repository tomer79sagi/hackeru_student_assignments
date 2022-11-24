function addName(){
    var Name = prompt('Enter Youre Name', 'Erez Dagan')
    document.getElementById("add_here").innerHTML =
    "<h3>" + Name +"</h3>";

    document.getElementById("button1").innerHTML = "Press Me"
}