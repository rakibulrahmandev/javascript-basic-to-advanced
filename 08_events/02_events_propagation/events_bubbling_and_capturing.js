//? javascript events bubbling and capturing ------------------------------------------------------------------->

// let's go to learn javascript events bubbling and capturing:

/**
 * let's see what we learn:
 * 01. event bubbling.
 * 02. event capturing.
*/

// let's access dom element:
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// let's check:
console.log(parent);
console.log(child);

// event bubbling:
parent.addEventListener('click', () => {
    console.log('I am parent.');
});

child.addEventListener('click', () => {
    console.log('I am child.');
});

//* note: Event bubbling is the process where an event starts from the target element and bubbles up to its ancestor elements in the DOM hierarchy.

// event capturing:
parent.addEventListener('click', () => {
    console.log(`Hello! I'm parent.`);
}, true);

child.addEventListener('click', () => {
    console.log(`Hi! I'm child.`);
}, false);

//* note: Event capturing is the process where an event starts from the outermost ancestor and travels down to the target element in the DOM.

//! note: In addEventListener, the third parameter true enables capturing phase, and false (default) enables bubbling phase.