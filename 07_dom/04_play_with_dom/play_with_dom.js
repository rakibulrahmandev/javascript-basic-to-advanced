//? javascript play with dom and important thinks ------------------------------------------------------------------->

// let's go to learn dom important thinks:

/**
 * let's see what we learn:
 * 01. children
 * 02. parentElement
 * 03. firstElementChild
 * 04. lastElementChild
 * 05. nextElementSibling
 * 06. childNodes
*/

// let's access dom parent element:
const parent = document.querySelector('.parent');

// let't check:
console.log(parent);

// children:
console.log(parent.children); // output: HTMLCollection;

// note: "children" it's gives us HTMLCollection;

// parentChildren:
console.log(parent.parentElement); // output: parent element;

// note: "parentElement" gives us parent element of those children;

// firstElementChild:
console.log(parent.firstElementChild); // output: first child of parent element;

// note: "firstElementChild" gives us parent first child element;

// lastElementChild:
console.log(parent.lastElementChild); // output: last child of parent element;

// note: "lastElementChild" gives us parent last child element;

// childNodes:
console.log(parent.childNodes); // output: NodeList;

// note: "childNodes" it's gives us the all node list of parent;