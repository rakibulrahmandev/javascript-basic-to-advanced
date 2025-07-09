//? javascript for of loops ------------------------------------------------------------------->

// let's go to learn javascript for-of loops:

/**
 * let's see what we learn:
 * 01. basic syntax of for-of loops
 * 02. iteration for-of loops
 * 03. looping through an array
 * 04. looping through a string
 * 05. looping through a set
 * 06. looping through a map
 * 07. looping with break and continue
*/

// basic syntax of for-of loops:
/**
 * for (const element of object) {
 *      write code here:
 * };
*/

// iteration for-of loops:
const country = ["Korea", "China", "Japan", "Malaysia", "Thailand"];

for (const elem of country) {
    console.log(elem);
}; // print all the element of array;

// looping through an array:
const lovedCountry = ["Korea", "China", "Malaysia", "Thailand", "Australia"];

for (const item of lovedCountry) {
    console.log(item);
}; // print all the item of lovedCountry;

// looping through a string:
const myName = "Rakibul Rahman";

for (const letter of myName) {
    console.log(letter);
}; // print all the individual letter of myName;

// looping through a set:
const number = new Set([1, 2, 3, 4, 5]);

// note: Set() is used to store unique values only, and it’s helpful for tasks like duplicate removal, membership checks, and efficient unique collection handling.

for (const num of number) {
    console.log(num);
}; // print all number from number;

// looping through a map:
const user = new Map();
user.set("name", "Ensiya Rahman");
user.set("age", 15);

for (const details of user) {
    console.log(details);
}; // output: [ 'name', 'Ensiya Rahman' ], [ 'age', 15 ];

for (const [key, values] of user) {
    console.log(`${key}: ${values}`);
}; // output: "name: Ensiya Rahman", "age: 15";

// looping through with break and continue:
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
    if (num === 2) continue; // skip 2;
    if (num === 4) break; // stop at 5;
    console.log(num);
};

// note: for-of loop especially design for loop through on an array.