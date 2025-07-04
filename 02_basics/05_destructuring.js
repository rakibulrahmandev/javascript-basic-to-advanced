//? javascript destructuring ------------------------------------------------------------------->

// let's go to learn javascript array and object destructuring:


// array destructuring:

/**
 * let's break down to array destructuring:
 * 01. basic syntax
 * 02. skipping elements
 * 03. default values
 * 04. destructuring with rest operators
 * 05. nested destructuring
*/

// basic syntax:
const arr = [1, 2, 3];

// destructuring:
const [a, b, c] = arr;

// let's check the output: 
console.log(a); // output: 1
console.log(b); // output: 2
console.log(c); // output: 3


// skipping elements:
const arr1 = [10, 20, 30];
// destructuring:
const [x, , y] = arr1;

const arr2 = [20, 50, 40, 80, 70];
// destructuring:
const [d, , , g, h] = arr2;

// let's check the output:
console.log(x); // output: 10;
console.log(y); // output: 30;
console.log(d); // output: 20;
console.log(g); // output: 80;
console.log(h); // output: 70;


// default values:
const arr3 = ["Rakibul", "Ensiya"];
// destructuring:
const [i = "Rahman", j = "Rahman"] = arr3;

const arr4 = ["Rakibul"];
// destructuring:
const [s = "Rahman", t = "Rahman"] = arr4;

// let's check the output:
console.log(i); // output: "Rakibul";
console.log(j); // output: "Ensiya";
console.log(j); // output: "";
console.log(t); // output: "Rahman";


// destructuring with rest operators:
const arr5 = ["10", "20", "30", "40"];
// destructuring:
const [first, ...rest] = arr5;

// let's check the output: 
console.log(first); // output: "10";
console.log(rest); // output: [ '20', '30', '40' ];


// nested destructuring:
const arr6 = [1, [2, 3]];
// destructuring:
const [u, [v, w]] = arr6;

// let's check the output:
console.log(u); // output: 1;
console.log(v); // output: 2;
console.log(w); // output: 3;


// object destructuring:

/**
 * let's break down to object destructuring:
 * 01. basic syntax
 * 02. renaming variables
 * 03. default values
 * 04. nested object destructuring
 * 05. Rest Operator in Object Destructuring
*/

// basic syntax:
const obj = {
    name: "Rakibul Rahman",
    age: 18,
    isStudent: true
};

// destructuring:
const {name, age, isStudent} = obj;

// let's check the output:
console.log(name); // output: "Rakibul Rahman"
console.log(age); // output: 18
console.log(isStudent); // output: true

// renaming variables:
const obj2 = {
    name: "Ensiya Rahman",
    age: 15,
    isStudent: true
};

// destructuring:
const {name: herName, age: herAge, isStudent: student} = obj2;

// let's check the output:
console.log(herName); // output: "Ensiya Rahman"
console.log(herAge); // output: 15
console.log(student); // output: true

// default values:
const obj3 = {
    name: "Rakibul Rahman",
};

// destructuring:
const {name: myName, years = 18} = obj3;

// let's check the output:
console.log(myName); // output: "Rakibul Rahman"
console.log(years); // output: 18

// nested object destructuring:
const obj4 = {
    username: "Ensiya Rahman",
    address: {
        city: "Seoul",
        zip: 1254
    }
};

// destructuring:
const {address: {city, zip}} = obj4;

// let's check the output:
console.log(city); // output: "Seoul"
console.log(zip); // output: 1254

// note: address itself is not accessible unless you destructure it too.

// rest operator in object destructuring:
const user = {
    name: "Rakibul Rahman",
    age: 18,
    country: "BD"
};

// destructuring:
const {name: username, ...resting} = user;

// let's check the output:
console.log(username); // output: "Rakibul Rahman"
console.log(resting); // output: { age: 18, country: 'BD' }