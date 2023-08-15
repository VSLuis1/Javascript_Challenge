// IIFE - Immediately Invoked Function Expression
// IIFE is a function that is executed right after it is created.
// It has no name and is not stored in a variable.
// IIFE is a common pattern for creating closure.
// It is a way to execute functions immediately, as soon as they are created.


// Example 1 - Named IIFE
(function chai () {
    console.log("Your Chai Is Ready");
})();

// Example 2 - Anonymous IIFE
( (name) => {
    console.log(`${name} Chai Is Ready`);
})("luis");  // luis Chai Is Ready

// Example 3 - IIFE with return value
let result = (function (name) {
    return `${name} Chai Is Ready`;
}
)("luis");  // luis Chai Is Ready


// Que. What is the difference between a named and anonymous function?
// Ans. A named function can be called by its name and an anonymous function has no name.

//Que. write two iife functions in javascript?
//Ans.
(function () {
    console.log("IIFE 1");
}
)();

((name) =>{
    console.log(`${name} IIFE 2`);
}
)("luis");

