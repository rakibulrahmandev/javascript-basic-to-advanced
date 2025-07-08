//? javascript logical operators ------------------------------------------------------------------->

// let's go to learn logical operators:

/**
 * let's break down the logical operators:
 * 01. logical "&&" (and) operators
 * 02. logical "||" (or) operators
 * 03. logical "!" (not) operators
 * 04. nullish coalescing operator "??" (nullish)
*/

// let's see logical "&&" (and) operators:
// let's declare a variables:
const val1 = true;
const val2 = true;

if (val1 && val2) {
    console.log("true"); // output: "true";
} else {
    console.log("false");
};

const val3 = true;
const val4 = false;

if (val3 && val4) {
    console.log("true");
} else {
    console.log("false"); // output: "false";
};

// note: logical "&&" (and) especially check if both condition is true than it's print "if" blocks codes. if any condition is false it's not print "if" blocks codes.

// let's see logical "||" (or) operators:
// let's declare a variables:
const isStudent = true;
const isLoggedIn = true;

if (isStudent || isLoggedIn) {
    console.log("true"); // output: "true";
} else {
    console.log("false");
};

const isAge15 = false;
const isAge18 = true;

if (isAge15 || isAge18) {
    console.log("true"); // output: "true";
} else {
    console.log("false");
};

// note: logical "||" (or) especially check if one condition is true it's print "if" blocks codes.

// let's see logical "!" (not) operators:
// let's declare a variables:
const isSignIn = true;

if (!isSignIn) {
    console.log("true");
} else {
    console.log("false"); // output: "false";
};

const isLogIn = false;

if (!isLogIn) {
    console.log("true"); // output: "true";
} else {
    console.log("false");
};

const isRegister = true;

if (!!isRegister) {
    console.log("true"); // output: "true";
} else {
    console.log("false");
};

const myName = "Rakibul Rahman";

if (!myName) {
    console.log("Rakibul Rahman");
} else {
    console.log("It's secret"); // output: "It's secret";
};

// note: logical "!" (not) working with boolean values like true or false. if it is true logical "!" flip out and true is convert false. if it is false logical "!" flip out and false is true. if you provide two logical "!!" (not) it is flip two times. and the result like this !!true => false => true;

// let's see nullish (??) operators:
// let's declare a variables:
let username = null;
let defaultName = "Guest";

let nameToDisplay = username ?? defaultName;

if (nameToDisplay === 'Guest') {
    console.log('welcome, guest!');
} else {
    console.log(`welcome, ${nameToDisplay}!`);
};

let userAge = undefined;
let age = userAge ?? 18;

if (age === 18) {
    console.log("you are a adult"); // output: "you are a adult";
} else {
    console.log("you are a minor");
};

// note: The nullish coalescing operator (??) returns the right-hand value only if the left-hand value is null or undefined.