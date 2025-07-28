//? javascript class-constructor ------------------------------------------------------------------->

// let's go to learn class-constructor:

/**
 * let's see what we learn:
 * 01. class.
 * 02. constructor. 
*/

// let's create class-constructor:

/**
 * syntax:
 * 
 * class User {
 *      constructor(parameter){
 *          this.parameter = parameter
 *          this.parameter = parameter
 *          this.parameter = parameter
 *      };
 * };
*/

// let's create user constructor:
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    };
};

// let's create an user:
const userOne = new User('Rakibul Rahman', 'rahman.dev@yoyo.com', 'rahman123');

// let's check:
console.log(userOne); // output: User: { username: 'Rakibul Rahman', email: 'rahman.dev@yoyo.com', password: 'rahman123' };


// let's create user constructor with constructor method:
class CreateUser {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    };

    encryptPassword() {
        return `${this.password}abc`;
    };
};

// let's create an user:
const userTwo = new CreateUser('Ensiya Rahman', 'ensiya.dev@yoyo.com', 'ensiya123');

// let's check:
console.log(userTwo); // output: CreateUser { username: 'Ensiya Rahman', email: 'ensiya.dev@yoyo.com', password: 'ensiya123' };


// behind the scene of class-constructor:

// let's declare and create regular function:
function NewUser(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
};

// let's create method:
NewUser.prototype.encryptPassword = function() {
    return `${this.password}123`;
};

// let's create an user: 
const userThree = new NewUser('Rakibul Rahman', 'rahman.dev@yoyo.com', 'rahman@abc');

// let's check:
console.log(userThree); // output: NewUser { username: 'Rakibul Rahman', email: 'rahman.dev@yoyo.com', password: 'rahman@abc' };