//? javascript nodeList & htmlCollection ------------------------------------------------------------------->

// let's go to learn nodeList & htmlCollection:

/**
 * nodeList:
 * 01. What is it?
 * 02. Example.
 * 03. Feature.
*/

//* nodeList:

/**
 * what is it:
 * 01.  A NodeList is a collection of nodes (which can be elements, text nodes, or comments).
 * 02. It's returned by methods like:
 *     ** document.querySelectorAll()
 *     ** Node.childNodes
*/

// example:
const listItem = document.querySelectorAll('li');
console.log(listItem); // NodeList of all <li> elements

/**
 * features:
 * 01. Can be looped using forEach() (if it's a static NodeList).
 * 02. Can access elements with item(index) or bracket notation ([index]).
 * 03. Can be static (doesn't update when DOM changes) or live (rare).
*/

/**
 * htmlCollection:
 * 01. What is it?
 * 02. Example.
 * 03. Feature.
*/

//* htmlCollection:

/**
 * what is it:
 * 01. An HTMLCollection is a collection of HTML elements only.
 * 02. Returned by methods like:
 *     ** document.getElementsByTagName()
 *     ** document.getElementsByClassName()
 *     ** element.children
*/

// example:
const divs = document.getElementsByTagName('div');
console.log(divs); // HTMLCollection of <div> elements

/**
 * feature:
 * 01. Live collection – updates automatically when the DOM changes.
 * 02. Doesn't support forEach() directly.
 * 03. Can access elements by index or name (if name/id attribute exists).
*/

//* how to convert real array to nodeList and HtmlCollection:

// let's declare a variable:
const nodeList = document.querySelectorAll('div');
const htmlCollection = document.getElementsByTagName('div');

// let's check:
console.log(nodeList);
console.log(htmlCollection);

// array.from() method use to convert an array:
const nodeArr = Array.from(nodeList);
// let's check:
console.log(nodeArr); // convert nodeList to array;


// spread operators use to convert an array:
const htmlArr = [...htmlCollection];
// let's check:
console.log(htmlArr); // convert htmlCollection to array;