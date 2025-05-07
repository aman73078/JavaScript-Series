// JavaScript Math Object 
//  The Math Object allows us to perform mathematical operations on the numbers.
//  Math Object has no constructor and math object is static.

// 1.  Math.round(x) -> It returns the nearest integer of the given number (x).
let num1 = Math.round(5.6);
let num2 = Math.round(5.2);
console.log(`num1 : ${num1}, num2 : ${num2}\n`);

// 2.  Math.ceil(x) -> It returns the value of given number (x) rounded up to its nearest integer.
let num3 = Math.ceil(3.2);
let num4 = Math.ceil(3.8);
console.log(`num3 : ${num3}, num4 : ${num4}\n`);

// 3.   Math.floor(x) -> It returns the value of the given number (x) rounded down to its nearest integer.
let num5 = Math.floor(7.2);
let num6 = Math.floor(7.7);
console.log(`num5 : ${num5}, num6 : ${num6}\n`);

// 4.   Math.trunc(x) -> It returns the integer part of the given number (x).
let num7 = Math.trunc(8.3);
let num8 = Math.trunc(8.8);
console.log(`num7 : ${num7}, num8 : ${num8}\n`);

// 5.   Math.sign(x) -> It returns if x is positive, negative or null.
let num9 = Math.sign(8.5);
let num10 = Math.sign(-8.5);
let num11 = Math.sign(null);
console.log(`num9 : ${num9}, num10 : ${num10}, num11 : ${num11}\n`);

// 6.   Math.pow(x,y) -> It returns the value of x to the power of y.
let num12 = Math.pow(2,3);
let num13 = Math.pow(3,3);
console.log(`num12 : ${num12}, num13 : ${num13}\n`);

// 7.   Math.abs(x) -> It returns the absolute (positive) value of x.
let num14 = Math.abs(-13.5);
let num15 = Math.abs(13.5);
console.log(`num14 : ${num14}, num15 : ${num15}\n`);

// 8.   Math.min() and Math.max() -> Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments.
let lowestNum = Math.min(2,25,-14,0,100,-129);
let highestNum = Math.max(33,-45,0,97,-500,20);
console.log(`lowestNum : ${lowestNum}, highestNum : ${highestNum}\n`);

// 9.   Math.random() -> It returns a random number between 0 (inclusive) and 1(exclusive).
let randomNum = Math.random();
console.log(`randomNum : ${randomNum}\n`);
