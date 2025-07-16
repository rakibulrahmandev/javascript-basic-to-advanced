//? javascript events ------------------------------------------------------------------->

// let's go to learn javascript events:

/**
 * let's see what we learn:
 * 01. event declare in html tag.
 * 02. event declare with onclick.
 * 03. event addEventListener.
*/

// event declare in html tag:
/**
 * 
 *  <button onclick="console.log('Hi');"></button>
 *  
*/

// let's access dom:
const btn = document.querySelector('.btn');

// let's check:
console.log(btn);


// event declare with onclick:
btn.onclick = () => {
    alert('hello! I am JavaScript.');
};

// event addEventListener:
btn.addEventListener('click', () => {
    alert('hi!! I am JavaScript.');
});