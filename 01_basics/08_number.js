//? Javascript number ------------------------------------------------------------------->

// let's go to learn javascript numbers methods: Basic Number Methods, Number Checking Methods, Conversion Methods, Global Constants

// number methods:

/**
 * let's see basic number methods:
 * 01. toString()
 * 02. toFixed(digits)
 * 03. toExponential(digits)
 * 04. toPrecision(digits)
 * 05. valueOf()
*/

// let's declare a variable:
const num1 = 123;
const num2 = 23.20457;
const num3 = 9.99;
const num4 = new Number(1200);

// toString():
console.log(num1.toString()); // output: "123" (Converts number to a string)

// toFixed():
console.log(num2.toFixed(2)); // output: "23.20" (Formats number with fixed decimals)

// toExponential():
console.log(num3.toExponential(2)); // output: "9.99e+0" (Converts to exponential notation)

// toPrecision():
console.log(num2.toPrecision(8)); // output: "23.204570" (Formats to specific length)
console.log(num1.toPrecision(2)); // output: "1.2e+2"
console.log(num3.toPrecision(2)); // output: "10"
console.log(num2.toPrecision(5)); // output: "23.205"

// valueOf():
console.log(num4); // output: [Number: 1200]
console.log(num4.valueOf()); // output: 1200 (Returns primitive value of number object)


/**
 * let's see number checking methods:
 * 01. Number.isFinite(value)
 * 02. Number.isInteger(value)
 * 03. Number.isNaN(value)
 * 04. Number.isSafeInteger(value)
*/

// let's declare a variable:
const num5 = 1450;
const num6 = 25.36;
const num7 = -50;
const num8 = 10 / 2;
const num9 = 5 / 5;
const num10 = 0 * 10;

// Number.isFinite(value):
console.log(Number.isFinite(num5)); // output: true; (Checks if value is a finite number)
console.log(Number.isFinite(num6)); // output: true;
console.log(Number.isFinite(num7)); // output: true;
console.log(Number.isFinite(num8)); // output: true;
console.log(Number.isFinite(num9)); // output: true;
console.log(Number.isFinite(num10)); // output: true;

// note: those value are false in Number.isFinite()
console.log(Number.isFinite(Infinity)); // output: false
console.log(Number.isFinite(-Infinity)); // output: false
console.log(Number.isFinite(NaN)); // output: false
console.log(Number.isFinite("100")); // output: false

// Number.isInteger(value):
console.log(Number.isInteger(num5)); // output: true (Checks if value is an integer)
console.log(Number.isInteger(num6)); // output: false
console.log(Number.isInteger(num7)); // output: true
console.log(Number.isInteger("100")); // output: false

// Number.isNaN(value):
console.log(Number.isNaN(num5)); // output: false (Checks if value is NaN)
console.log(Number.isNaN("15dfa")); // output: false
console.log(Number.isNaN("dfdf444")); // output: false
console.log(Number.isNaN(NaN)); // output: true
console.log(Number.isNaN("abd")); // output: false
console.log(Number.isNaN(Number("145dfa"))); // output: true
console.log(isNaN(true)); // output: false
console.log(isNaN(Number("545dfdf"))); // output: true

// Number.isSafeInteger(value):
console.log(Number.isSafeInteger(num5)); // output: true (Checks if it's a safe integer)
console.log(Number.isSafeInteger(num6)); // output: false
console.log(Number.isSafeInteger(744444444444444)); // output: true
console.log(Number.isSafeInteger(4785474681494651984n)); // output: false
console.log(Number.isSafeInteger("7445454")); // output: false  


/**
 * let's see conversion methods:
 * 01. Number()
 * 02. parseInt(string)
 * 03. parseFloat(string)
*/

// let's declare a variable:
const num11 = 1580;
const num12 = "4582";

// Number():
console.log(Number(num12)); // output: 4582 (Converts value to number)

// parseInt(string):
console.log(parseInt(num12)); // output: 4582 (Parses and returns an integer)

// parseFloat(string):
console.log(parseFloat(num12)); // output: 4582 (Parses and returns a float)
console.log(parseFloat("10.25kg")); // output: 10.25


/**
 * let's see global constants methods:
 * 01. Number.MAX_VALUE
 * 02. Number.MIN_VALUE
 * 03. Number.POSITIVE_INFINITY
 * 04. Number.NEGATIVE_INFINITY
 * 05. Number.NaN
 * 06. Number.EPSILON
*/

// Number.MAX_VALUE
console.log(Number.MAX_VALUE); // output: 1.7976931348623157e+308 (Largest possible number)

// Number.MIN_VALUE
console.log(Number.MIN_VALUE); // output: 5e-324 (Smallest possible number)

// Number.POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY); // output: Infinity (Infinity)

// Number.NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY); // output: -Infinity (-Infinity)

// Number.NaN
console.log(Number.NaN); // output: NaN (Not-a-Number)

// Number.EPSILON
console.log(Number.EPSILON); // output: 2.220446049250313e-16 (Smallest difference between 1 and the next representable number)