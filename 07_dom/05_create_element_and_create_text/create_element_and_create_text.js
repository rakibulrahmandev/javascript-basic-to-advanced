//? javascript create element and create text ------------------------------------------------------------------->

// let's go to learn javascript create element and create text:

/**
 * let's see what we learn:
 * 01. createElement;
 * 02. createTextNode;
*/

// createElement:
const div = document.createElement('div');
const h1 = document.createElement('h1');

// createTextNode:
const text = document.createTextNode('Hello there! I am JavaScript.');

// let's check it:
console.log(div);
console.log(h1);
console.log(text);

div.style.width = 'full';
div.style.height = 'auto';
div.style.padding = '20px';
div.style.display = 'flex';
div.style.alignItems = 'center';
div.style.justifyContent = 'center';
div.style.backgroundColor = '#212121';

h1.style.fontSize = '25px';
h1.style.color = 'white';


h1.appendChild(text);
div.appendChild(h1);

// let's print those content in the body element:
document.body.appendChild(div);