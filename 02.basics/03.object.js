// Singleton object constructor methods
Object.create();



//object literals
const mysymbol = Symbol('Spark');

const user = {
    name: 'Luis',
    "full name": "Luis Meshram", //if we have space in key name then we have to use "" to access it
    age: 19,
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

