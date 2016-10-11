"use strict";

var myNameIs = 'Bob'; // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.
function sayHello(name) {
    console.log("Hello, " + name)
}

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
sayHello(myNameIs);

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.
function isOdd(number) {
    if (number % 2 == 0) {
        console.log(number + " is not odd.")
    } else {
        console.log(number + " is odd.")
    }
}

// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.
isOdd(random);

// EXTRAS
function add (a, b) {
    if((typeof(a) != "number") || (typeof(b) != "number")) {
        console.log("Inputs must be numeric.");
    } else {
        return(a + b);
    }
}

function subtract (a, b) {
    if ((typeof(a) != "number") || (typeof(b) != "number")) {
        console.log("Inputs must be numeric.");
    } else {
        return (a - b);
    }
}

function multiply (a, b) {
    if ((typeof(a) != "number") || (typeof(b) != "number")) {
        console.log("Inputs must be numeric.");
    } else {
        return (a * b);
    }
}

function divide (a, b) {
    if ((typeof(a) != "number") || (typeof(b) != "number")) {
        console.log("Inputs must be numeric.");
    } else if (b == 0) {
        console.log("Divisor must not be zero.")
    } else {
        return (a / b);
    }
}

function square (number) {
    if (typeof(number) != "number") {
        console.log("Input must be numeric.");
    } else {
        return (multiply(number, number));
    }
}

function sumOfSquares(a, b) {
    if ((typeof(a) != "number") || (typeof(b) != "number")) {
        console.log("Inputs must be numeric.");
    } else {
        var sqA = square(a);
        var sqB = square(b);
        return (add(sqA, sqB));
    }
}

console.log(sumOfSquares(190, 18));