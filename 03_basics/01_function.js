//? javascript function ------------------------------------------------------------------->

// let's go to learn javascript function:

/**
 * let's break down function:
 * 01. basic function syntax
 * 02. simple function
 * 03. function execution
 * 04. function reference
 * 05. function with parameters
 * 06. function that returns a value
 * 07. function store in variables
*/

// let's declare a function:

// basic function syntax:
function functionName(parameters) {
    // write your code;
};

// simple function:
function sayHello() {
    console.log("hello");
};

sayHello();

// function execution:
function helloWorld() {
    console.log("hello world");
};

helloWorld(); // output: hello world

// note: when you declare a function and call the function in the output side than we call like this "hello world()". this is the function execution;

// function reference:
function hi() {
    console.log("hi");
};

hi;

// note: when you declare a function and just call the function without parentheses it's call function reference;

// function with parameters:
function greet(name) {
    console.log(`hello ${name}`);
};

greet("world"); // output: hello word;

// note: when you call the function and pass the value it's call the argument and when you receive the passing value it's call parameters;

// function that returns a value:
function add(a, b) {
    let result = a + b;
    return result;
};

console.log(add(1, 2)); // output: 3

// note: when you add return key than function return value but function don't return undefined;

// function store in variables:
function store() {
    return "Hello World"
};

const returning = store();
console.log(returning); // output: "Hello World";