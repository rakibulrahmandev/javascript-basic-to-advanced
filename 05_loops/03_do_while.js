//? javascript do while loops ------------------------------------------------------------------->

// let's go to learn javascript do-while loops:

/**
 * let's see what we learn:
 * 01. basic syntax of do-while loops
 * 02. do-while loops iteration
 * 03. basic operation with do-while loops
 * 04. conditional statement with do-while loops
 * 05. break and continue with do-while loops
*/

// basic syntax of do-while loops:
/**
 * do {
 *      write code here:
 * } while (condition);
*/

let i = 0;

do {
    console.log(i);
    i++
} while (i <= 10);

// do-while loops iteration:
let j = 0;

do {
    console.log(`print number 0 to 15: ${j}`);
    j++;
} while (j <= 15);

// basic operation with do-while loops:
let k = 1;

do {
    let subtract = k - 1;
    console.log(`subtract 1 - ${k} = ${subtract}`);
    k++;
} while (k <= 10);

// conditional statement with do-while loops:
let l = 1;

do {
    if (l % 2 === 0) {
        console.log(`Even Number: ${l}`);
    } else {
        console.log(`Odd Number: ${l}`);
    };
    l++;
} while (l <= 15);

// break and continue with do-while loops:

// break:
let n = 1;

do {
    if (n % 2 === 0) {
        console.log(`Even Number detected: ${n}`);
        break;
    };
    console.log(`Odd Number: ${n}`);
    n++;
} while (n <= 5);

// continue:
// let m = 2;

// do {
//     let result = m + 2;
//     if (result === 10) {
//         console.log(`result is: ${m}`);
//         continue;
//     };
//     console.log(`print number: ${m}`);
//     m++;
// } while (m <= 20);

// fix:
let m = 2;

do {
    if (m === 10) {
        console.log(`detected number: ${m}`);
        m++;
        continue;
    };
    console.log(`print number: ${m}`);
    m++;
} while (m <= 20);

// tip: Always make sure the loop variable (m++) is not skipped when using continue, or you'll get an infinite loop.

// note: In do...while, the loop always runs at least once, even if the condition is false after the first run.