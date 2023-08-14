// Singleton object constructor methods
Object.create();



//object literals
const mysymbol = Symbol('Spark');

const user = {
    name: 'Luis',
    "full name": "Luis Meshram", //if we have space in key name then we have to use "" to access it
    age: 19,
    email : "meshramluis@gmail.com",
    [mysymbol]: 'Spartan',   //syntax for accessing symbol
    isMarried: false,
    sayHello: function () {
        console.log('Hii Mom');
    }
};

console.log(obj.name);  //Method 1
console.log(obj['name']); //Method 2

console.log(obj['full name']); //if we have space in key name then we have to use "" to access it

console.log(obj[mysymbol]); //symbol method
console.log(typeof mysymbol); //symbol


// freeze the email property
user.email = "leoboyluis143@gmail.com";
Object.freeze(user.email); //freeze method - it will not allow to change the value of email property
user.email = "sambajimeshram043@gmail.com";

console.log(user.email); //it will print leoboyluis143@gmail

