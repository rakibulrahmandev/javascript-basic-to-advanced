//? javascript function ------------------------------------------------------------------->

// let's go to learn how to array and object passing in function and how to return those values:

/**
 * let's break down passing obj and arr:
 * 01. passing multiple value with spread operators
 * 02. passing array in function
 * 03. passing object in function
 * 04. passing array when function execution
 * 05. passing array when function execution
*/

// passing multiple value with spread operators:
function multipleVal(...val) {
    return val;
};

console.log(multipleVal(20, 30, 40, 50, 60, 70)); // output: [ 20, 30, 40, 50, 60, 70 ]

// note: this function return an array because spread operators convert every single value to an array

// passing array in function:
const arr = ["Rakibul Rahman", 18, true];

function passArr(getArr) {
    return getArr;
};

console.log(passArr(arr)); // output: [ 'Rakibul Rahman', 18, true ]

// passing object in function:
const user = {
    name: "Rakibul Rahman",
    age: 18
};

function passObj(anyobj) {
    return `User is ${anyobj.name}. His/Her age ${anyobj.age}`;
};

console.log(passObj(user)); // output: User is Rakibul Rahman. his/her age 18

// passing array when function execution:
function passArrExe(arr) {
    return arr;
};

console.log(passArrExe(["Ensiya Rahman", 15, true])); // output: [ 'Ensiya Rahman', 15, true ]

// passing object when function execution:
function passObjExe(obj) {
    return obj
};

console.log(passObjExe({
    name: "Ensiya Rahman",
    age: 15
})); // output: { name: 'Ensiya Rahman', age: 15 }