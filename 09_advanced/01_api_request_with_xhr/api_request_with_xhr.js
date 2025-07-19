//? javascript api request with xhr ------------------------------------------------------------------->

// let's go to learn xhr:

// note: "xhr" means XMLHttpRequest (XHR) API. often referred to as AJAX (Asynchronous JavaScript and XML). This API allows you to make HTTP requests (GET, POST, etc.) to a server without reloading the web page.

// let's check javascript connect with html:
console.log("connected");

const xhr = new XMLHttpRequest();
const requestURL = `https://jsonplaceholder.typicode.com/users`;


// This is the first methods:
xhr.open("GET", requestURL);

xhr.onload = () => {
    
    if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        response.forEach((user) => {
            const username = document.createElement('h1')
            username.textContent = user?.name;
            document.body.appendChild(username);
        });
    } else {
        console.log(`Error: ${xhr.status}`);
    };

};

xhr.send();

// This is the second methods:
xhr.open("GET", requestURL);

xhr.onreadystatechange = () => {

    if (xhr.readyState === 4) {
        const data = JSON.parse(xhr.responseText);
        data.forEach((user) => {
            const h1 = document.createElement('h1');
            h1.textContent = user?.name;
            document.body.appendChild(h1);
        });
    };    
};

xhr.send();