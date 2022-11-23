let num = +prompt("Enter the number");
      let num_2 = +prompt("Enter the number to power");
      let result = num;
      for (i = 0; i < num_2 - 1; i++) {
        result *= num;
      }
      document.write(result);