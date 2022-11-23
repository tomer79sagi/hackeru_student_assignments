//exercise_2
//    let n1 = prompt("Enter a number");
//    while (isNaN(n1) == true){
//            n1 = prompt("wrong input! Enter a number");  
//    }
//    let n2 = prompt("Enter a number");
//    while (isNaN(n2) == true){
//        n2 = prompt("wrong input! Enter a number");
//    }
//    if (n1 === n2){
//        document.write(n1);
//    }
//    if (n1 < n2){
//        for (let i = n1; i <= n2; i++){
//            document.writeln(i);
//        }    
//    }
//    if (n1 > n2){
//        for (let i = n2; i <= n1; i++){
//            document.writeln(i);
//        }    
//    }

//exercise_3
//    document.write("<br/>");
//    let num = prompt("Enter a number");
//    while (isNaN(num) == true){
//            num = prompt("wrong input! Enter a number");  
//    }
//    for (i = 0; i <= num; i += 2){
//        document.writeln(i);
//    }

//exercise_4
//    document.write("<br/>");
//    num = prompt("Enter a number");
//    while (isNaN(num) == true){
//            num = prompt("wrong input! Enter a number - for num");  
//    }
//    let max = prompt("Enter a number");
//    while (isNaN(max) == true){
//            max = prompt("wrong input! Enter a number - for max");  
//    }
//    for (i = 0; i <= max; i++){
//        if (i % num == 0){
//            document.writeln(i);
//        }
//    }

//exercise_5
//    document.write("<br/>");
//    const num_array = [];
//    i = 0;
//    let n = +prompt("Enter a positive number. In order to finish enter 99");
//    while(n !== 99){
//        if (isNaN(n) === true){
//            n = +prompt("Wrong input! Enter a positive number. In order to finish enter 99");
//        }
//        if (n < 0){
//            n = +prompt("Wrong input! Enter a positive number. In order to finish enter 99");;
//        }
//        num_array[i++] = n;
//        n = +prompt("Enter a positive number. In order to finish enter 99");
//    }
//    for (number of num_array){
//    document.writeln(number);
//    }

//exercise_6+7
//    document.write("<br/>");
//    num_array = [];
//    i = 0;
//    n = +prompt("Enter a positive number. In order to finish enter 99");
//    while(n !== -1){
//        if (isNaN(n) === true){
//            n = +prompt("Wrong input! Enter a positive number. In order to finish enter 99");
//        }
//        if (n < 0){
//            n = +prompt("Wrong input! Enter a positive number. In order to finish enter 99");;
//        }
//        num_array[i++] = n;
//        n = +prompt("Enter a positive number. In order to finish enter 99");
//    }
//    let sum = count = 0;
//    for (number of num_array){
//        document.writeln(number);
//        if (number !== 0){
//            sum += number;
//            count += 1;
//        } 
//    } 
//    document.write("<br/>" + "The average is: " + sum/count);

//exercise_8 
//    i = 0;
//    num_array = [];
//    n = +prompt("Enter a positive number. In order to finish enter 0 or a negative number");
//    max = n;
//    while (n > 0){
//        if(isNaN(n) === true){
//            n = +prompt("Enter a positive number. In order to finish enter 0 or a negative number");
//        }
//        num_array[i++] = n;
//        if (n > max){
//            max = n;
//        }
//        n = +prompt("Enter a positive number. In order to finish enter 0 or a negative number");
//    }
//    for (number of num_array){
//        document.writeln(number);
//    }
//    document.writeln("<br/>" + "The largest number is: " + max);

//exercise_9
//    i = 0;
//    num_array = [];
//    n = +prompt("Enter a positive number. In order to finish enter 0 or a negative number");
//    min = n;
//    while (n > 0){
//        if(isNaN(n) === true){
//            n = +prompt("Enter a positive number. In order to finish enter 0 or a negative number");
//        }
//        num_array[i++] = n;
//        if (n < min){
//            min = n;
//        }
//        n = +prompt("Enter a positive number. In order to finish enter 0 or a negative number");
//    }
//    for (number of num_array){
//        document.writeln(number);
//    }
//    document.writeln("<br/>" + "The smallest number is: " + min);

