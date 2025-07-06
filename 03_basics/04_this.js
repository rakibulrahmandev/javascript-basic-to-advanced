//? javascript this keyword ------------------------------------------------------------------->

// let's go to learn about this keyword:

/**
 *  JavaScript: The `this` Keyword:

 Meaning:
 - `this` refers to the object that is executing the current function.

 Behavior by Context:

 01. Global Scope
    - In non-strict mode, `this` refers to the global object.
    - In strict mode, `this` is `undefined`.

 02. Regular Function
    - Depends on how the function is called.
    - In non-strict mode, `this` refers to the global object.
    - In strict mode, `this` is `undefined`.

 03. Object Method
    - `this` refers to the object the method is called on.

 04. Arrow Function
    - Arrow functions do **not** have their own `this`.
    - They inherit `this` from their surrounding (lexical) scope.

 05. Event Handlers
    - `this` refers to the HTML element that triggered the event.

 06. `bind()`, `call()`, `apply()`
    - These methods are used to explicitly set the value of `this`.

 07. Class Context
    - In class methods, `this` refers to the instance of the class.

 Common Issues:
    - Losing `this` in callbacks.
    - Using arrow functions where you want dynamic `this`.

 Tip:
    - Use arrow functions when you want lexical scoping of `this`.
    - Use `.bind()` or arrow functions to preserve `this` in callbacks.

*/