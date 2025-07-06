//? javascript arrow function ------------------------------------------------------------------->

// let's go to learn javascript arrow function. An arrow function in JavaScript is a shorter way to write a function expression.


/**
 * let's break topics:
 * 01. regular function declaration
 * 02. arrow function declaration
 * 03. regular function parameters
 * 04. arrow function parameters
 * 05. regular function call
 * 06. arrow function call
 * 07. regular function passing argument
 * 08. arrow function passing argument
 * 09. regular function return
 * 10. arrow function return
 * 11. implicit function
 * 12. explicit function
*/

// regular function declaration:
function funcName() {
    // write code:
};

// arrow function declaration:
const arrowFunc = () => {
    // write code:
};

// regular function parameters:
function helloWorld(params) {
    // write code:
};

// arrow function parameters:
const hiWorld = (params) => {
    // write code:
};

// regular function call:
function sayHi(msg) {
    // write code:
};

sayHi();

// arrow function call:
const sayHello = (msg) => {
    // write code:
};

sayHello();

// regular function passing argument:
function sayName(name) {
    // write code:
};

sayName("Rakibul Rahman");

// arrow function passing argument:
const sayNames = (name) => {
    // write code:
};

sayName("Rakibul Rahman");

// regular function return:
function myName(name) {
    return name;
};

console.log(myName("Rakibul Rahman")); // output: "Rakibul Rahman"

// arrow function return:
const herName = (name) => {
    return name;
};

console.log(herName("Ensiya Rahman")); // output: "Ensiya Rahman"

// implicit function:
const myHobbies = (hobbies) => hobbies;
console.log(myHobbies("Coding, Studies")); // output: "Coding, studies"

const herHobbies = (hobbies) => (hobbies);
console.log(herHobbies("Program writing and cooking")); // output: "Program writing and cooking"

// note: Means the function automatically returns the result without needing a return keyword or curly braces {}.

// explicit function:
const myProf = (prof) => {
    return prof;
};

console.log(myProf("Student and Programmer")); // output: "Student and Programmer";

const herProf = (prof) => {
    return prof;
};

console.log(herProf("Student and Programmer")); // output: "Student and Programmer";

// note: Means you explicitly use the return keyword, often inside curly braces.

//! don't do this:
// const myDetails = name, age, isStudent => name, age, isStudent; ❌
// const multiple = x => { x * 2 }; ❌
// const add = x => { return x + 2}; ✅
// const divide = x => x / 2; ✅

// note: If you use {} in an arrow function, you must use return to send back a value.