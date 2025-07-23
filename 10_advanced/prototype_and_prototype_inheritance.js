//? javascript prototype and prototype inheritance ------------------------------------------------------------------->

// let's go to learn prototype and prototype inheritance:

/**
 * let's see what we learn:
 * 01. object prototype
 * 02. array prototype
 * 03. string prototype
 * 04. prototype inheritance
*/

// 01. object prototype:
const userOne = {
    username: 'Rakibul Rahman',
    age:  18,
    isStudent: true
};

const userTwo = {
    username: 'Ensiya Rahman',
    age: 15,
    isStudent: true
};

// let's create object prototype:
Object.prototype.printUserNameFromUserObj = function() {
    return this.username;
};

Object.prototype.profession = function() {
    return console.log(`Engineer`);
};

// let's check:
console.log(userOne.printUserNameFromUserObj()); // output: 'Rakibul Rahman';
console.log(userTwo.printUserNameFromUserObj()); // output: 'Ensiya Rahman';

userOne.profession(); // output: 'Engineer';
userTwo.profession(); // output: 'Engineer';

// 02. array prototype:
const friends = ['Rakibul Rahman', 'Ensiya Rahman'];
const animals = ['Lion', 'Tiger'];

// let's create array prototype:
Array.prototype.printFirstEle = function() {
    return this[0];
};

Array.prototype.printFirstEleLength = function() {
    return console.log(this[0].length);
};

// let's check:
console.log(friends.printFirstEle()); // output: 'Rakibul Rahman';
console.log(animals.printFirstEle()); // output: 'Lion';

friends.printFirstEleLength(); // output: 14;
animals.printFirstEleLength(); // output: 4;

// 03. string prototype:
const strOne = 'Rakibul Rahman';
const strTwo = 'Ensiya Rahman';

// let's create string prototype:
String.prototype.splitAndGiveFirstChar = function() {
    return this.split('')[0];
};

String.prototype.removeWhitespaceAndTrueLength = function() {
    return console.log(this.replace(' ', '').length);
};

// let's check:
console.log(strOne.splitAndGiveFirstChar()); // output: 'R';
console.log(strTwo.splitAndGiveFirstChar()); // output: 'E';

strOne.removeWhitespaceAndTrueLength(); // output: 13;
strTwo.removeWhitespaceAndTrueLength(); // output: 12;


// 04. prototype inheritance:

// let's create multiple objects:
const user = {
    username: 'Rakibul Rahman'
};

const age = {
    age: 18
};

const isStudent = {
    isStudent: true
};

const passion = {
    passion: 'Programming'
};

const createUserObj = {
    _proto_: user.username,
    bornIn: {
        country: 'Bangladesh',
        city: 'Dhaka'
    }
};

age._proto_ = isStudent;

// let's check:
console.log(createUserObj); // output: { _proto_: 'Rakibul Rahman', bornIn: { country: 'Bangladesh', city: 'Dhaka' } };
console.log(age); // output: { age: 18, _proto_: { isStudent: true } };
console.log(age._proto_.isStudent); // output: true;