const num = +prompt("enter a number bigger then 0");

for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
        document.writeln(i);
    }
}