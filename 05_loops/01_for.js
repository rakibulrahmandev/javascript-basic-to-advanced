//? javascript for loops ------------------------------------------------------------------->

// let's go to learn javascript for loops:

/**
 * let's see what we learn:
 * 01. basic syntax of for loops
 * 02. for loops iteration
 * 03. basic operation with for loops
 * 04. conditional statement with for loops
 * 05. break and continue with for loops
*/

// basic syntax of for loops:
/**
 * for (initialization; condition; increment) {
 *      write code here;
 * };
*/

for (let i = 0; i <= 10; i++) {
    console.log(`Number: ${i}`); // output: 0 to 10;
};

// for loops iteration:
for (let index = 1; index <= 20; index++) {
    console.log(`value of number: ${index}`); // output: 1 to 20;
};

// basic operation with for loops
for (let i = 1; i <= 10; i++) {
    let add = i + 1;
    console.log(`Number ${i} + 1 = ${add}`);
};

// conditional statement with for loops:
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`Even number: ${i}`);
    } else {
        console.log(`Odd number: ${i}`);
    };
};

// break and continue with for loops:
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`Even Number: ${i}`);
        break;
    };
};

// note: "break" Immediately exits the loop or switch block.

for (let i = 1; i <= 20; i++) {
    if (i === 10) {
        console.log(`detected number of i = ${i}`);
        continue;
    };

    console.log(`Number of i = ${i}`);
};

// note: "continue" Skips the current iteration and moves to the next one in the loop.