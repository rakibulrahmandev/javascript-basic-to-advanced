//? javascript inheritance ------------------------------------------------------------------->

// let's go to learn inheritance:

/**
 * let's see what we learn:
 * 01. inheritance.
 * 02. super -keyword.
 * 03. extends -keyword.
 * 04. instanceof -keyword.
*/

// let's declare a class-constructor:
class User {
    constructor(username) {
        this.username = username;
    };

    userLoggedIn() {
        return `${this.username} is login.`;
    };
};

// let's create inheritance:

// extends and super keyword:
class Admin extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    };

    userIsAdmin() {
        return `${this.username} is admin.`;
    };
};

// let's create an user:
const userOne = new Admin('Rakibul Rahman', 'rahman@yyo.com', '1234');

// let's check:
console.log(userOne); // output: Admin { username: 'Rakibul Rahman', email: 'rahman@yyo.com', password: '1234' };
console.log(userOne.userIsAdmin()); // output: 'Rakibul Rahman is admin.';

// let's create an user:
const userTwo = new User('Ensiya Rahman');

// let's check:
console.log(userTwo); // output: User { username: 'Ensiya Rahman' };
console.log(userTwo.userLoggedIn()); // output: 'Ensiya Rahman is Login.';


// instanceof keyword:
console.log(userOne instanceof User); // output: true;
console.log(userTwo instanceof User); // output: true;

console.log(userOne instanceof Admin); // output: true;
console.log(userTwo instanceof Admin); // output: false;


//! note: extends – used to create a class that inherits from another;
//! note: super – calls the constructor or method of the parent class;
//! note: instanceof – checks if an object is an instance of a class;