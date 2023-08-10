// //****************************NUMBERS****************** */

// const number = 100;
// console.log(number)

// // To check the specific type of the datatype 
// const number1= new Number(400);
// console.log(typeof number1)
// console.log(number1) //returns the object and Number: 400

// // methods for numbers
// // toString
// console.log(number1.toString().length); //conversion of number to string

// // toFixed
// const balance = 1000;
// console.log(number1.toFixed(2)); //returns the number with 2 decimal places

// // toPrecision
// const newBalance = 22335.6544;
// console.log(newBalance.toPrecision(7)); //returns the number with 2 digits
// // returns 22335.65

// const hundreds = 100000000;
// console.log(hundreds.toLocaleString('en-INR')); //returns the number with comma separated





// ****************************MATH OBJECT****************** */
// Maths Methods
console.log(Math)
console.log(Math.abs(-5));  //abs= absolute and it convert negative value into positive value 
console.log(Math.round(4.3));  //it will directly give the round value 5
console.log(Math.floor(4.3)); //it will retun the round up value 4

console.log(Math.ceil(4.3)); //it will return the the round up value 5




// industry use methods

console.log(Math.random()); //returns the random number between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1); //returns the random number between 1 and 10


const min = 10;
const max = 20;

// Formula for the defining the random value between min and max
console.log(Math.floor(Math.random()*(max-min +1)) + min)