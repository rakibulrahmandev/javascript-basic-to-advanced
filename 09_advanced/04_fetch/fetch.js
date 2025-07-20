//? javascript fetch ------------------------------------------------------------------->

// let's go to learn fetch:


/**
 * fetch syntax:
 * 
 * fetch(url)
 * .then(() => {
 * 
 * })
 * .then(() => {
 * 
 * })
 * .catch(() => {
 * 
 * })
*/


// let's declare an URL variable:
const url = 'https://api.restful-api.dev/objects';

// let's declare fetch:
fetch(url)
.then((res) => {
    return res.json();
})
.then((obj) => {
    console.log(obj);
})
.catch((err) => {
    console.log(err);
});

// note: fetch() is a built-in JavaScript function used to make HTTP requests and returns a Promise that resolves to the response.
/**
 * note:
 * 01. fetch() is asynchronous and returns a Promise.
 * 02. You must call .json(), .text(), or .blob() to read the response body.
 * 03. Use try...catch with async/await for cleaner code in modern apps.
 */