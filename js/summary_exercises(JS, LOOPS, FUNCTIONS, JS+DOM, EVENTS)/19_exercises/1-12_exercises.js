const numbers = [88, 12, 102, 66, 1, 13, 5, 10];
document.write("numbers_array: ")
for (n of numbers){
    document.writeln(n);
}
document.writeln("<br/>");

const s_arr = ["cucumber", "tomato", "potato", "onion", "eggplant", "beet", "cabbage"];
document.write("s_arr: ")
for (n of s_arr){
    document.writeln(n);
}
document.writeln("<br/>" + "<br/>");


//exercise_1
function sum(numbers){
    let sum_n = 0;
    for (n of numbers){
        sum_n += n;
    }
    return sum_n;
}

document.write("Exercise_1:  the sum of the numbers is = " + sum(numbers) + "<br/>");

//exercise_2
function average(array){
    return sum(array)/array.length;
}

document.write("Exercise_2:  the average is = " + average(numbers) + "<br/>");

//exercise_3
function add_to_array(arr1, arr2){
    if (arr1.length >= arr2.length){
        let i  = arr1.length;
        let j = 0;
        let count = arr2.length;
        while(count !== 0){
            arr1[i] = arr2[j];
            i++;
            j++;
            count--;
        }
        return arr1;
    }
    else{
        let i  = arr2.length;
        let j = 0;
        let count = arr1.length;
        while(count !== 0){
            arr2[i] = arr1[j];
            i++;
            j++;
            count--;
        }
        return arr2; 
    }
}

let arr1 = [4, 3, 8, 10]
let arr2 = [-340, 529, 1200];
let new_arr = add_to_array(arr1, arr2);
document.write("Exercise_3:  two arrays combined = ");
for (n of new_arr){
    document.writeln(n);
}
document.write("<br/>");

//exercise_4
function longest_string(array){
    let long = 0;
    let help = " ";
    for (s of array){
        if (s.length > long){
            long = s.length;
            help = s;
        }
    }
    return help;
}

document.write("Exercise_4:  the longest string is = " + longest_string(s_arr) + "<br/>");

//exercise_5
function are_equals(arr){
    let flag = true;
    for (let i = 0; i <= arr.length - 2; i++){
            if (arr[i] !== arr[i +1]){
                flag = false;
                i = arr.length;
            }
    }
    return flag;
}

document.write("Exercise_5:  are the items equals? = " + are_equals(numbers) + "<br/>");

//exercise_6
function new_array(n1, n2){
    let new_arr = [];
    let help = 0;
    if (n1 === n2){
        new_arr[0] = n1;
    }
    else if (n1 > n2)
    for (let i = n2; i <= n1; i++){
        new_arr[help] = i;
        help++;
    }
    else{
        for (let i = n1; i <= n2; i++){
            new_arr[help] = i;
            help++;
        }   
    }
    return new_arr
}

const new_a = new_array(3, 25);
document.write("Exercise_6:  create new array = ");
for (n of new_a){
    document.writeln(n);
}
document.write("<br/>");

//exercise_7
function random_item(arr){
    let rnd = Math.floor(Math.random() * arr.length);
    return arr[rnd];
}

document.write("Exercise_7:  random item = " + random_item(numbers) + "<br/>");

//exercise_8
function first_last_item(arr){
    return [arr[0], arr[arr.length - 1]];
}

let help = first_last_item(numbers);
document.write("Exercise_8:  the first item = " + help[0] + "  the the item = " + help[1] + "<br/>");

//exercise_9
function toUpperCase(){
    let new_arr = [];
    let str = prompt("Please enter a string. To end enter 0");
    let i = 0;
    while (str !== "0"){
        new_arr[i] = str;
        i++;
        str = prompt("Please enter a string. To end enter 0");
    }
    for (i = 0; i < new_arr.length; i++){
        new_arr[i] = new_arr[i][0].toUpperCase() + new_arr[i].substring(1);
    }
    return new_arr;
}

help = toUpperCase();
document.write("Exercise_9:  create new array and change to upper case = ");
for (n of help){
    document.writeln(n + ",");
}
document.write("<br/>");

//exercise_10
function longer_than_6(){
    let new_arr = [];
    let str = prompt("Please enter a string. To end enter 0");
    let i = 0;
    while (str !== "0"){
        new_arr[i] = str;
        i++;
        str = prompt("Please enter a string. To end enter 0");
    }
    let arr = [];
    let help = 0;
    for(i = 0; i < new_arr.length; i++){
        if(new_arr[i].length > 6){
            arr[help] = new_arr[i];
            help++;
        }
    }
    return arr;
}

help = longer_than_6();
document.write("Exercise_10:  all strings longer than 6 = ");
for (n of help){
    document.writeln(n + ",");
}
document.write("<br/>");
//exercise_11
function ONOFF(){
    let btn = document.getElementById("btn");
    if(btn.innerHTML === "ON"){
        btn.innerHTML = "OFF";
        btn.style.backgroundColor = "lightcoral";
    }
    else if(btn.innerHTML === "OFF"){
        btn.innerHTML = "ON";
        btn.style.backgroundColor = "lightgreen";
    }
}
//exercise_12
function getBigger(){
    let d_img = document.getElementById("d_img");
    d_img.style.width = (d_img.clientWidth+10) + "px";
    d_img.style.height = (d_img.clientHeight+10) + "px";
}









