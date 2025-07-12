//? javascript dom manipulation ------------------------------------------------------------------->

// let's go to learn javascript dom (document object model). Access from HTML and change dynamically.
/**
 * what is DOM:
 * The DOM (Document Object Model) is a tree-like structure created by the browser from your HTML code. JavaScript can access and change it in real time.
*/

/**
 * let's see what we learn:
 * 01. selecting element
 * 02. selecting with id
 * 03. selecting with class
 * 04. selecting with tag
 * 05. selecting with query selector
 * 06. selecting with selector all
*/

// selecting element with id:
console.log(document.getElementById('dom'));
// let's hold this in a variable:
const h1 = document.getElementById('dom');
// let's check:
console.log(h1);

//! node: Select by ID


// selecting element with class:
console.log(document.getElementsByClassName('para'));
// let's hold this in a variable:
const p = document.getElementsByClassName('para');
// let's check:
console.log(p);

//! node: Select by class (returns HTMLCollection)


// selecting element with tag:
console.log(document.getElementsByTagName('span'));
// let's hold this in a variable:
const span = document.getElementsByTagName('span');
// let's check:
console.log(span);

//! note: Select by tag name


// selecting element with query selector:
console.log(document.querySelector('ul'));
console.log(document.querySelector('.item'));
console.log(document.querySelector('#item'));
// let's hold this in a variable:
const ul = document.querySelector('ul');
const ulClass = document.querySelector('.item');
const ulId = document.querySelector('#item');
// let's check:
console.log(ul);
console.log(ulClass);
console.log(ulId);

//! note: Select first match (CSS selector)


// selecting element with query selector all:
console.log(document.querySelectorAll('li'));
console.log(document.querySelectorAll('ul>li'));
console.log(document.querySelectorAll('li.list'));
// let's hold this in a variable:
const li = document.querySelectorAll('li');
// let's check:
console.log(li);

//! note: Select all matches (NodeList)