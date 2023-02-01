let first_num=0
let second_num=0


let resultof = document.getElementById("result");
let result = 0;
function plus(){
    first_num=parseInt(document.getElementById("first_num").value);
    second_num=parseInt(document.getElementById("second_num").value);
    result=first_num+second_num;
    return resultof.innerHTML = (result);
}
function minus(){
    first_num=parseInt(document.getElementById("first_num").value);
    second_num=parseInt(document.getElementById("second_num").value);
    result=first_num-second_num;
    return resultof.innerHTML = (result);
}
function multiple(){
    first_num=parseInt(document.getElementById("first_num").value);
    second_num=parseInt(document.getElementById("second_num").value);
    result=first_num*second_num;
    return resultof.innerHTML = (result);
}
function divide(){
    first_num=parseInt(document.getElementById("first_num").value);
    second_num=parseInt(document.getElementById("second_num").value);
    result=first_num/second_num;
    return resultof.innerHTML = (result);
}
function moduler(){
    first_num=parseInt(document.getElementById("first_num").value);
    second_num=parseInt(document.getElementById("second_num").value);
    result=first_num%second_num;
    return resultof.innerHTML = (result);
}