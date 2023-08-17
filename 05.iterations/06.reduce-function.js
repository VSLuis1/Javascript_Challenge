// Reduce function

const array = [1, 2, 3, 4, 5];

// Normal function
const myArray = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(myArray);

// Arrow function
const newArray = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(newArray);


//reduce function with string interpolation

const numbers = [1, 2, 3, 4, 5];

const myNewArray = numbers.reduce((accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
    return accumulator + currentValue;
}, 0);

console.log(myNewArray);


//reduce fuction with multiple objects

const  shoppingCart = [
    {
        product: 'phone',
        price : 7000,
    },
    {
        product: 'screen protector',
        price : 1000,
    },
    {
        product: 'case',
        price : 500,
    },
    {
        product: 'headphones',
        price : 1700,
    },
];

const total = shoppingCart.reduce((accumulator, currentPrice) => {
     return accumulator + currentPrice.price;
},0)

console.log(total);

