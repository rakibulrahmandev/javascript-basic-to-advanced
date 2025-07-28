//? javascript static props ------------------------------------------------------------------->

// let's go to learn static props:

/**
 * let's see what we learn:
 * 01. static keyword in constructor.
*/

// let's create a class-constructor:

// static keyword:
class User {
    constructor(username) {
        this.username = username;
    };

    printThisText() {
        console.log(`Hello! ${this.username}`);
    };

    static createUserId() {
        return '01';
    };
};

// let's create an user: 
const userOne = new User('Rakibul Rahman');

// let's check:
console.log(userOne); // output: User { username: 'Rakibul Rahman' };
console.log(userOne.createUserId()); // output: cannot access this method;

//! note: The static keyword in JavaScript defines a method or property that belongs to the class itself, not to instances of the class.