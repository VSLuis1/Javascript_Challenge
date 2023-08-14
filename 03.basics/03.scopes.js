// Global Scope
// var a = 1;
// let b = 2;
// const c = 3;

// ******* Var is global scope

// Function Scope -  values  used inside the function only
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log("Function Scope: ", a, b, c);
    }

test();

console.log(b)  //error - we can not access values of let and const outside the function thats why its called block level scope
console.log(c)  //error

// ******* Let and Const are function scope

// Block Scope - values used inside the block only
if(true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log("Block Scope: ", a, b, c);
}


// Nested Scope 
// nested scope is nothing but we can access the values of outer scope inside the inner scope, but we can not access the values of inner scope outside the inner scope
function one (){
   const twitter = "twitter user";
    function two (){
        const thread = "thread user"; //not executed
        console.log(twitter);
    }
    console.log(thread); //error
    two();
}

one(); // twitter user


//scope in if statement
if (true) {
    const name = "luis"
    if (name === "luis"){
        const sirname = "meshram"
        console.log(name + sirname); //output - luis meshram
    }
    console.log(sirname) //error
}
console.log(name) //error


// ++++++++++++++++++++++++++ Hoisting +++++++++++++++++++++++

addOne(5); //output - 6
function addOne (num){
    return num + 1;
}

//It will throw error due the declaration method of functions 
addTwo(5); //error
const addTwo = function (num1){
    return num1 + 2;
}
