//? Javascript datatypes summary ------------------------------------------------------------------->

// let's talk about javascript memory related information like what is stack and what is heap memory in javascript:
// javascript has two types of datatypes. primitive data types and non-primitive data types.

/**
 * let's go to learn about primitive data types:
 * primitive data types is:
 * 1. string.
 * 2. number.
 * 3. boolean.
 * 4. undefined.
 * 5. null. (object => bug)
 * 6. symbol. (ES6)
 * 7. bigint. (ES2020)
*/


// let's see how look primitive data types:

// sting data types:
let name = "Rakibul Rahman";

// number data types:
let number = 18;

// boolean data types:
let boo = true;

// undefined data types:
let collage;

// null data types:
let nullType = null;

// symbol data types:
let sym = Symbol('123');

// bigint data types:
let big = BigInt(1545454545454545454545n);


/**
 * let's go to learn about non-primitive data types:
 * non-primitive data types is:
 * 1. array.
 * 2. object.
 * 3. functions.
*/


// let's see how looks non-primitive data types:

// array data types:
let arr = ['Rakibul', 'Ensiya', 'Marry', 'Alex'];

// object data types:
let user = {
    name: "Rakibul Rahman",
    age: 18,
    passion: "Programmer",
    isStudent: true,
};

// function data types:
let func = function() {
    console.log("hello world");
};


// now let's talk about javascript memory part how they work:

// Stack memory:
// Stack memory essentially store to the primitive data. And it's gives us to the copy of original data. When we change the data it will change to copy data not original data.

// Heap memory:
// Heap memory essentially store to the non-primitive data. And it's gives us to the reference of the data. So when we change the data it will change to original data.