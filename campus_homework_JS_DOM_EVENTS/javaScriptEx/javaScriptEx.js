function ex1(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum

}

//document.write(ex1([30,10,20])); Check

function ex2(array) {
    let avg = 0;
    for (let i = 0; i < array.length; i++) {
        avg += array[i]
    }
    return avg / array.length
}
//document.write(ex2([30,10,20])); Check

function ex3(array1, array2) {
    let newArray = [];
    for (let i = 0; i < array1.length; i++) {
        newArray[i] = array1[i];
    }
    for (let i = 0; i < array2.length; i++) {
        newArray[newArray.length] = array2[i]
    }
    return newArray;
}

//document.write(ex3([30,10,20],[30,10,20,33,242,343,33])) Check

function ex4(array) {
    let check = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i].length > check.length) {
            check = array[i];
        }
    }
    return check;
}

//document.write(ex4(["abcd","ab","abcdef","a","242",""])) Check

function ex5(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] !== array[i + 1]) {
            return false;
        }
    }
    return true;
}

//document.write(ex5([20,20,20])) Check

function ex6(num1, num2) {
    let newArray = [];
    let count = 0;
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        newArray[count] = i;
        count++
    }
    return newArray;
}

//document.write(ex6(10,30)); Check

function ex7(array) {
    return array[Math.floor(Math.random() * array.length)];
}

//document.write(ex7([30,10,20,33,242,343,33])) Check

function ex8(array) {
    return [array[0], array[array.length - 1]];
}

//document.write(ex8([30,10,20,33,242,343,33])) Check

function ex9(array) {
    let changeStr = "";
    for (let i = 0; i < array.length; i++) {
        changeStr = array[i]
        array[i] = changeStr.charAt(0).toUpperCase() + changeStr.slice(1);
    }
}

/*let array = ["yossi","david","nati","revi"] Check
ex9(array);
document.write(array);*/

function ex10(array) {
    const newArray = [];
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 6) {
            newArray[count] = array[i];
            count++;
        }
    }
    return newArray;
}

//document.write(ex10(["123456789","ab","abcdefs","a","242",""])) Check

function ex11() {
    let check = document.getElementById("btn").textContent;
    if (check === "On") {
        document.getElementById("btn").textContent = "Off";
        document.getElementById("btn").style.color = "Red";
        document.getElementById("btn").style.backgroundColor = "black";
        document.getElementById("btn").style.fontSize = "40px"
    }
    else {
        document.getElementById("btn").textContent = "On";
        document.getElementById("btn").style.color = "blue";
        document.getElementById("btn").style.backgroundColor = "White";
        document.getElementById("btn").style.fontSize = "35px"
    }
    console.log(check);
}

function ex12() {
    let myImage = document.querySelector("img[src ='https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg']");
    let check = myImage.clientWidth + 100
    4 + "px"
    myImage.style.width = check;
    /*document.write(check)*/
}

function ex13() { }  // לא עשיתי... לחזור לזה

function ex14() {
    document.addEventListener('mousemove', (e) => {
        let circle = document.getElementById('circle');
        circle.style.left = e.clientX + 'px';
        circle.style.top = e.clientY + 'px';
    })
}

function ex14WhyWorking() {
    //let circle = document.getElementById('circle'); //Why it Doesnt Work Here
    const onMouseMove = (e) => {
        //let circle = document.getElementById('circle');
        circle.style.left = e.clientX + 'px';
        circle.style.top = e.clientY + 'px';
    }
    document.addEventListener('mousemove', onMouseMove);
}


//ex14()
//ex14WhyWorking()

//.............................................................................................


var ex15Count = 0;
function ex15() {
    setInterval(() => {
        let color = ["red", "green", "grey", "orange"]
        document.getElementById("color").style.color = color[ex15Count];
        ex15Count++;
        if (ex15Count >= color.length) {
            ex15Count = 0;
        }

    }, 1000);
}

function ex16() {
    let firstInput = document.getElementById("firstInp").value;
    let secondInput = document.getElementById("secondInp").value;
    document.getElementById("firstInp").value = secondInput;
    document.getElementById("secondInp").value = firstInput;
}

