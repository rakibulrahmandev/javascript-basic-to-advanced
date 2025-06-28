//? Javascript array ------------------------------------------------------------------->

// let's go to learn javascript array and methods: array declare, modification methods, searching and testing methods, creation and transformation methods:

// array declaration:

// array of string element:
const arrOfStr = ["Rakibul", "Ensiya", "Alex", "Anna", "Mark"];

// array of number element:
const arrOfNum = [10, 20, 30, 40, 50];

// array of boolean element:
const arrOfBoo = [true, false, true, false];

// array of mix element:
const arrOfMix = ['Rakibul Rahman', 18, true];

// array methods:

/**
 * let's see modification methods:
 * 01. push(): Adds elements to the end
 * 02. pop(): Removes the last element
 * 03. shift(): Removes the first element
 * 04. unshift(): Adds elements to the beginning
 * 05. splice(): Adds/removes elements at specific index
 * 06. sort(): Sorts the array (alphabetically by default)
 * 07. reverse(): Reverses the array
 * 08. fill(): Fills elements with a static value
 * 09. copyWithin(): Copies part of the array to another location
*/

// let's declare an array:
let arrOfMod = [10, 15, 20, 25, 30];
let arrOfModStr = ['Rakibul', "Ensiya", "Anna", "Alex", "Max"];
let arrOfModNum = [15, 10, 25, 20, 30];

// push():
arrOfMod.push(35); // (add new element to the end)

// pop():
arrOfMod.pop(); // (remove element to the end)

// shift():
arrOfMod.shift(); // (remove the first element)

// unshift():
arrOfMod.unshift(10); // (add element to the beginning)

// splice():
arrOfMod.splice(1, 3) // (add/removes elements at specific index)

// sort():
arrOfModStr.sort(); // (sorts the array (alphabetically by default))
arrOfModNum.sort((a, b) => a - b); // (ascending order)
arrOfModNum.sort((a, b) => b - a); // (descending order)

// reverse():
arrOfModStr.reverse(); // (reverses the array)

// fill():
arrOfMod.fill(0, 1, 4); // (fills elements with a static value) 

// copyWithIn():
arrOfModStr.copyWithin(0, 3); // copies part of the array to another location

// let's check what is the different of original array:
console.log(arrOfMod); // output: [ 10, 15, 20, 25, 30, 35 ] 
console.log(arrOfMod); // output: [ 10, 15, 20, 25, 30 ] 
console.log(arrOfMod); // output: [ 15, 20, 25, 30 ]
console.log(arrOfMod); // output: [ 10, 15, 20, 25, 30 ]
console.log(arrOfMod); // output: [ 10, 30 ]
console.log(arrOfModStr); // output: [ 'Alex', 'Anna', 'Ensiya', 'Max', 'Rakibul' ]
console.log(arrOfModNum); // output: [ 10, 15, 20, 25, 30 ]
console.log(arrOfModNum); // output: [ 30, 25, 20, 15, 10 ]
console.log(arrOfModStr); // output: [ 'Max', 'Alex', 'Anna', 'Ensiya', 'Rakibul' ]
console.log(arrOfMod); // output: [ 10, 0, 0, 0, 30 ]
console.log(arrOfModStr); // output: [ 'Anna', 'Alex', 'Ensiya', 'Anna', 'Alex' ]


/**
 * let's see searching and testing methods:
 * 01. includes(): Checks if array contains a certain value
 * 02. indexOf(): Finds index of the first match
 * 03. lastIndexOf(): Finds index of the last match
*/

// let's declare an array:
let mixArr = ['Rakibul Rahman', 18, true];

// includes():
console.log(mixArr.includes(18)); // output: true

// indexOf():
console.log(mixArr.indexOf(true)); // output: 2

// lastIndexOf():
console.log(mixArr.lastIndexOf("Rakibul Rahman")); // output: 0


/**
 * let's see creation and transformation:
 * 01. concat(): combined array into one
 * 02. slice(): returns a portion of the array
 * 03. join(): convert array to string
 * 04. toString(): Converts array to comma-separated string
*/

// let's declare an array:
let arr1 = [15, 20];
let arr2 = [25, 30];
let arr3 = [25, 45, 35, 55, 75, 65];

// concat():
console.log(arr1.concat(arr2)); // output: [ 15, 20, 25, 30 ]

// slice():
console.log(arr3.slice(1, 3)); // output: [45, 35]

// join():
console.log(arr1.join('/')); // output: "15/20"

// toString():
console.log(arr3.toString()); // output: "25,45,35,55,75,65"