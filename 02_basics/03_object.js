//? javascript object ------------------------------------------------------------------->

// let's go to learn javascript object: objects declaration, access object with dot notation, access object with bracket notation.

/**
 * let's see object:
 * 01. object declaration
 * 02. access object with dot notation
 * 03. access object with bracket notation
*/

// object declaration:
let user1 = {
    name: "Rakibul Rahman",
    age: 18,
    profession: "student",
    isStudent: true
};

// access object with dot notation:
console.log(user1.name); // output: "Rakibul Rahman"
console.log(user1.age); // output: 18
console.log(user1.profession); // output: "student"
console.log(user1.isStudent); // output: true

// access object with bracket notation:
console.log(user1['name']); // output: "Rakibul Rahman"
console.log(user1['age']); // output: 18
console.log(user1['profession']); // output: "student"
console.log(user1['isStudent']); // output: true

// object declaration:
let obj = {
    companyName: 'Microsoft',
    since: 1975,
    isCompany: true,
    ceo: function(){
        return "Bill Gates"
    },
    product: ['software', 'laptops']
};

// access object with dot notation:
console.log(obj.companyName); // output: "Microsoft"
console.log(obj.since); // output: 1975
console.log(obj.isCompany); // output: true
console.log(obj.ceo()); // output: "Bill Gates"
console.log(obj.product); // output: [ 'software', 'laptops' ]

// access object with bracket notation:
console.log(obj["companyName"]); // output: "Microsoft"
console.log(obj["since"]); // output: 1975
console.log(obj["isCompany"]); // output: true
console.log(obj["ceo"]()); // output: "Bill Gates"
console.log(obj["product"]); // output: [ 'software', 'laptops' ]