function ex17() {
    //const days31 = ["01", "03", "05", "07", "08", "10", "12"];
    const days30 = ["04", "05", "09", "11"];
    const days28 = "02"

    //           date1 and date2  בדיקת תקינות של 
    let date1 = prompt("Enter Your First Date XX/XX/XXXX (for Example 31/01/2001");
    while (true) {
        while (date1[2] !== '/' || date1[5] !== '/' || date1.length !== 10 || isNaN(parseInt(date1[0])) || isNaN(parseInt(date1[1])) || isNaN(parseInt(date1[3])) || isNaN(parseInt(date1[4])) || isNaN(parseInt(date1[6])) || isNaN(parseInt(date1[7])) || isNaN(parseInt(date1[8])) || isNaN(parseInt(date1[9]))) {
            date1 = prompt("you enter invalid char, Enter Your first Date XX/XX/XXXX (for Example 31/01/2001");
        }
        if (parseInt(date1[0] + date1[1]) > 31 || parseInt(date1[0] + date1[1]) < 1 || parseInt(date1[3] + date1[4]) > 12 || parseInt(date1[3] + date1[4]) < 01) {
            date1 = prompt("You Out Of Scale In Your Date, Enter Your first Date XX/XX/XXXX (for Example 31/01/2001");
        }
        else if (date1[3] + date1[4] === days28) {
            if (date1[0] + date1[1] > 28) {
                date1 = prompt("February has only 28 days, Enter Your first Date XX/XX/XXXX (for Example 31/01/2001");
            }
            else {
                break;
            }
        }
        else if (date1[0] + date1[1] === "31") {
            let valid = true;
            for (let i = 0; i < days30.length; i++) {
                if (days30[i] === date1[3] + date1[4]) {
                    valid = false;
                    date1 = prompt("There Isn't 31 Days In That Month, Enter Your first Date XX/XX/XXXX (for Example 31/01/2001");
                }
            }
            if (valid) {
                break;
            }

        }
        else {
            break;
        }
    }

    let date2 = prompt("Enter Your Second Date XX/XX/XXXX (for Example 31/01/2001");
    while (true) {
        while (date2[2] !== '/' || date2[5] !== '/' || date2.length !== 10 || isNaN(parseInt(date2[0])) || isNaN(parseInt(date2[1])) || isNaN(parseInt(date2[3])) || isNaN(parseInt(date2[4])) || isNaN(parseInt(date2[6])) || isNaN(parseInt(date2[7])) || isNaN(parseInt(date2[8])) || isNaN(parseInt(date2[9]))) {
            date2 = prompt("you enter invalid char, Enter Your Second Date XX/XX/XXXX (for Example 31/01/2001");
        }
        if (parseInt(date2[0] + date2[1]) > 31 || parseInt(date2[0] + date2[1]) < 1 || parseInt(date2[3] + date2[4]) > 12 || parseInt(date2[3] + date2[4]) < 01) {
            date2 = prompt("You Out Of Scale In Your Date, Enter Your first Second XX/XX/XXXX (for Example 31/01/2001");
        }
        else if (date2[3] + date2[4] === days28) {
            if (date2[0] + date2[1] > 28) {
                date2 = prompt("February has only 28 days, Enter Your Second Date XX/XX/XXXX (for Example 31/01/2001");
            }
            else {
                break;
            }
        }
        else if (date2[0] + date2[1] === "31") {
            let valid = true;
            for (let i = 0; i < days30.length; i++) {
                if (days30[i] === date2[3] + date2[4]) {
                    valid = false;
                    date2 = prompt("There Isn't 31 Days In That Month, Enter Your Second Date XX/XX/XXXX (for Example 31/01/2001");
                }
            }
            if (valid) {
                break;
            }

        }
        else {
            break;
        }
    }

    //              בדיקה איזה תאריך גדול יותר
    let bigger = date1;
    let smaller = date2;
    if (+date1.slice(6) !== +date2.slice(6)) {
        if (+date1.slice(6) < +date2.slice(6)) {
            bigger = date2;
            smaller = date1
        }
        else {
            bigger = date1;
            smaller = date2;
        }
    }
    else if (parseInt(date1[3] + date1[4]) !== parseInt(date2[3] + date2[4])) {
        if (parseInt(date1[3] + date1[4]) < parseInt(date2[3] + date2[4])) {
            bigger = date2;
            smaller = date1
        }
        else {
            bigger = date1;
            smaller = date2;
        }
    }
    else if (parseInt(date1[0] + date1[1]) !== parseInt(date2[0] + date2[1])) {
        if (parseInt(date1[0] + date1[1]) < parseInt(date2[0] + date2[1])) {
            bigger = date2;
            smaller = date1
        }
        else {
            bigger = date1;
            smaller = date2;
        }
        console.log("bigger: " + bigger, "smaller: " + smaller)
    }

    //           הצגת התאריכים שביניהם
    while (smaller !== bigger) {
        if (smaller[3] + smaller[4] === days28) {
            for (let i = parseInt(smaller[0] + smaller[1]); i <= 28; i++) {
                if (smaller !== bigger) {
                    if (smaller[0] === '0' && i < 10) {
                        smaller = '0' + i + smaller.slice(2)
                        document.write(smaller + "<br/>");
                    }
                    else {
                        smaller = i + smaller.slice(2)
                        document.write(smaller + "<br/>");
                    }

                }
                else {
                    break;
                }
            }
            if(smaller === bigger){
                break;
            }
            else{      // מעדכן ערכים
                if(smaller[3] + smaller[4] === '12'){
                    smaller = "01/" + "01/" + (parseInt(smaller.slice(6)) + 1);
                }
                else if(smaller[3] + smaller[4] === '09'){
                smaller = "01/" + "10/" + smaller.slice(6);
                }
                else if(smaller[3] === '0'){
                    smaller = "01/" + '0' + (parseInt(smaller[4]) + 1) + '/' + smaller.slice(6);
                }
                else{
                    smaller = "01/" + (parseInt(smaller[3] + smaller[4]) + 1) + '/' + smaller.slice(6);
                }
            }
            console.log("update smaller: " + smaller);
        }

        for (let j = 0; j < days30.length; j++) {
            if (days30[j] === smaller[3] + smaller[4]) {
                for(let i = parseInt(smaller[0] + smaller[1]); i <= 30; i++){
                    if (smaller !== bigger) {
                        if (smaller[0] === '0' && i < 10) {
                            smaller = '0' + i + smaller.slice(2)
                            document.write(smaller + "<br/>");
                        }
                        else {
                            smaller = i + smaller.slice(2)
                            document.write(smaller + "<br/>");
                        }
    
                    }
                    else {
                        break;
                    }
                }
                if(smaller === bigger){
                    break; 
                }
                else{       // מעדכן ערכים
                    if(smaller[3] + smaller[4] === '12'){
                        smaller = "01/" + "01/" + (parseInt(smaller.slice(6)) + 1);
                    }
                    else if(smaller[3] + smaller[4] === '09'){
                    smaller = "01/" + "10/" + smaller.slice(6);
                    }
                    else if(smaller[3] === '0'){
                        smaller = "01/" + '0' + (parseInt(smaller[4]) + 1) + '/' + smaller.slice(6);
                    }
                    else{
                        smaller = "01/" + (parseInt(smaller[3] + smaller[4]) + 1) + '/' + smaller.slice(6);
                    }
                }
                break;
            }

        }
        if(smaller === bigger){
            break; 
        }
        else{
            for(let i = parseInt(smaller[0] + smaller[1]); i <= 31; i++){
                if (smaller !== bigger) {
                    if (smaller[0] === '0' && i < 10) {
                        smaller = '0' + i + smaller.slice(2)
                        document.write(smaller + "<br/>");
                    }
                    else {
                        smaller = i + smaller.slice(2)
                        document.write(smaller + "<br/>");
                    }

                }
                else {
                    break;
                }
            }
            if(smaller === bigger){
                break; 
            }
            else{        // מעדכן ערכים
                if(smaller[3] + smaller[4] === '12'){
                    smaller = "01/" + "01/" + (parseInt(smaller.slice(6)) + 1);
                }
                else if(smaller[3] + smaller[4] === '09'){
                smaller = "01/" + "10/" + smaller.slice(6);
                }
                else if(smaller[3] === '0'){
                    smaller = "01/" + '0' + (parseInt(smaller[4]) + 1) + '/' + smaller.slice(6);
                }
                else{
                    smaller = "01/" + (parseInt(smaller[3] + smaller[4]) + 1) + '/' + smaller.slice(6);
                }
            }
        }
    }
}

