//? Javascript array ------------------------------------------------------------------->

// let's go to learn array methods: Creation / Copy Methods (non-mutating), ES6+ Advanced / Utility Methods.

/**
 * let's see creation / copy methods (non-mutating):
 * 01. flat(depth): Flattens nested arrays
*/

// let's declare an nested array variables:
let arr = [10, 20, [30, 40, [50, 60, [70, 80, [90, 100]]]]];

// flat(depth):
console.log(arr.flat(1)); // output: [ 10, 20, 30, 40, [ 50, 60, [ 70, 80, [Array] ] ] ] (flatting 1 layer)
console.log(arr.flat(2)); // output: [ 10, 20, 30, 40, 50, 60, [ 70, 80, [ 90, 100 ] ] ] (flatting 2 layer)
console.log(arr.flat(3)); // output: [ 10, 20, 30, 40, 50, 60, 70, 80, [ 90, 100 ] ] (flatting 3 layer)
console.log(arr.flat(4)); // output: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] (flatting 4 layer)

/**
 * let's see ES6+ advanced / utility methods.
 * 01. Array.isArray(value): Checks if value is an array
 * 02. Array.from(iterable): Converts iterable to array
 * 03. Array.of(...items): Creates array from args
*/

// let's declare an array variables:
let arr1 = [];
let obj = {};

// Array.isArray(value):
console.log(Array.isArray(arr1)); // output: true
console.log(Array.isArray(obj)); // output: false

// Array.from(iterable):
console.log(Array.from("Rakibul Rahman")); // output: ['R', 'a', 'k', 'i', 'b', 'u', 'l', 'R', 'a', 'h', 'm', 'a', 'n'] (convert string to array elements)
console.log(Array.from("10000")); // output: [ '1', '0', '0', '0', '0' ] (convert string to array elements)

// Array.of(...items):
console.log(Array.of(1, 2, 4)); // output: [ 1, 2, 4 ]
console.log(Array.of('a', 'b', 'b')); // output: [ 'a', 'b', 'b' ]
console.log(Array.of(5)); // output: [5]

// bones tips: new Set([]);
console.log(Array.from(new Set([1, 1, 2]))); // output: [ 1, 2 ]
console.log(Array.from(new Set("abc"))); // output: [ 'a', 'b', 'c' ]