//? javascript ternary operators ------------------------------------------------------------------->

// let's go to learn ternary operators in javascript:

// syntax of ternary operators:
/**
 *
 * 
 * condition ? true : false;
 * 
 *  
*/

// let's declare a variables:
const myAge = 18;
const herAge = 15;

myAge < herAge ? console.log('she is elder than me') : console.log('she is younger than me'); // output: "she is younger than me";

// let's declare a variables:
const isStudent = true;
isStudent ? console.log('I am a student') : console.log('I am not a student'); // output: "I am a student";

const isLoggedIn = false;
isLoggedIn ? console.log("yes") : console.log("no"); // output: "no";

// note: if condition is true than print code after the "?" mark. if condition is false than print code after the semicolon;