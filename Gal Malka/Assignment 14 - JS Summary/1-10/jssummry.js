const numbers = [88, 12, 102, 66, 1, 13, 5, 10];
const numbers2 = [0,2,5,6,8,10]
const numbers3 = [1,1,1]
const textArray = ["Hello","Bye","Goodbye","ILoveIsrael"]
const vegetables = ["cucumber", "tomato", "potato", "onion", "eggplant", "beet",
"cabbage"];

var alreadyRan = false

function run(){
        let doc =  document.getElementById("a05")
        let doc2 =  document.getElementById("a05_2")
        let doc3 =  document.getElementById("a08")

    if(!alreadyRan){
        sumArray(numbers)
        avgArray(numbers)
        mergeArray(numbers,numbers2)
        highestArray(textArray)
        doc.innerHTML = "Arr equal: " + arrEqual(numbers)
        doc2.innerHTML = "Arr equal (example 2): " + arrEqual(numbers3)
        createBetweenArray(5,15)
        randArray(numbers)
        doc3.innerHTML = "First: " + firstNLast(numbers).first + " , " + "Last: " + firstNLast(numbers).last + " //Last is 0 beacuse of MergeArray()"
        toUppercaseArray(vegetables)
        onlyAboveSix(vegetables)
    } else {
        alert("Dont run again....")
    }
    alreadyRan = true
    
}

function sumArray(array){
    let doc = document.getElementById("a01")
    var sum = 0
    for(var i = 0; i < array.length; ++i){
        sum += array[i]
    }
    doc.innerHTML = "Sum: " + sum
}

function avgArray(array){
    let doc = document.getElementById("a02")
    let avg = 0
    for(var i =0;i < array.length; ++i){
        avg += array[i]
    }
    avg = (avg) / (array.length)
    doc.innerHTML = "Avg: " + avg
}

function mergeArray(array1,array2){
    let doc = document.getElementById("a03")
    let len = array2.length
    for(var i = 0;i < len; ++i){
        array1.push(array2.pop())
    }
    
    doc.innerHTML = "Arr: " + array1
}

function highestArray(array){
    let doc =  document.getElementById("a04")
    let highest = 0
    let highestStr = array[0]
    for(var i = 1 ; i < array.length; ++i){
        if(array[i].length > highestStr.length){
            highestStr = array[i]
        }
    }
    
    doc.innerHTML = "Str Arr: " + highestStr
}

function arrEqual(array){
    
    for(var i = 0;i < array.length - 1; ++i){
        if(array[i] == array[i+1]){
            continue
        } else {
            return false
        }
    }

    return true
}

function createBetweenArray(num1,num2){
    let doc = document.getElementById("a06")
    let tempArr = []
    for(num1; num1 < (num2 - 1); ++num1){
        tempArr.push(num1+1)
    }

    doc.innerHTML = "Between Arr: " + tempArr
}

function randArray(array){
    let doc = document.getElementById("a07")
    let randomIndex = Math.floor(Math.random() * array.length)
    doc.innerHTML = "Random Arr:" + array[randomIndex]
}

function firstNLast(array){
    //Last is 0 beacuse of mergeArray()
    var obj = {
        first: array[0],
        last: array[(array.length - 1)]
    }
    return obj
}

function toUppercaseArray(array){
    let doc = document.getElementById("a09")
    for(let i = 0; i < array.length; ++i){
        array[i] = array[i][0].toUpperCase() + array[i].substr(1)
    }

    doc.innerHTML = "ToUpperCase: " + array
}

function onlyAboveSix(array){
    let doc = document.getElementById("a10")
    let temparr = []
    for(var i = 0 ; i < array.length; ++i){
        if(array[i].length >= 6){
            temparr.push(array[i])
        }
    }

    doc.innerHTML = "Only Above Six: " + temparr
}
