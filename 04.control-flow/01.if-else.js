// if else statement 
// syntax
// if (condition) {
//     // code to be executed if condition is true
//   } else {
//     // code to be executed if condition is false
//   }

// example
let chai = "kadak";

if (chai === "kadak") {
    console.log("kadak chai");
}
else {
    console.log("normal chai");
}

//operators
// == equal to
// === equal value and equal type
// != not equal
// !== not equal value or not equal type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// ? ternary operator
// && logical and
// || logical or
// ! logical not


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Nested if else if statement
// syntax
// if (condition1) {
//     // code to be executed if condition1 is true
//   } else if (condition2) {
//     // code to be executed if condition2 is true
//   } else {
//     // code to be executed if both condition1 and condition2 are false
//   }

// example
let score = 100;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
}
else {
    console.log("D");
}


//Logical and (&&)
let userLoggedIn = true;
let userHasPremiumAccount = true;

if (userLoggedIn && userHasPremiumAccount) {
    console.log("You can access all the courses");
} else{
    console.log("You can access only free courses");
} 

//Logical or (||)
let loggedInFromGoogle = false;
let loggedInFromEmail = true;

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("You are logged in");
} else{
    console.log("Please log in to continue");
}