// Change the value of pi interview question
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(descriptor);
// { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }


const chai = {
    name : "kadak chai",
    price : 10,
    isAvailable : true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))