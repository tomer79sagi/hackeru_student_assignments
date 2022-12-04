const elem = {}
for(var i = 0; i <= 6; ++i){
    elem[i] = document.getElementById('elem'+(i+1))
}
let doc = document.getElementById("move-mouse")
let isMoveElement = false
fillTable()



function changeBtn(){
    let doc = document.getElementById("button")
    if(doc.innerHTML == "Off"){
        doc.innerHTML = "On"
        doc.style.backgroundColor = "#00D100"
    } else {
        doc.innerHTML = "Off"
        doc.style.backgroundColor = "#E32227"
    }
}

function fillTable(){
    for(var i = 0; i <= 6;++i){
        elem[i].innerHTML = getLetter()
    }
    
}

function getLetter(){
    var result
    var chars = "abcdefghijklmnopqrstuvwxyz"
    var random = Math.floor(Math.random() * chars.length)
    result = chars.charAt(random)
    return result
}

function setMouseMove(){
    let doc = document.getElementById("move-mouse")
    if(isMoveElement){
        isMoveElement = false
        doc.style.backgroundColor = "#E32227"
    } else {
        isMoveElement = true
        doc.style.backgroundColor = "#00D100"
    }
}



function moveElement(event){
    if(isMoveElement){        
        var x = event.pageX + 'px'
        var y = event.pageY + 'px'
        doc.style.left = x
        doc.style.top = y
        doc.innerHTML = "X: " + x + " | " + "Y: " + y
    } 
}

doc.addEventListener('mousemove',moveElement(x))