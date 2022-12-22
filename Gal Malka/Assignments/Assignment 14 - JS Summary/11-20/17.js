let date1 = document.getElementById("date1")
let date2 = document.getElementById("date2")
let display = document.getElementById("display")

function getDates(cd,sd){
    let dateArray = new Array()
    Start = new Date(cd)
    End = new Date(sd)
    for(Start; Start <= End; Start.setDate(Start.getDate() + 1)){
        dateArray.push(new Date(Start))
    }

    return dateArray
}

function calculate(){
    var dayList = getDates(date1.value,date2.value)
    var list = new Array()
    list.push(dayList.map((v)=>v.toISOString().slice(0,10)).join(" | "))

    display.innerHTML = list
}

function highest(){
    var D1 = date1.value
    var D2 = date2.value
    if(D1 > D2){
        display.innerHTML = D1
    }
    else if(D1 == D2){
        display.innerHTML = "The Dates are Equals"
    } else {
        display.innerHTML = D2
    }
}