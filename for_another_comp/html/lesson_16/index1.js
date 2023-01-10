let div = document.querySelector('div');
function studentsNames(){
    let arrNames = [];
        for(let i=0; i<5; i++){
        arrNames.push(prompt("Write students name please!"));
    }
    return arrNames;
}

function writeNames(arr){
    div.textContent = "";
    for(let i=0; i<arr.length; i++){
        div.textContent += arr[i] + " #" + i + " "
    }
}

writeNames(studentsNames());