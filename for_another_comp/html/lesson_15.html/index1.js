function createDiv(){
    let fname = prompt("What is your name?");
    let newDiv =  document.createElement("div");
    newDiv.innerHTML = fname;
    document.body.appendChild(newDiv);
}

//setTimeout(createDiv, 2000);      

// setTimeout(function(){
//     let fname = prompt("What is your name?");
//     let newDiv =  document.createElement("div");
//     newDiv.innerHTML = fname;
//     document.body.appendChild(newDiv);
// }, 2000);

setTimeout(() => {
    let fname = prompt("What is your name?");
    let newDiv =  document.createElement("div");
    newDiv.innerHTML = fname;
    document.body.appendChild(newDiv);
},2000);