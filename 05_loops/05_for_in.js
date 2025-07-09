//? javascript for-in loops ------------------------------------------------------------------->

// let's go to learn javascript for-in loops:

/**
 * let's see what we learn:
 * 01. basic syntax of for-in loop
 * 02. iteration of for-in loop
*/

// basic syntax of for-in loop:
/**
 * for (const key in object) {
 *      write code here;
 * };
*/

// iteration of for-in loop:
const user1 = {
    name: "Rakibul Rahman",
    age: 18, 
    isStudent: true
};

for (let key in user1) {
    console.log(key);
}; // print all the key of user1;

const user2 = {
    name: "Ensiya Rahman",
    age: 15,
    isStudent: true
};

for (let key in user2) {
    console.log(`${key}: ${user2[key]}`);
}; // print all the key and value;

// note: 
/**
 * 01. It is not recommended to use for...in with arrays, because it iterates over all enumerable properties, including inherited or custom ones.
 * 02. For arrays, prefer for...of or for loop.
*/

// note: The for...in loop iterates over keys (property names) of an object.
// note: Use let in for...in because the loop updates the key on each iteration—const is valid but less clear.