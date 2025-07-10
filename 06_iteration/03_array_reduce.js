//? javascript array reduce ------------------------------------------------------------------->

// let's go to learn javascript array reduce:

/**
 * let's see what we learn:
 * 01. basic syntax of array reduce
 * 02. reduce array element
*/

// basic syntax of array reduce:
/**
 * array.reduce(callback(accumulator, currentValue, index, array), initialValue)
*/

// reduce array element:
const numbers = [10, 25, 1500, 400, 800, 20000];
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total); // output: 22735;

// note: The reduce() method processes an array and returns a single output value using an accumulator.