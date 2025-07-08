//? javascript control flow ------------------------------------------------------------------->

// let's go to learn javascript control flow:

/**
 * let's see conditional (if-else):
 * 01. if
 * 02. if-else
 * 03. if-else-if
 * 04. if-else-if-else
 * 05. if-else shorthand
*/

// conditional (if) syntax:
/**
 * if (condition) {
 *     write code here;
 * }
*/

// conditional (if-else) syntax:
/**
 * if (condition) {
 *      write code here:
 * } else {
 *      write code here:
 * }
*/

// conditional (if-else-if) syntax:
/**
 * if (condition) {
 *      write code here;
 * } else if (condition) {
 *      write code here;
 * }
*/

// conditional (if-else-if-else) syntax:
/**
 * if (condition) {
 *      write code here:
 * } else if (condition) {
 *      write code here:
 * } else {
 *      write code here:
 * }
*/

// conditional (if-else shorthand) syntax:
/**
 * if (condition) write code here;
*/ 

// first of all we need to comparison operators: "<", ">", "<=", ">=", "==", "!=", "===", "!==", "&&", "||"

// let's declare a variables:
const num1 = 10;
const num2 = 20;

// conditional (if):
if (num1 < num2) {
    console.log("true");
};

if (num1 > num2) {
    console.log("false");
};

// note: when the condition is true than "if" blocks are working and print the "if" blocks code. and when the condition is false than "if" blocks are not working and not print the "if" blocks code.

// let's declare a variables:
const num3 = 30;
const num4 = 30;

// conditional (if-else):
if (num3 >= num4) {
    console.log("true");
} else {
    console.log("false");
};
// output: true; (if block is working)

if (num3 <= num4) {
    console.log("true");
} else {
    console.log("false");
};
// output: true; (if block is working)

if (num3 == num4) {
    console.log("true");
} else {
    console.log("false");
};
// output: true; (if block is working)

if (num3 != num4) {
    console.log("true");
} else {
    console.log("false");
};
// output: false; (if block is not working. else block is working)

// let's declare a variables:
const num5 = 50;
const num6 = "50";

// conditional (if-else-if):
if (num5 === num6) {
    console.log("true");
} else if (num5 !== num6) {
    console.log("true");
} else {
    console.log("false");
};
// output: true; (if block is not working. else-if block is working)

// let's declare a variables:
const username = "Rakibul Rahman";
const isLoggedIn = true;

const userName = "Ensiya Rahman";
const isSignIn = false;

// conditional (if-else):
if (username && isLoggedIn) {
    console.log('welcome');
} else {
    console.log('please login');
};
// output: "welcome";

if (userName && isSignIn) {
    console.log('welcome');
} else {
    console.log('please sign in');
};
// output: "please sign in";

// let's declare a variables:
const studentIdOne = 10;
const studentPassOne = true;

const studentIdTwo = 0;
const studentPassTwo = false;

// conditional (if-else):
if (studentIdOne || studentPassOne) {
    console.log('pass free');
} else {
    console.log('please pay');
};
// output: "pass free";

if (studentIdTwo || studentPassTwo) {
    console.log('pass free');
} else {
    console.log('please pay');
};
// output: "please pay";


//* note: logical "&&" (and) work when both is true.
//* note: logical "||" (or) work when one value is true.


// conditional (if-else shorthand):
if (1 === 1) console.log('1 is equal to 1'); // output: '1 is equal to 1';

//! don't do this:
// if (2 <= 3) console.log('2 less than 3'), console.log('hello'),
// console.log('hi');