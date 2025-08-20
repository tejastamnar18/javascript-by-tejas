const score = 400
//console.log(score); // 400

const balance = new Number(100)
//console.log(balance); // [Number: 100]

//consol.log(balance.toString().length); // 3

//console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.456789;
//console.log(otherNumber.toPrecision(5)); // 123.46

const hundreds = 100000000
//console.log(hundreds.toLocaleString(en-IN)); // 10,00,00,000

// ++++++++++++++++++++++ Maths +++++++++++++++++++++//

//console.log(Math)// Math object provides mathematical constants and functions

console.log(Math.abs(-5)); // 5

console.log(Math.round(4.7)); // 5

console.log(Math.ceil(4.1)); // 5

console.log(Math.floor(4.9)); // 4

console.log(Math.max(1, 2, 3, 4, 5)); // 5

console.log(Math.min(1, 2, 3, 4, 5)); // 1

console.log(Math.random()); // Random number between 0 and 1

console.log((Math.random() * 10)+1); // Random number between 1 and 11

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random number between 10 and 20

console.log(Math.sqrt(16)); // 4


// Notes
// JavaScript provides a Number object for working with numbers
// Numbers can be created using literals or the Number constructor
// The Number object has methods for converting numbers to strings, formatting, and precision
