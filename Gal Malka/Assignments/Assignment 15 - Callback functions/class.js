function start(){
    setInterval(function(){
        let clock = document.getElementById("clock")
        let date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        if(seconds < 10){
            seconds = "0" + seconds
        }
        if(minutes < 10){
            minutes = "0" + minutes
        }
        if(hours < 10){
            hours = "0" + hours
        }
        let current = hours + ":" + minutes + ":" + seconds
        clock.innerHTML = current 
    },1000)
    setTimeout(createDiv,2000)
}


function createDiv(){
    let newDiv = document.createElement('div')
    let container = document.getElementById('container')
    container.appendChild(newDiv)
    newDiv.innerHTML = "Delayed"
}


function startClock(){
    let clock = document.getElementById("clock")
    let date = new Date() 
    clock.innerHTML = displayClock(date)
}


function displayClock(date){
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    if(seconds < 10){
        seconds = "0" + seconds
    }
    if(minutes < 10){
        minutes = "0" + minutes
    }
    if(hours < 10){
        hours = "0" + hours
    }
    let current = hours + ":" + minutes + ":" + seconds
    return current
}