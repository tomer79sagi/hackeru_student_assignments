function calculateRemainingTime(date,time){
    let dateparts = String(date).split("-")
    let year = dateparts[0]    
    let month = dateparts[1]
    let day = dateparts[2]

    let timeparts = String(time).split(":")
    let hour = timeparts[0]
    let minute = timeparts[1]

    let newDate = new Date(+year, month- 1, +day, +hour, +minute)
    var today = new Date()
    let diff = newDate - today
    

    let days = Math.floor(diff / 86400000)
    let remainder = diff % 86400000;
    let hours = Math.floor(remainder / 3600000);
    let remainder2 = remainder % 3600000;
    let minutes = Math.round(remainder2 / 60000);
    if(diff < 0){
        days = Math.ceil(diff / 86400000)
        hours = Math.ceil(remainder / 3600000);
    }
    
    let result = days + " Days , " + hours + " Hours , " + minutes + " Minutes"
    return result
}

function checkIfTimeHasPassed(rtime){
    let parts = String(rtime).split(" ")
    let days = parts[0]
    let hours = parts[3]
    let minutes = parts[6]
    if(days < 0 || hours < 0 || minutes < 0 ){
        return true
    }
    return false
}

function pushToSubTask(rtime){
    let parts = String(rtime).split(" ")
    let days = parts[0]

    if(days == 0){
        return true
    } else {
        return false
    }
}

