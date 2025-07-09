//? javascript while loops ------------------------------------------------------------------->

// let's go to learn javascript while loops:

/**
 * let's see what we learn:
 * 01. basic syntax of while loops
 * 02. while loops iteration
 * 03. basic operation with while loops
 * 04. conditional statement with while loops
 * 05. break and continue with while loops
*/

// basic syntax of while loops:
/**
 * while (condition) {
 *      write code here;
 * };
*/

let i = 1;

while (i <= 10) {
    console.log(`Number of ${i}`);
    i++;
};

// while loops iteration:
let j = 10;

while (j <= 20) {
    console.log(`print 10 to 20 = ${j}`);
    j++;
};

// basic operation with while loops:
let k = 1;

while (k <= 10) {
    let multiple = k * 2;
    console.log(`multiple table: 2 * ${k} = ${multiple}`);
    k++;
};

// conditional statement with while loops:
let l = 1;

while (l <= 10) {
    if (l % 2 === 0) {
        console.log(`Even Number: ${l}`);
    } else {
        console.log(`Odd Number: ${l}`);
    };
    l++;
};

// break and continue with while loops:
let m = 1;

while (m <= 10) {
    if (m === 5) {
        console.log(`detected number: ${m}`);
        break;
    };
    console.log(`number of m: ${m}`);
    m++;
};

// note: "break" stops the loop completely.

// let n = 1;

// while (n <= 20) {
//     if (n === 15) {
//         console.log(`number 20 is here: ${n}`);
//         continue;
//     };
//     console.log(`number is: ${n}`);
//     n++;
// };

// tip: Always make sure continue doesn't skip necessary updates like n++, or you'll get an infinite loop.

// fix:
let n = 1;

while (n <= 20) {
    if (n === 15) {
        console.log(`number 15 is here: ${n}`);
        n++;
        continue;
    };
    console.log(`number is: ${n}`);
    n++;
};

// note: skips the current loop step and goes to the next.