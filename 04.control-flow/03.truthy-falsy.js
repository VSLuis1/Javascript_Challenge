// Truthy Values
// "0", "false",bigInt - 0n, [], {}, function() {}, "_"

// Falsy Values
// "", 0, -0, null, undefined, NaN, false

// Truthy
const userMail = "luis@gmail.com";

if (userMail) {
    console.log("Your email is " + userMail);
    }
else {
    console.log("Please enter a valid email");
}   //Output - Your email is luis@gmail



// Falsy
const userGMail = "";

if (userGMail) {
    console.log("Your email is " + userGMail);
    }
else {
    console.log("Please enter a valid email");
}   // Output - Please enter a valid email


//Array
const userNames = [];

if (userNames.length === 0) {
    console.log("Array is empty");
    }

    // Output - Array is empty

// Object 
const user = {};

if (Object.keys(user).length === 0) {
    console.log("Object is empty");
    }


// Nullish Coalescing Operator (??)
// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
val1 = 1 ?? 2; // 1
val1 = null ?? 2; // 2
val1 = undefined ?? 2; // 2
val1 = NaN ?? 2; // NaN
val1 = "" ?? 2; // ""
val1 = 0 ?? 2; // 0 
val1 = false ?? 2; // false
val1 = undefined ?? null ?? 0 ?? false ?? "default"; // 0


// Terinary Operator
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.

// Syntax
// condition ? exprIfTrue : exprIfFalse

// Example
let chai = 10;
chai >= 10 ? console.log("price is 10") : console.log("price is greater than 10"); // price is 10

