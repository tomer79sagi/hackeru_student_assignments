
const averageOfNum = [5, 10, 90, 1];
function average(averageOfNum){
 let sum = 0;
 for(let i = 0; i < averageOfNum.length; i++) {
    sum += averageOfNum[i];
 }
 document.getElementById("divtask2").innerHTML = sum / averageOfNum.length;

}
