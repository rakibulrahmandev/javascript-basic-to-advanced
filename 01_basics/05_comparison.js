//? Javascript comparison ------------------------------------------------------------------->

// Eight type of comparison operator in javascript. There are divide two parts like equality operators and relational operators.

// let's play with equality operators: (equality operators like: "==", "===", "!=", "!==");

const num = 1;
const strNum = "1";

// let's compare and check the output:
console.log(num == strNum); // output: true; (loose comparison);
console.log(num === strNum); // output: false; (strict comparison);
console.log(num != strNum); // output: false;
console.log(num !== strNum); // output: true;


const number1 = 10;
const number2 = 10;

// let's compare and check the output:
console.log(number1 == number2); // output: true;
console.log(number1 === number2); // output: true;
console.log(number1 != number2); // output: false;
console.log(number1 !== number2); // output: false;


/**
 * note what different between double equal and triple equal:
 * 1. double equal check the value. if value are equal it say true;
 * 2. triple equal check the data types and value. if value same and but data types are not same it say false;
 * 
 * note what is the different between not equal and not triple equal:
 * 1. not sign (!) has special power it's flip the result like (1 === 1) it's give us true but when we use this not sign (!) into this comparison like (1 !== 1) it's give us false, so what we see it's flip the output;
 * 2. not and double equal check the value. if value are equal it say true, but we also use not sign (!) before double equal so it flip the output and output is false;
 * 3. not and triple equal check the value and data types. if value are equal it say false, but we also use not sign (!) before triple equal so it flip the output and output is true;
*/


// let's play with relation operators: (equality operators like: ">" (greater than), "<" (less than), ">=" (greater than or equal), "<=" (less than or equal));

const age1 = 22;
const age2 = 18;

// let's compare and check the output:
console.log(age1 > age2); // output: true;
console.log(age1 < age2); // output: false;
console.log(age1 >= age2); // output: true;
console.log(age1 <= age2); // output: false;


/**
 * note relation operators are always give us boolean types value like "true" and "false":
*/

// note we also use the equality comparison with boolean, string, and number data types;
// note we also use the relation comparison with string length, and number data types; 