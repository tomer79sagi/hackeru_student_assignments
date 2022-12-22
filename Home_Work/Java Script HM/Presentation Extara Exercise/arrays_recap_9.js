function five_of_array() {
  let array1 = [];
  let array2 = [];

  // Input values for the arrays
  for (let i = 0; i < 5; i++) {
    array1[i] = prompt("Enter a number for array1:");
    array2[i] = prompt("Enter a number for array2:");
  }
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (array1[i] === array2[j]) {
        console.log(
          i,
          j
          //   `The value ${array1[i]} is at position ${i} in array1 and position ${j} in array2`
        );
      }
    }
  }
}
