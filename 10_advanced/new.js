//? javascript new keyword ------------------------------------------------------------------->

// Let's go to learn what the new keyword is:

/**
 * let's see what we learn:
 * 01. prototype in function
 * 02. learn new keyword
 * 03. create method with prototype
 * 04. access created method
*/

// let's go to see:

// 01. prototype in function:
function numAddNum(numOne, numTwo) {
    return numOne + numTwo;
};

console.log(numAddNum(2, 2)); // output: 4;
console.log(numAddNum.prototype); // output: {};

// 02. learn new keyword:
function userInDB(nameOfDB, userCount) {
    this.nameOfDB = nameOfDB;
    this.userCount = userCount;
};

const dbCollectionOne = userInDB('userdata', 20);
const dbCollectionTwo = new userInDB('userdata', 50);

console.log(dbCollectionOne); // output: undefined;
console.log(dbCollectionTwo); // output: userInDB { nameOfDB: 'userdata', userCount: 50 };

// 03. create method with prototype:
function Product(proName, proPrice) {
    this.productName = proName;
    this.productPrice = proPrice;
};

const productOne = new Product('Iphone 16 pro', 1000);
console.log(productOne); // output: Product { productName: 'Iphone 16 pro', productPrice: 1000 };

// prototype methods creation:
Product.prototype.priceIncrease = function() {
    this.productPrice++;
};

Product.prototype.printPrice = function() {
    console.log(`product price is: ${this.productPrice}`);
};


// 04. access prototype method:
const productTwo = new Product('MacBook pro', 1200);
console.log(productTwo.priceIncrease()); // output: undefined;

const productThree = new Product('Studio', 1500);
productThree.priceIncrease();

console.log(productThree); // output: Product { productName: 'Studio', productPrice: 1501 };


//! note:
/**
 * Here's what happens behind the scenes when the new keyword is used:

 * A new object is created: The new keyword initiates the creation of a new JavaScript object.

 * A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

 * The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

 * The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/