const arr1 = [];
const arr2 = [];

for (let i = 0; i < 3; i++) {
  arr1[i] = +prompt("please enter a number");
}
for (let i = 0; i < 3; i++) {
  arr2[i] = +prompt("please enter a number");
}

appendArrays(arr1,arr2);

function appendArrays(arr1,arr2){
let arr3 = arr1.concat(arr2);
    arr3.forEach(element => {
    document.write(element + " ")
});
}
