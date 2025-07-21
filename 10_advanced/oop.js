//? javascript object orientation programming ------------------------------------------------------------------->

// let's go to learn javascript OOP:

/**
 * let's see what we learn:
 * 01. object literal
 * 02. this keyword with method - current context
 * 03. constructor function
*/


// object literal:
const userOne = {
    name: 'Rakibul Rahman',
    age: 18,
    isStudent: true
};

const userTwo = {
    name: 'Ensiya Rahman',
    age: 15,
    isStudent: true
};


// "this" keyword with method - current context:
const userFour = {
    username: 'Rakibul Rahman',
    loggedIn: true,
    greeting: () => {
        // console.log(username);;
    }
};

// let's check:
console.log(userFour.username); // output: 'Rakibul Rahman';
console.log(userFour.greeting()); // output: ReferenceError: username is not defined;

// using this keyword:
const userFive = {
    username: 'Ensiya Rahman',
    loggedIn: true,
    greeting: () => {
        // console.log(`username: ${this.username}`);
    }
};

// let's check:
console.log(userFive.username); // output: 'Ensiya Rahman';
console.log(userFive.greeting()); // output: username: undefined;

//! note: Use regular functions (not arrow functions) for object methods when you need to use this to refer to the object itself.

// let's try to correct way:
const userSix = {
    username: 'Rakibul Rahman',
    loggedIn: true,
    greeting: function() {
        console.log(`username: ${this.username}`);
    }
};

// let's check:
console.log(userSix.username); // output: 'Rakibul Rahman;
console.log(userSix.greeting()); // output: 'username: Rakibul Rahman';

const userSeven = {
    username: 'Ensiya Rahman',
    loggedIn: true,
    greeting() {
        console.log(`username: ${this.username}`);
    }
};

// let's check:
console.log(userSeven.username); // output: 'Ensiya Rahman';
console.log(userSeven.greeting()); // output: 'username: Ensiya Rahman';

//! note: When defining a method inside an object, use a regular function instead of an arrow function if you want to access the object’s own properties using this.
/**
 * * Regular Function binds this to the object.
 * * Arrow Function does not have its own this — it inherits from the outer scope.
*/


// constructor function:

function user(username, isLoggedIn, age) {
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.age = age;
    this.isAdult = age < 18 ? false : true;

    this.greeting = function() {
        console.log(`welcome to JavaScript Mr. ${this.username}`);
    };
};

// let's create new user:
const userEight = new user('Rakibul Rahman', true, 22);

// let's check:
console.log(userEight); // output: user { username: 'Rakibul Rahman', isLoggedIn: true, age: 18, isAdult: true, greeting: [Function (anonymous)] }

//! note: Use a capital letter for constructor function names (e.g., User) so the created object shows User {} in the console, not just user {}.
//! note: Always capitalize constructor function names like User, Person, Car, Product, etc. It makes your code cleaner and easier to understand.

function User(username, isLoggedIn, age) {
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.age = age;
    this.isAdult = age < 18 ? false : true;

    this.greeting = function() {
        console.log(`welcome to JavaScript Mr. ${this.username}`);
    };
};

// let's create new user:
const userNine = new User('Ensiya Rahman', true, 18);

// let's check:
console.log(userNine); // output: User { username: 'Ensiya Rahman', isLoggedIn: true, age: 15, isAdult: true, greeting: [Function (anonymous)] }

//! note: console.log() shows the constructor name (e.g., User {}), not the variable name (e.g., userNine), because JavaScript objects don’t store the variable name they're assigned to.