function ex18() {
    const days30 = ["04", "05", "09", "11"];
    const days28 = "02"

    //           date1 and date2  בדיקת תקינות של 
    let date1 = prompt("Enter Your First Date XX/XX/XXXX (for Example 31/01/2001");
    while (true) {
        while (date1[2] !== '/' || date1[5] !== '/' || date1.length !== 10 || isNaN(parseInt(date1[0])) || isNaN(parseInt(date1[1])) || isNaN(parseInt(date1[3])) || isNaN(parseInt(date1[4])) || isNaN(parseInt(date1[6])) || isNaN(parseInt(date1[7])) || isNaN(parseInt(date1[8])) || isNaN(parseInt(date1[9]))) {
            date1 = prompt("you enter invalid char, Enter Your first Date XX/XX/XXXX (for Example 31/01/2001");
        }
        if (parseInt(date1[0] + date1[1]) > 31 || parseInt(date1[0] + date1[1]) < 1 || parseInt(date1[3] + date1[4]) > 12 || parseInt(date1[3] + date1[4]) < 01) {
            date1 = prompt("You Out Of Scale In Your Date, Enter Your first Date XX/XX/XXXX (for Example 31/01/2001");
        }
        else if (date1[3] + date1[4] === days28) {
            if (date1[0] + date1[1] > 28) {
                date1 = prompt("February has only 28 days, Enter Your first Date XX/XX/XXXX (for Example 31/01/2001");
            }
            else {
                break;
            }
        }
        else if (date1[0] + date1[1] === "31") {
            let valid = true;
            for (let i = 0; i < days30.length; i++) {
                if (days30[i] === date1[3] + date1[4]) {
                    valid = false;
                    date1 = prompt("There Isn't 31 Days In That Month, Enter Your first Date XX/XX/XXXX (for Example 31/01/2001");
                }
            }
            if (valid) {
                break;
            }

        }
        else {
            break;
        }
    }

    let date2 = prompt("Enter Your Second Date XX/XX/XXXX (for Example 31/01/2001");
    while (true) {
        while (date2[2] !== '/' || date2[5] !== '/' || date2.length !== 10 || isNaN(parseInt(date2[0])) || isNaN(parseInt(date2[1])) || isNaN(parseInt(date2[3])) || isNaN(parseInt(date2[4])) || isNaN(parseInt(date2[6])) || isNaN(parseInt(date2[7])) || isNaN(parseInt(date2[8])) || isNaN(parseInt(date2[9]))) {
            date2 = prompt("you enter invalid char, Enter Your first Date XX/XX/XXXX (for Example 31/01/2001");
        }
        if (parseInt(date2[0] + date2[1]) > 31 || parseInt(date2[0] + date2[1]) < 1 || parseInt(date2[3] + date2[4]) > 12 || parseInt(date2[3] + date2[4]) < 01) {
            date2 = prompt("You Out Of Scale In Your Date, Enter Your first Date XX/XX/XXXX (for Example 31/01/2001");
        }
        else if (date2[3] + date2[4] === days28) {
            if (date2[0] + date2[1] > 28) {
                date2 = prompt("February has only 28 days, Enter Your first Date XX/XX/XXXX (for Example 31/01/2001");
            }
            else {
                break;
            }
        }
        else if (date2[0] + date2[1] === "31") {
            let valid = true;
            for (let i = 0; i < days30.length; i++) {
                if (days30[i] === date2[3] + date2[4]) {
                    valid = false;
                    date2 = prompt("There Isn't 31 Days In That Month, Enter Your first Date XX/XX/XXXX (for Example 31/01/2001");
                }
            }
            if (valid) {
                break;
            }

        }
        else {
            break;
        }
    }

    if (+date1.slice(6) > +date2.slice(6)) {
        alert("date 1:(" + date1 + ") is bigger then" + " date 2:" + date2);
    }
    else if (+date1.slice(6) < +date2.slice(6)) {
        alert("date 2:(" + date2 + ") is bigger then" + " date 1:" + date1);
    }
    else if (parseInt(date1[3] + date1[4]) > parseInt(date2[3] + date2[4])) {
        alert("date 1:(" + date1 + ") is bigger then" + " date 2:" + date2);
    }
    else if (parseInt(date1[3] + date1[4]) < parseInt(date2[3] + date2[4])) {
        alert("date 2:(" + date2 + ") is bigger then" + " date 1:" + date1);
    }
    else if (parseInt(date1[0] + date1[1]) > parseInt(date2[0] + date2[1])) {
        alert("date 1:(" + date1 + ") is bigger then" + " date 2:" + date2);
    }
    else if (parseInt(date1[0] + date1[1]) < parseInt(date2[0] + date2[1])) {
        alert("date 2:(" + date2 + ") is bigger then" + " date 1:" + date1);
    }
}//

