//? javascript dom edit and remove operation ------------------------------------------------------------------->

// let's go to learn edit and remove with javascript:

/**
 * let's see what we learn:
 * 01. innerHTML
 * 02. textContent
 * 03. createTextNode
 * 04. remove()
 * 05. replace()
 * 06. appendChild()
*/

// add new element in dom with innerHTML:
const addLanguage = (language) => {
    const li = document.createElement('li');
    li.innerHTML = `${String(language)}`;

    const ul = document.querySelector('.languages');
    ul.appendChild(li);
};


// add new element in dom with textContent:
const addNewLang = (languages) => {
    const li = document.createElement('li');
    li.textContent = `${String(languages)}`;

    document.querySelector('.languages').appendChild(li);
};


// add new element in dom with createTextNode:
const addNewLanguages = (languages) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${String(languages)}`));

    document.querySelector('.languages').appendChild(li);
};


// remove element in dom with remove():
const removeElement = (elementNumber) => {
    const removeEle = document.querySelector(`li:nth-child(${Number(elementNumber)})`);
    removeEle.remove();
};



addLanguage('TypeScript');
addNewLang('Python');
addNewLanguages('Ruby');
removeElement(2);