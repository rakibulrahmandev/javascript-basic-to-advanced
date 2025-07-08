//? javascript empty array and object check ------------------------------------------------------------------->

// let's go to learn how to check empty array and object in javascript:

// let's declare a variables:
const emptyArr = [];
const emptyObj = {};

if (emptyArr == 0) {
    console.log("array is empty"); // output: "array is empty"; 
};

if (emptyArr) {
    console.log("array is empty"); // output: "array is empty";
};

if (emptyObj) {
    console.log("object is empty"); // output: "object is empty";
};

// note: this syntax is correct but it's not a better way check empty array and object.

if (emptyArr.length === 0) {
    console.log("Array is empty"); // output: "Array is empty";
};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); // output: "Object is empty";
};

// note: this is better way to check empty array and object.