//exercise_10
//    n = +prompt("Please enter a number");
//    document.writeln(n);
//    max = n;
//    imax = 0;
//    for (i = 1; i <= 9; i++){
//        while (isNaN(n) === true){
//            n = +prompt("Please enter a number");
//        }
//        if (n > max){
//            max = n;
//            imax = i;
//        }
//        document.writeln(n);
//        n = +prompt("Please enter a number");
//    }
//    document.write("<br/>" + "The index of the largest number is: " + imax);

//exercise_11
//    let num = prompt("Please enter a number");
//    while (isNaN(num) === true){
//        num = prompt("Please enter a number");
//    }
//    document.write("The number of digits in the number you entered is: " + num.length);

//exercise_12
//    num = prompt("Please enter a number");
//    count = 0;
//    while (isNaN(num) === true){
//        num = prompt("Wrong input! Please enter a number");
//    }
//    dig = +prompt("Please enter a digit");
//    while (isNaN(dig) === true){
//        dig = +prompt("Wrong input! Please enter a digit");
//    }
//    for (i = 0; i <= num.length; i++){
//        if (num[i] == dig){
//            count++;
//        }
//    }
//    document.write(count);

//exercise_13_return_ string
    //document.write("<br/>");
    //num = prompt("Please enter a number");
    //while (isNaN(num) === true){
    //    num = prompt("Please enter a number");
    //}
    //for(i = num.length - 1; i >= 0; i--){
    //    document.write(num[i]);
    //}








// תרגיל 13_ניסיון להחזרת מספר - לא עובד - לא חובה

    //num = prompt("Please enter a number");
    //let newn = 0;
    //while (isNaN(num) === true){
    //    num = prompt("Wrong input! Please enter a number");
    //}
    //let digits = num.length;
    //let help = 1;
    //for (i = num.length; i >= 0; i--){
    //        while (digits !== 0){
    //            help *= 10;
    //            digits--;
    //        newn += +num[i]*(help);
    //    }
    //}
    //document.write(newn);

//exercise_14
    //document.write("<br/>");
    //let number = prompt("Please enter a number");
    //while (isNaN(number) === true){
    //    number = prompt("Wrong input! Please enter a number");
    //}
    //let i = 0;
    //let j = number.length - 1;
    //let count = 0;
    //    while(number[i] === number[j] && count !== parseInt(number.length/2)){
    //        i++;
    //        j--;
    //        count++;
    //    }
    //    if(count === parseInt(number.length/2)){
    //        document.write("This number is polindrom");
    //    }
    //    else{
    //        document.write("This number isn't polindrom");
    //    }

//exercise_15
    //document.write("<br/>");
    //let strong = 1;
    //n1 = +prompt("Please enter the first number");
    //while (isNaN(n1) === true){
    //    n1 = +prompt("Please enter the first number");
    //}
    //n2 = +prompt("Please enter the second number");
    //while (isNaN(n2) === true){
    //    n2 = +prompt("Please enter the second number");
    //}
    //for(i = 1; i <= n2; i++){
    //    strong *= n1;
    //}
    //document.write(strong);

//exercise_16
    //document.write("<br/>");
    //num = +prompt("Please enter a number");
    //while(isNaN(num) === true){
    //    num = +prompt("Please enter a number");
    //}
    //for(i = 0; i <= num; i++){
    //    if(num % i === 0){
    //        document.writeln(i);
    //    }
    //}

