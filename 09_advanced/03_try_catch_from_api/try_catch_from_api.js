//? javascript try-catch ------------------------------------------------------------------->

// let's go to learn how to fetch data using async-await and try-catch:

// let's declare url variable:
const url = 'https://jsonplaceholder.typicode.com/users';

// let's declare a async arrow function with try-catch:
const getUsers = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data
    } catch (err) {
        return err;
    };
};

// let's store function:
const users = getUsers().then(user => console.log(user));

// let's check:
console.log(users);

// note: An async function always returns a Promise, so calling it directly gives Promise {<pending>} until you use await or .then() to get the result.