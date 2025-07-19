//? javascript promises ------------------------------------------------------------------->

// let's go to learn promises in javascript:

// note: A Promise in JavaScript is an object that represents the result of an asynchronous operation, allowing you to handle success or failure in the future.

// First we learn how create promise object and the next one is how to consume promises using .then() method:

// let's go to create promise:

// 1. create promise:
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Async task is complete.`);
        resolve();
    }, 1000);
});

// promise consume:
promiseOne.then(() => {
    console.log(`Promise consume.`);
});

// 2. create promise and consume together:
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`Async task 2 is complete.`);
        resolve();
    }, 1000);
}).then(() => {
    console.log(`Promise 2 is consume.`);
});

// 3. create promise and pass value in resolve method:
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "Rakibul Rahman", age: 18, isStudent: true});
    }, 1000);
});

// promise consume:
promiseThree.then((user) => {
    console.log(user);
});

// 4. create promise and pass value in resolve and reject method with chaining .then(), .catch(), and .finally():
const user = {
    username: "Ensiya Rahman",
    age: 15,
    isStudent: true
};

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = false;
        if (!err) {
            resolve(user);
        } else {
            reject(`Error: user is not found.`);
        };
    }, 1000);
});

promiseFour
.then((user) => {
    return user
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log('The promise is either resolved or rejected');
});

// 5. create promise with async-await and try-catch:
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = true;
        if (!err) {
            resolve({username: "JavaScript", age: 20, isTrue: true});
        } else {
            reject(`Error: Something is wrong.`)
        };
    }, 1000);
});

async function getUser() {
    try {
        const res = await promiseFive;
        console.log(res);
    } catch (err) {
        console.log(err);
    };
};

getUser();


// note: we are learn when fetch the data from a sever than what dose do the behind the scenes. how to work promises.