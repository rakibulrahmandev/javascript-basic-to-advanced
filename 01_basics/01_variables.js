//? Javascript variables ------------------------------------------------------------------->

// Three types of javascript variables like var, let, and const;


// let's declare a variable with "var" keywords: before (ES6);
var name = "Rakibul Rahman";

// let's declare a variable with "let" keywords: introducing (ES6);
let herName = "Ensiya Rahman";

// let's declare a variable with "const" keywords: introducing (ES6);
const ourProfession = "Software Engineer";


// let's check the output:
console.log(name); // output: "Rakibul Rahman";
console.log(herName); // output: "Ensiya Rahman";
console.log(ourProfession); // output: "Software Engineer";

// let's see what is the different between those keywords:

/** 
 * use "var" keywords is allowed to change or modify has value;
 * this is global scope variable;
 * it's use some old browsers and old codes before "let", and "const";
*/

var herReligion = "Seoul, Korea";
herReligion = "Dhaka, Bangladesh";

console.log(herReligion); // output: "Dhaka, Bangladesh";

/**
 * use "let" keywords is allowed to change or modify has value;
 * this is block scope variable;
 * it's use every modern browsers and modern codes after (ES6);
*/

let myReligion = "Dhaka, Bangladesh";
myReligion = "Grow Up Dhaka";

console.log(myReligion);

/**
 * use "const" keywords is not allowed to change or modify has value;
 * this is block scope variable;
 * it's use every modern browsers and modern codes after (ES6);
*/

const ourPassion = "Software Engineering";
ourPassion = "Software Developer"; // not allowed;

console.log(ourPassion); // TypeError: Assignment to constant variable.