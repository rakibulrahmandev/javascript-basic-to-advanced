//? javascript array map ------------------------------------------------------------------->

// let's go to learn javascript array map:

/**
 * let's see what we learn:
 * 01. basic syntax of array map
 * 02. regular callBack function
 * 03. arrow callBack function
 * 04. map some array element
 * 05. map implicit return
 * 06. map explicit return
*/

// basic syntax of array map:
/**
 * array.map(callBack(currentValue, index, array), thisArg);
*/

// regular callBack function:
const numbers = [2, 4, 6];
const squared = numbers.map(function(num) {
    return num ** 2;
});
console.log(squared); // output: [ 4, 16, 36 ];

// arrow callBack function:
const animals = ["tiger", "lion", "zebra", 'monkey'];
const uppercase = animals.map((ani) => ani.toUpperCase());
console.log(uppercase); // output: [ 'TIGER', 'LION', 'ZEBRA', 'MONKEY' ];

// map some array element:

// array of number:
const score = [100, 150, 120, 145, 200];
const addBonceNumber = score.map((num) => num + 10);
console.log(addBonceNumber); // output: [ 110, 160, 130, 155, 210 ];

// array of string:
const employs = ["Rahman", "Jackson", "Mark", "David", "Jonson"];
const lowercase = employs.map((lowercase) => lowercase.toLowerCase());
console.log(lowercase); // output: [ 'rahman', 'jackson', 'mark', 'david', 'jonson' ];

// array of object:
const shoppingCart = [
    {productId: 1, name: "Iphone", price: 1000},
    {productId: 2, name: "MacBook", price: 1200},
    {productId: 3, name: "Mac Studio", price: 2000},
    {productId: 4, name: "Ipad", price: 1100},
];

const addCompanyTag = shoppingCart.map((tag) => {
    return {
        ...tag,
        company: 'Apple'
    };
});
console.log(addCompanyTag); // output: [ { productId: 1, name: 'Iphone', price: 1000, company: 'Apple' }, { productId: 2, name: 'MacBook', price: 1200, company: 'Apple' }, { productId: 3, name: 'Mac Studio', price: 2000, company: 'Apple' }, { productId: 4, name: 'Ipad', price: 1100, company: 'Apple' } ];

const updatePrice = shoppingCart.map((update) => {
    return {
        ...update,
        price: update.price + 100
    };
});
console.log(updatePrice); // output: [ { productId: 1, name: 'Iphone', price: 1100 }, { productId: 2, name: 'MacBook', price: 1300 }, { productId: 3, name: 'Mac Studio', price: 2100 }, { productId: 4, name: 'Ipad', price: 1200 } ];

// note: .map() creates a new array by applying a function to each element of the original array.
// note: Use .map() when you need a new array of modified values.
// note: Use .forEach() when you just want to perform actions (like logging or DOM updates) without returning anything.