// function myName = (){
//     console.log("l");
//     console.log("u");
//     console.log("i");
//     console.log("s");
// }

// myName();  // luis


//add two numbers
function addNumbers(number1, number2){ // parameters
    console.log(number1 + number2);
}

addNumbers(2, 3); // arguments

// **********************************************************

function add (number1, number2){
    return number1 + number2;
}

const result = add(2, 3);
console.log("Result: ",result);


// *************************************************

function threads (username){
    return `@${username} follow me`
}

console.log(threads("luis"));

// situations 1
function twitter (username){
    if(!username){
    return `${username} enter user name`
}
}

console.log(twitter());


