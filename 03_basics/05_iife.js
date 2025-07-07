//? javascript IIFE ------------------------------------------------------------------->

// let's go to learn about IIFE function. IIFE means Immediately Invoked Function Expression.

/**
 * let's break down IIFE:
 * 01. IIFE with regular function
 * 02. IIFE with arrow function
 * 03. IIFE with regular function argument and parameters
 * 04. IIFE with arrow function argument and parameters
 * 05. IIFE with return keyword with regular function
 * 06. IIFE with return keyword with arrow function
*/

/**
 * note:
 * IIFE (Immediately Invoked Function Expression)

 * 01. A function that is defined and executed immediately.
 * 02. Used to create a private scope.
 * 03. Prevents variable conflicts in the global scope.
*/

// IIFE with regular function:
// syntax:
( function funcName() {
    console.log("Database connected");
} ) (); // output: "Database connected"

// note: Always add a semicolon ; before an IIFE if it's after another statement — to avoid syntax errors and misinterpretation.

// IIFE with arrow function:
// syntax:
( () => {
    console.log("Another database connected");
} ) (); // output: "Another database connected"

// IIFE with regular function argument passing and received parameter:
( function databaseName(name) {
    console.log(`database name is ${name}`);
} ) ("javascript"); // output: "javascript"

// IIFE with arrow function argument passing and received parameters:
( (name) => {
    console.log(`another database name is ${name}`);
} ) ("javascript"); // output: "another database name is javascript"

// IIFE with return keyword with regular function:
const myName =  ( function myName(name) {
    return name;
} ) ("Rakibul Rahman");

console.log(myName); // output: "Rakibul Rahman"

// IIFE with return keyword with arrow function:
const herName = ( (name) => {
    return name
} ) ("Ensiya Rahman");

console.log(herName); // output: "Ensiya Rahman"