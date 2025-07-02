//? javascript object ------------------------------------------------------------------->

// let's go to learn javascript object methods, nested object and change the object value:

// let's go to learn javascript object methods: 

/**
 * let's see object methods:
 * 01. Object.keys(): get all keys
 * 02. Object.values(): get all values
 * 03. Object.entries(): loop over key-value paris
 * 04. Object.fromEntries(); create object from paris
 * 05. Object.assign(): merge/clone object
 * 06. Object.create(): inheritance
 * 07. Object.freeze(): make object read only
 * 08. Object.hasOwn(): check own property
 * 09. Object.is(): compare value correctly
 * 10. Object.seal(): prevents adding/removing properties, but allows changing values.
*/


// let's declare an object variable:
let user1 = {
    name: "Rakibul Rahman",
    age: 18,
    isStudent: true,
    profession: "student",
    hobbies: ['Coding', 'Explore'],
    address: {
        country: "Bangladesh",
        city: "Dhaka"
    }
};

let user2 = {
    name: "Ensiya Rahman",
    age: 15,
    isStudent: true,
    profession: "Student",
    hobbies: ['Coding', 'Cooking'],
    address: {
        country: ['American', 'Korean'],
        city: 'American'
    }
};

let obj1 = {
    1: 'a',
    2: 'b'
};

let obj2 = {
    3: 'c',
    4: 'd'
};

let person = {
    greet() {
        return `Hi I'm ${this.name}`;
    }
};

// Object.keys():
console.log(Object.keys(user1)); // output: [ 'name', 'age', 'isStudent', 'profession', 'hobbies', 'address' ] (gives all keys from the user1 object)

// Object.values():
console.log(Object.values(user1)); // output: [ 'Rakibul Rahman', 18, true, 'student', [ 'Coding', 'Explore' ], { country: 'Bangladesh', city: 'Dhaka' } ] (gives all value from the user1 object)

// Object.entries():
console.log(Object.entries(user1)); // output: [ [ 'name', 'Rakibul Rahman' ], [ 'age', 18 ], [ 'isStudent', true ], [ 'profession', 'student' ], [ 'hobbies', [ 'Coding', 'Explore' ] ], [ 'address', { country: 'Bangladesh', city: 'Dhaka' } ] ] (give all key-value paris array from the user1 object)

// Object.fromEntries():
console.log(Object.fromEntries(Object.entries(user1))); // output: { name: 'Rakibul Rahman', age: 18, isStudent: true, profession: 'student', hobbies: [ 'Coding', 'Explore' ], address: { country: 'Bangladesh', city: 'Dhaka' } } (give an object from array)

// Object.assign():
console.log(Object.assign({}, obj1, obj2)); // output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } (merge two object to one object)

// Object.create():
let student = Object.create(person);
student.name = "Rakibul Rahman";
console.log(student.greet()); // output: "Hi I'm Rakibul Rahman"

// Object.freeze():

// note: user2 is modifying and change has value:
user2.address.country = "Bangladesh";
user2.address.city = "Dhaka";

console.log(user2); // output: { name: 'Ensiya Rahman', age: 15, isStudent: true, profession: 'Student', hobbies: [ 'Coding', 'Cooking' ], address: { country: 'Bangladesh', city: 'Dhaka' } }

// note: user1 is not modifying and change has value just read only:
Object.freeze(user1);

user1.address.country = "Korea";
user1.age = 22;

console.log(user1); // output: { name: 'Rakibul Rahman', age: 18, isStudent: true, profession: 'student', hobbies: [ 'Coding', 'Explore' ], address: { country: 'Korea', city: 'Dhaka' } } (just read only)

// Object.hasOwn():
console.log(Object.hasOwn(user1, "age")); // output: true

// note: Object.hasOwn() it's give boolean value;

// Object.is():
console.log(Object.is(user1.age, user2.age)); // output: false
console.log(Object.is(user1.address.city, user2.address.city)); // output: true

// Object.seal():

// note: obj1 is modifying and change the value:
obj1[1] = 'b';
obj1[3] = 'd';
delete obj1[2];

console.log(obj1); // output: { '1': 'b', '3': 'd' }

// note: Object.seal() it's allow to modifying and change the value but not adding/removing the value:
Object.seal(obj1);

obj1[1] = 'c';
obj1[2] = 'b'; // not allowed

delete obj1[1]; // not allowed

console.log(obj1); // output: { '1': 'c', '3': 'd' }


// let's see nested object:
const studentData = {
  name: "Rakibul Rahman",
  age: 18,
  address: {
    street: "122 new seoul, korea",
    city: "seoul",
    country: "Korea"
  },
  courses: {
    javascript: {
      score: 90,
      teacher: "Mr. Matthew Dou"
    },
    english: {
      score: 85,
      teacher: "Ms. Anna Jonson"
    }
  }
};

// access the nested object values:
console.log(studentData.name); // output: "Rakibul Rahman"
console.log(studentData.address.street); // output: "122 new seoul, korea"
console.log(studentData.courses.javascript.score); // output: 90

// change the nested object values:
studentData.name = "Ensiya Rahman";
studentData.age = 15;
studentData.address.city = "Ulsan";

console.log(studentData); // output: { name: 'Ensiya Rahman', age: 15, address: { street: '122 new seoul, korea', city: 'Ulsan', country: 'Korea' }, courses: { javascript: { score: 90, teacher: 'Mr. Matthew Dou' }, english: { score: 85, teacher: 'Ms. Anna Jonson' } } }
