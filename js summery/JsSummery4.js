let array1 = ["tal", "yashin", "21", "male"];
function lenghtCheck(array1){
    for (let i = 0; i < array1.length; i++) {
      if (array1[i].length > length) {
        length = array1[i].length;
        longest = array1[i];
      }
    }
    document.getElementById("divtask4").innerHTML = longest;
}