//exercise_17
    //document.write("<br/>");
    //n1 = +prompt("Please enter a number");
    //while(isNaN(n1) === true){
    //    n1 = +prompt("Please enter a number");
    //}
    //n2 = +prompt("Please enter a number");
    //while(isNaN(n2) === true){
    //    n2 = +prompt("Please enter a number"); 
    //}
    //if(n1 === n2){
    //    document.write("The max divider is: " + n1);
    //}
    //else if(n1 > n2){
    //    if(n1 % n2 === 0){
    //        document.write(n2);
    //    }
    //    else{
    //        for(i = parseInt(n2/2); i >= 1; i--){
    //            if(n2 % i === 0){
    //                if(n1 % i === 0){
    //                    document.write("The max divider is: " + i);
    //                    i = 0;
    //                }
    //            }
    //        }
    //    }
    //}
    //else{
    //    if(n2 % n1 === 0){
    //        document.write(n2);
    //    }
    //    else{
    //        for(i = parseInt(n1/2); i >= 1; i--){
    //            if(n1 % i === 0){
    //                if(n2 % i === 0){
    //                    document.write("The max divider is: " + i);
    //                    i = 0;
    //                }
    //            }
    //        }
    //    }
    //}

//exercise_18
    //document.write("<br/>");
    //n = +prompt("Please enter a number between 1 to 100");
    //while(isNaN(n) === true || n < 1 || n > 100){
    //    if(isNaN(n) === true){
    //        n = +prompt("Wrong input! Please enter a number between 1 to 100");
    //    }
    //    else if(n < 1){
    //        n = +prompt("Wrong input! Please enter a number between 1 to 100");
    //    }
    //    else{
    //        n = +prompt("Wrong input! Please enter a number between 1 to 100");
    //    }
    //}
    //const array = [];
    //j = 0;
    //let result = 1;
    //for(i = 1; i <= n; i++){
    //    array[j] = i;
    //    j++;
    //}
    //for (number of array){
    //    if(number === n){
    //        document.writeln(number + " " + "=" );    
    //    }
    //    else{
    //        document.writeln(number + "*");
    //    }
    //    result *= number;
    //}
    //document.write(" " + result);

//exercise_19
    //document.write("<br/>");
    //num = +prompt("Please enter a number");
    //while(isNaN(num) === true){
    //    num = +prompt("Please enter a number");
    //}
    //count = 0;
    //for(i = 0; i <= 1000; i++){
    //    if(i % num === 0){
    //        count++;
    //    }
    //}
    //document.write(count);

//exercise_20
    //num = +prompt("Please enter a number between 5 to 15");
    //while(isNaN(num) === true || num < 5 || num > 15){
    //    if(isNaN(num) === true){
    //        num = +prompt("Wrong input! Please enter a number between 5 to 15");
    //    }
    //    if(num < 5){
    //        num = +prompt("Wrong input! Please enter a number between 5 to 15");
    //    }
    //    if(num > 15){
    //        num = +prompt("Wrong input! Please enter a number between 5 to 15");
    //    }
    //}
    //for(i = 1; i <= num; i++){
    //    for(j = 1; j <= num; j++){
    //        document.writeln("*");
    //    }
    //    document.write("<br/>");
    //}

//exercise_21
    //num = +prompt("Please enter a number between 5 to 15");
    //while(isNaN(num) === true || num < 5 || num > 15){
    //    if(isNaN(num) === true){
    //        num = +prompt("Wrong input! Please enter a number between 5 to 15");
    //    }
    //    if(num < 5){
    //        num = +prompt("Wrong input! Please enter a number between 5 to 15");
    //    }
    //    if(num > 15){
    //        num = +prompt("Wrong input! Please enter a number between 5 to 15");
    //    }
    //}
    //for(let i = 1; i <= num; i++){
    //    for(let j = 1; j <= num; j++){
    //        if(i === 1 || j === 1 || i === num || j === num){
    //            document.writeln("*");
    //        }
    //        else{
    //            document.write('&nbsp; &nbsp;');
    //        }
    //    }
    //    document.write("<br/>");
    //} 
    
//exercise_22
    
