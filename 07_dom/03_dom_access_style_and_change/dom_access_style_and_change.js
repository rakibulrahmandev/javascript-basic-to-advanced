//? javascript dom access, style and change ------------------------------------------------------------------->

// let's go to learn javascript dom manipulation:

console.log('js file loaded');

/**
 * let's see what we learn:
 * 01. Changing Content
 * 02. Changing Attributes
 * 03. Changing Styles
*/

// changing content:
/**
 * 01. element.textContent
 * 02. element.innerHtml
 * 03. element.innerText
*/

// let's access dom element:
const dom = document.getElementById('dom');

// let's check:
console.log(dom);

console.log(dom.innerHTML); // note: Returns or sets the HTML content, including tags.
console.log(dom.textContent); // note: Returns all text inside the element, even hidden ones (does not process HTML tags or styles).
console.log(dom.innerText); // note: Returns the visible text of an element (respects CSS styles like display: none, and formatting like line breaks).

dom.innerHTML = 'JavaScript <b>DOM</b> <span class="manipulation">Manipulation</span>';
dom.textContent = 'Hello JavaScript DOM';
dom.innerText = 'Hi JavaScript DOM';

/**
 * quick tip:
 * 01. innerHTML → to work with HTML markup.
 * 02. innerText → to get what’s visibly displayed.
 * 03. textContent → to get all the raw text, fast and without formatting.
*/

// changing attributes:
/**
 * 01. element.setAttribute()
 * 02. element.getAttribute()
 * 03. element.removeAttribute()
*/

// let's access dom element:
const p = document.getElementById('graph')

// let's check:
console.log(p);

console.log(p.getAttribute('class')); // note: it's return html tag specific attribute name.
console.log(p.removeAttribute('class')); // note: it's remove html tag specific attribute and return undefined.
console.log(p.setAttribute('class', 'para')); // note: it's set attribute in html tag and return undefined.

// changing styles:
// let's access dom element:
const span = document.querySelector('.manipulation');

// let's check:
console.log(span);

span.style.color = "red";
span.style.backgroundColor = "white";
span.style.fontSize = "20px";
span.style.padding = "10px";