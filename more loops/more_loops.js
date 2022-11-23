/* Ex 2 */
function ordernumber() {
    let num = +prompt("Please eneter a number");
    let num2 = +prompt("Please enter a number");
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num < num2) {
            i = num;
            while (i <= num2) {
                document.write(i);
                i++;
            }
        } else {
            break;
        }
    }
}

/* Ex 3 */
function even() {
    let num = +prompt("Please enter a number");
    for (let i = 1; i < num; i++) {
        if (i % 2 == 0) {
            document.write(i);
        }
    }
}

/* Ex 4 */
function divided() {
    let num = +prompt("Please enter a number");
    let max = +prompt("Please enter a number");

    for (let i = 0; i <= max; i++) {
        if (num % i == 0) {
            document.write(i + " ")
        }
    }
}

/* Ex 5 */
function sum() {
    let sum = 0;
    for (let i = 0; i < 99; i++) {
        let num = +prompt("Please enter positive numbers");
        if (num < 99) {
            sum += num;
        }
        else if (num == 99) {
            document.write(sum);
            break;
        }
        else {
            break;
        }
    }
}

/* Ex 6 */
function printseries() {
    let num = 0;
    let i = 0;
    let count = 0;
    while (i != -1) {
        num = +prompt("Please enter positive numbers");
        if (num != -1) {
            count = num;
            document.write(count + " ");
        }
        i = num;
    }
}

/* Ex 7 */
function average() {
    let count = 0;
    let total = 0;
    let index = 0;
    let i = 0;
    while (i != -1) {
       let num = +prompt("Please enter numbers");
        if (num != -1) {
            count += num;
            index++;
        }else if (num == 0 ){
            continue;
        }
        i = num;
    }
    document.write(total = count / index);
}

/* Ex 8 */
function highest() {
    let bigger = 0;
    let low = 0;
    for (let i = 0; i < 3; i++) {
        let num = +prompt("Please enter numbers");
        if (bigger > num){
            num = bigger;
        }
    }
    document.write(num)
}
