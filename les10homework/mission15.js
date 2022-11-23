let num = +prompt("Enter the number");

      for (i = 1; i <= num; i++) {
        if (i === num) document.write(i);
        else if (num % i === 0) document.write(i + " ");
      }