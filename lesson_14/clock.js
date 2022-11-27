function realTime(){
    const d = new Date();
    let hours = addZero(d.getHours());
    let minutes = addZero(d.getMinutes());
    let seconds = addZero(d.getSeconds());
    document.getElementById("clock").innerText = hours + ":" + minutes + ":" + seconds;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

setInterval(realTime, 1000);