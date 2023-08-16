// Map
// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// Methods and properties are:
 
// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.


// example 1
let country = new Map();

country.set('IN', 'India');
country.set('US', 'United States');
country.set('UK', 'United Kingdom');

console.log(country);

//for of loop
for (const [key, value] of country) { //Desctructuring the array
    console.log(key,":", value);
};


let fruits = new Map();

fruits.set('1', 'Apple');
fruits.set('2', 'Banana');
fruits.set('3', 'Mango');

// console.log(fruits);

//for of loop
for (const [key, value] of fruits ){
    console.log(key,":", value);
}