//? Javascript string ------------------------------------------------------------------->

// let's go to learn javascript template string literals and string methods:

// template string literals:

const name = "Rakibul Rahman";
const age = 18;
const prof = "Programmer";

// let's check with template literals:
console.log(`His name is ${name}. His age ${age}. His profession ${prof}`); // output: "His name is Rakibul Rahman. His age 18. His profession Programmer";

// note template literals come from modern javascript (ES6).


// string methods:

const herName = "Ensiya Rahman";


/**
 * let's see basic methods:
 * 01. charAt(index)
 * 02. charCodeAt(index)
 * 03. at(index)
*/

// charAt(index):
console.log(herName.charAt(2)); // output: "s" (Returns the character at a specified index.)

// charCodeAt(index):
console.log(herName.charCodeAt(1)); // output: 110 (Returns the Unicode of the character at a specified index.)

// At(index):
console.log(herName.at(3)); // output: "i" (Returns the character at a given position (supports negative indexes).)
console.log(herName.at(-13)); // output: "E" (Returns the character at a given position (supports negative indexes).)

// string manipulation methods:

// let's declare a new variables:
const myName = "Rakibul Rahman";

/**
 * let's see string manipulation methods:
 * 01. concat(str1, str2, ...)
 * 02. repeat(count)
 * 03. replace(search, replacement)
 * 04. replaceAll(search, replacement)
 * 05. slice(start, end)
 * 06. substring(start, end)
 * 07. substr(start, length)
 * 08. split(separator)
 * 09. padStart(length, padString)
 * 10. padEnd(length, padString)
 * 11. trim()
 * 12. trimStart() or trimLeft()
 * 13. trimEnd() or trimRight()
*/


// concat(str1, str2, ...):
console.log(myName.concat(herName)); // output: "Rakibul Rahman Ensiya Rahman" (Combines two or more strings.)

// repeat(count):
console.log(myName.repeat(3)); // output: repeat 3 times (Repeats the string count times.)

// replace(search, replacement):
console.log(myName.replace("Rahman", "Ensiya")); // output: "Rakibul Ensiya" (Replaces part of the string with another string.)

// replaceAll(search, replacement):
console.log(myName.replace("Rakibul", "Rahman")); // output: "Rahman Rahman" (Replaces all occurrences.)

// slice(start, end):
console.log(myName.slice(2, 5)); // output: "kib" (Extracts a section of a string.)

// substring(start, end):
console.log(myName.substring(0, 7)); // output: "Rakibul" (Similar to slice() but doesn't accept negative indexes.)

// substr(start, length):
console.log(myName.substr(0, 7)); // output: "Rakibul" ((Deprecated) Extracts part of the string.)

// split(separator):
console.log(myName.split(" ")); // output: ["Rakibul", "Rahman"] (Splits a string into an array.)

// padStart(length, padString):
console.log(myName.padStart(20, "*")); // output: "******Rakibul Rahman" (Pads the string at the start.)

// padEnd(length, padString):
console.log(myName.padEnd(20, "#")); // output: "Rakibul Rahman######" (Pads the string at the end.)

// let's declare a new variables:
const myLove = "     Ensiya Rahman     ";

// trim():
console.log(myLove.trim()); // output: "Ensiya Rahman" (Removes whitespace from both ends.)

// trimStart():
console.log(myLove.trimStart()); // output: "Ensiya Rahman      " (Removes leading whitespace.)

// trimEnd():
console.log(myLove.trimEnd()); // output: "      Ensiya Rahman" (Removes trailing whitespace.)


// case conversion:

// let's declare a new variables:
const profession = "Programmer";

/**
 * let's see case conversion:
 * 01. toUpperCase()
 * 02. toLowerCase()
 * 03. toLocalUpperCase()
 * 04. toLocalLowerCase()
*/


// toUpperCase():
console.log(profession.toUpperCase()); // output: "PROGRAMMER" (Converts the string to uppercase.)

// toLowerCase():
console.log(profession.toLowerCase()); // output: "programmer" (Converts the string to lowercase.)

// toLocalUpperCase():
console.log(profession.toLocaleUpperCase()); // output: "PROGRAMMER" (Locale-aware uppercase conversion.)

// toLocalLowerCase():
console.log(profession.toLocaleLowerCase()); // output: "programmer" (Locale-aware lowercase conversion.)

// note: toLocaleUpperCase() and toLocaleLowerCase() using for Local charter.

// another use toLocalString():
const amount = 123456.789;

// let's see toLocaleString():
console.log(amount.toLocaleString("bn-BD", {style: "currency", currency: "BDT"})); // output: ১,২৩,৪৫৬.৭৯৳


// searching in string:

// let's declare a new variables:
const herProf = "software engineer";

/**
 * let's see searching in string:
 * 01. indexOf(searchValue)
 * 02. lastIndexOf(searchValue)
 * 03. includes(searchValue)
 * 04. startsWith(searchValue)
 * 05. endsWith(searchValue)
 * 06. search(regexp)
 * 07. match(regexp)
*/


// indexOf(searchValue):
console.log(herProf.indexOf("f")); // output: 2 (Returns the index of the first occurrence.)

// lastIndexOf(searchValue):
console.log(herProf.lastIndexOf("s")); // output: 0 (Returns the index of the last occurrence.)

// includes(searchValue):
console.log(herProf.includes("engineer")); // output: true (Checks if the string contains the given value.)

// startsWith(searchValue):
console.log(herProf.startsWith("o")); // output: false (Checks if the string starts with given text.)
console.log(herProf.startsWith("s")); // output: true (Checks if the string starts with given text.)
console.log(herProf.startsWith("S")); // output: false (Checks if the string starts with given text.)

// endsWith(searchValue):
console.log(herProf.endsWith("r")); // output: true (Checks if the string ends with given text.)
console.log(herProf.endsWith("R")); // output: false (Checks if the string ends with given text.)
console.log(herProf.endsWith("e")); // output: false (Checks if the string ends with given text.)

// search(regexp):
console.log(herProf.search(/engineer/)); // output: 9 (Searches the string for a match using RegExp.)
console.log(herProf.search(/Engineer/)); // output: -1 (Searches the string for a match using RegExp.)

// match(regexp):
console.log(herProf.match(/software/)); // output: [ 'software', index: 0, input: 'software engineer', groups: undefined ] (Matches a string against a regular expression.)
console.log(herProf.match(/software/g)); // output: ['software'] (Matches a string against a regular expression.)
console.log(herProf.match(/Rahman/g)); // output: null (Matches a string against a regular expression.)


// Conversion and Info:

// let's declare a new variables:
const myProf = new String("software engineer");

/**
 * let's see Conversion and Info methods:
 * 01. valueOf()
 * 02. toString()
*/


// valueOf():
console.log(myProf); // output: [String: 'software engineer'] like key value pair
console.log(myProf.valueOf()); // output: 'software engineer' (Returns the primitive value of a String object.)

// toString():
console.log(myProf.toString()); // output: 'software engineer' (Converts a value to a string.)

/**
 * note:
 * 01. toString() Returns a string.
 * 02. valueOf() Returns the primitive value. 
*/