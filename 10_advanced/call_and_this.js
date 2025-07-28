//? javascript call and this keyword --------------------------------------------------------------->

// let's go to learn call and this keyword:

/**
 * let's see what we learn:
 * 01. call.
 * 02. this.
*/

// let's declare a regular function:
function SetUsername(username) {
    this.username = username;
};

function User(username, email, password) {
    SetUsername(username);

    this.email = email;
    this.password = password;
};

// let's create an user:
const user = new User('Rakibul Rahman', 'rahman@yoyo.com', 'rahman123');

// let's check:
console.log(user); // output: User { email: 'rahman@yoyo.com', password: 'rahman123' };

//! note: as you can see the output is email and password without username. it's cause we call the SetUsername() function but it's give a reference of this function to User() function and it's also call the function but cannot hold the reference.

function SetUserName(username) {
    this.username = username;
};

function CreateUser(username, email, password) {
    SetUserName.call(username);

    this.email = email;
    this.password = password;
};

// let's create an user:
const createNewUser = new CreateUser('Ensiya Rahman', 'ensiya@yoyo.com', 'ensiya123');

// let's check:
console.log(createNewUser); // output: CreateUser { email: 'ensiya@yoyo.com', password: 'ensiya123' };

//! note: again same problem because, every regular function has "this" keyword. so SetUserName has own "this" keyword. but the problem is "this" keyword work with current context. so if we need to print this username, we need to pass "this" keyword when function call. and "this" keyword hold the reference.

function SetNewUsername(username) {
    this.username = username;
};

function NewUser(username, email, password) {
    SetNewUsername.call(this, username);

    this.email = email;
    this.password = password;
};

// let's create an user:
const newUser = new NewUser('Rakibul Rahman', 'rahman@yoyo.com', 'rahman123');

// let's check:
console.log(newUser); // output: NewUser { username: 'Rakibul Rahman', email: 'rahman@yoyo.com', password: 'rahman123' };