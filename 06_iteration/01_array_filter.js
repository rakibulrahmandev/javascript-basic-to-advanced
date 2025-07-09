//? javascript array filter ------------------------------------------------------------------->

// let's go to learn javascript array filter:

/**
 * let's see what we learn:
 * 01. basic syntax of filter method
 * 02. regular callBack function
 * 03. arrow callBack function
 * 04. filter some array element
 * 05. filter implicit return
 * 06. filter explicit return
*/

// basic syntax of filter method:
/**
 * array.filter(callBack(element, index, array), thisArg);
*/

// regular callBack function:
const fruits = ["Apple", "Mango", "Mongoes", "Dragon", "Strawberry"];
const filterFruits = fruits.filter(function(element) {
    return element.toLowerCase().includes('m');
});
console.log(filterFruits); // output: [ 'Mango', 'Mongoes' ];

// arrow callBack function:
const products = ["Iphone", "MacBook", "MacBook Pro", "Ipad"];
const filterProducts = products.filter((product) => product.toLowerCase().includes('m'));
console.log(filterProducts); // output: [ 'MacBook', 'MacBook Pro' ]

// filter some array element:

// array of string:
const nameOfEmploys = ["Rakibul Rahman", "Ensiya Rahman", "Johnson William", "Jack Smith"];
const filterEmployName = nameOfEmploys.filter((element) => element.includes("Rakibul Rahman"));
console.log(filterEmployName); // output: ["Rakibul Rahman"];

// array of numbers:
const numbers = [10, 25, 30, 35, 40, 45, 50, 55, 60];
const filterEvenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(filterEvenNumbers); // output: [ 10, 30, 40, 50, 60 ];

// array of object:
const shoppingCart = [
    {productId: 1, name: "Iphone", price: 1000},
    {productId: 2, name: "MacBook", price: 1200},
    {productId: 3, name: "Mac Studio", price: 2000},
    {productId: 4, name: "Ipad", price: 1100},
];
const filterLowPrice = shoppingCart.filter((item) => item.price < 1200);
console.log(filterLowPrice); // output: [ { productId: 1, name: 'Iphone', price: 1000 }, { productId: 4, name: 'Ipad', price: 1100 } ];

// let's declare array of object:
const employsDetails = [
    {name: "Rakibul Rahman", age: 18},
    {name: "Ensiya Rahman", age: 15},
    {name: "Alex Smith", age: 35},
    {name: "Max William", age: 20},
    {name: "Jack Johnson", age: 25},
];

// filter implicit return:
const filterEmployAge = employsDetails.filter(details => details.age <= 20);
console.log(filterEmployAge); // output: [ { name: 'Rakibul Rahman', age: 18 }, { name: 'Ensiya Rahman', age: 15 }, { name: 'Max William', age: 20 } ];

// filter explicit return:
const filterEmploySurname = employsDetails.filter((surname) => {
    return surname.name.toLowerCase().includes('rahman');
});
console.log(filterEmploySurname); // output: [ { name: 'Rakibul Rahman', age: 18 }, { name: 'Ensiya Rahman', age: 15 } ];