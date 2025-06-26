//? Javascript Math ------------------------------------------------------------------->

// let's go to learn javascript math methods and math property: Common Math Methods, Trigonometric Methods, Logarithmic / Exponential, Constants

// Math Methods:

/**
 * let's see common math methods:
 * 01. Math.abs(value)
 * 02. Math.ceil(value)
 * 03. Math.floor(value)
 * 04. Math.round(value)
 * 05. Math.trunc(value)
 * 06. Math.max(a, b, ...)
 * 07. Math.min(a, b, ...)
 * 08. Math.pow(base, exp)
 * 09. Math.sqrt(value)
 * 10. Math.cbrt(value)
 * 11. Math.random()
 * 12. Math.sign(value)
 * 13. Math.hypot(x, y, ...)
*/

// let's declare a variable:
const num1 = 10;
const num2 = "10";
const num3 = -10;
const num4 = "-10";
const num5 = 4.5752;
const num6 = "4.5752";
const num7 = -4.5752;
const num8 = "-4.5752";

// Math.abs(value):
console.log(Math.abs()); // output: NaN
console.log(Math.abs(num3)); // output: 10
console.log(Math.abs(num2)); // output: 10
console.log(Math.abs(num4)); // output: 10

// note: it's return absolute value. if you give the negative value it will be return the positive value;

// Math.ceil(value):
console.log(Math.ceil()); // output: NaN
console.log(Math.ceil(num5)); // output: 5
console.log(Math.ceil(num6)); // output: 5
console.log(Math.ceil(num7)); // output: -4
console.log(Math.ceil(num8)); // output: -4

// note: it's round ups the value. if you give any decimal number it round up to nearest value and if you give any decimal negative number it's round up toward 0;

// Math.floor(value):
console.log(Math.floor()); // output: NaN
console.log(Math.floor(num5)); // output: 4
console.log(Math.floor(num6)); // output: 4
console.log(Math.floor(num7)); // output: -5
console.log(Math.floor(num8)); // output: -5

// note: it's round down the value. if you give any decimal number it is round down to nearest value and if you give any decimal negative number it's round down farther from 0;

// Math.round(value):
console.log(Math.round()); // output: NaN
console.log(Math.round(num5)); // output: 5
console.log(Math.round(num6)); // output: 5
console.log(Math.round(num7)); // output: -5
console.log(Math.round(num8)); // output: -5

// note: it's round the value. if you give any decimal number it is round to nearest value and if you give any decimal negative number it's round to nearest value. it's don't care about negative value;

// Math.trunc(value):
console.log(Math.trunc()); // output: NaN
console.log(Math.trunc(num5)); // output: 4
console.log(Math.trunc(num6)); // output: 4
console.log(Math.trunc(num7)); // output: -4
console.log(Math.trunc(num8)); // output: -4

// note: it's removed the decimal value. if you give any decimal number it is removed the decimal number and give the integer. it's don't care about the negative value;

// Math.max(a, b, ....):
console.log(Math.max()); // output: -Infinity
console.log(Math.max(14, 2, 5)); // output: 14
console.log(Math.max(4, 5, 0)); // output: 5
console.log(Math.max("5", "10", "20")); // output: 20
console.log(Math.max("10", 50, "10")); // output: 50

// note: it's return the maximum number of argument. if you don't provides any argument it will be return the -Infinity. because it's start with the smallest possible value and it's return (-Infinity) by default;

// Math.min(a, b, ....):
console.log(Math.min()); // output: Infinity
console.log(Math.min(14, 2, 5)); // output: 2
console.log(Math.min(4, 5, 0)); // output: 0
console.log(Math.min("54", "25", "10")); // output: 10
console.log(Math.min("10", 40, "40")); // output: 10

// note: it's return the minimum number of argument. if you don't provides any argument it will be return the (Infinity). because it's return (Infinity) by default;

// Math.pow(base, exp):
console.log(Math.pow()); // output: NaN
console.log(Math.pow(4, 2)); // output: 16
console.log(Math.pow("5", 2)); // output 25
console.log(Math.pow("5", "2")); // output: 25
console.log(Math.pow("7.2", "2")); // output: 51.48
console.log(Math.pow(8, "2")); // output: 64

// note: it's return the power of number. if you don't provide any argument it will be return NaN (Not a Number);

// Math.sqrt(value):
console.log(Math.sqrt()); // output: NaN
console.log(Math.sqrt(4)); // output: 2
console.log(Math.sqrt("9")); // output: 3

// note: it's return the square root of number. if you don't provide any argument it will be return NaN (Not a Number);

// Math.cbrt(value):
console.log(Math.cbrt()); // output: NaN
console.log(Math.cbrt(27)); // output: 3
console.log(Math.cbrt("512")); // output: 8

// note: it's return the cube root of number. if you don't provide any argument it will be return NaN (Not a Number);

// Math.random():
console.log(Math.random()); // output: 0.13631983520848223

// note: it's return the random number. it's does not take any arguments — it always returns a floating-point number between 0 to 1;

// Math.sign(value);
console.log(Math.sign()); // output: NaN
console.log(Math.sign(-10)); // output: -1
console.log(Math.sign(10)); // output: 1
console.log(Math.sign(0)); // output: 0
console.log(Math.sign("12")); // output: 1
console.log(Math.sign("-12")); // output: -1

// note: it's return the sign value. if you provide the negative value it's return -1, if you provide positive value it's return 1, if you provide zero it's return 0, and if you don't provide any argument it's return NaN (Not a Number);

// Math.hypot(a, b, ....)
console.log(Math.hypot()); // output: 0
console.log(Math.hypot(4, 2)); // output: 4.47213595499958
console.log(Math.hypot("4", 5)); // output: 6.4031242374328485
console.log(Math.hypot("8", "4")); // output: 8.94427190999916

// note: it's return square root of the sum of squares.