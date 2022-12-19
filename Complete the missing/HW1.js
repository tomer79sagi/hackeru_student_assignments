
ARRAYS
1.
const myArray = ['h', 'e', 'l', 'l', 'o'];

// first element
console.log(myArray[0]);  // "h"

// second element
console.log(myArray[1]); // "e"

2. 
let dailyActivities = ['eat', 'sleep'];

// add an element at the end
dailyActivities.push('exercise');

console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']

3.
let dailyActivities = ['eat', 'sleep'];

// this will add the new element 'exercise' at the 2 index
dailyActivities[2] = 'exercise';

console.log(dailyActivities); // ['eat', 'sleep', 'exercise']

4. 
let dailyActivities = [ 'eat'];

// this will add the new element 'exercise' at the 3 index
dailyActivities[2] = 'exercise';

console.log(dailyActivities); // ["eat", "sleep", undefined, "exercise"]
5.
let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];
// remove the last element
dailyActivities.pop();
console.log(dailyActivities); // ['work', 'eat', 'sleep']
const removedElement = dailyActivities.pop();

//get removed element
console.log(removedElement); // 'sleep'
console.log(dailyActivities);  // ['work', 'eat']

6.
 const dailyActivities = [ 'eat', 'sleep'];

// this gives the total number of elements in an array
console.log(dailyActivities.length); // 2

7.
var arr = [1, 2, 3, 4];
console.log(arr.length); // 4
arr[20] = 2; 
console.log(arr.length); // 21


FUNCTIONS
8.
// program to print a text
// declaring a function
function greet() {
    console.log("Hello there!");
}

// calling the function
greet();

9.
// program to print the text
// declaring a function
function greet(name) {
    console.log("Hello " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: ");

// calling function
greet(name);

10.
// program to add two numbers using a function
// declaring a function
function add(x,y) {
    console.log(x+y);
}

// calling functions
add(3,4);
add(2,9);

11.
// program to add two numbers
// declaring a function
function add(a, b) {
    return a + b;
}

// take input from the user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

// calling function
let result = add(number1,number2);

// display the result
console.log("The sum is " + result);

CALLBACK FUNCTIONS
12.
// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);

13.
//  program that shows the delay in execution and calling the ‘greet’ function after 2 seconds.
function greet() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000);
sayName('John');

14.
function greet(name) {
  console.log(`Hello, ${name}!`);
}

setTimeout(ala => greet('Jim'), 1000);

15.
function sum(a, b) {
  console.log(a + b)
}

function operation(val1, val2, callback) {
  sum(val1, val2)
}

operation(6, 5, operation)
