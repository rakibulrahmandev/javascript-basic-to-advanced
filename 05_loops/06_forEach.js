//? javascript forEach loops ------------------------------------------------------------------->

// let's go to learn javascript forEach loops:

/**
 * let's see what we learn:
 * 01. basic syntax of forEach loop
 * 02. callBack regular function in forEach loop
 * 03. callBack arrow function in forEach loop
 * 04. function reference pass in forEach loop
 * 05. multiple parameters pass in forEach loop
*/

// basic syntax of forEach loop:
/**
 * array.forEach(function(element, index, array) {
 *      Your code here:
 * });
*/

/**
 * array.forEach((element, index, array) => {
 *      Your code here:
 * });
*/

// iteration of forEach loop:
const superhero = ["superman", "batman", "Ben"];

superhero.forEach(function(item) {
    console.log(item);
}); // print all superhero element;

// callBack regular function in forEach loop:
const country = ["Australia", "Korea", "China", "Pakistan"];

country.forEach(function(item) {
    console.log(item);
}); // print all country element;

// callBack arrow function in forEach loop:
const languages = ["JavaScript", "Java", "Python", "Ruby", "C#", "C++", "C"];

languages.forEach((item) => {
    console.log(item);
}); // print all languages element;

// function reference pass in forEach loop:
const programmers = ["Rakibul Rahman", "Ensiya Rahman", "David", "Alex", "Matthew", "John"];

function print(item) {
    console.log(item);
};

programmers.forEach(print); // print all programmers name;

// multiple parameters pass in forEach loop:
const projects = ["Heaven", "HopeHip", "Gadget Heaven", "Go-TripTales"];

projects.forEach((item, index, arr) => {
    console.log(`${index}: ${item} and array list ${arr}`);
}); // print index, element, array list;

function refPrint(item, index, arr) {
    console.log(`${index + 1}: ${item} and array list ${arr}`);
};

projects.forEach(refPrint);

// note: forEach make iteration on an array. forEach loop is used to execute a function once for each element in an array.