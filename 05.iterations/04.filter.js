// Difference between forEach and filter
// forEach is used to iterate over an array and do something with each element
// filter is used to iterate over an array and return a new array that contains only the elements that pass a test


//example 1
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const numsGreaterThanFive = myNums.filter((num) => {
    //num> 5 // Implicit return - we don't have to use the return keyword
    //(num > 5)  // Implicit return - we don't have to use the return keyword

  return num > 5   // Explicit return - we have to use the return keyword otherwise it returns {} empty object
})

console.log(numsGreaterThanFive) // [ 6, 7, 8, 9 ]

//example 2

const myFruits = ['apple', 'banana', 'orange', 'pear', 'grape']

const fruitsWithMoreThanFiveLetters = myFruits.filter((fruit) => {
    return fruit.length > 5
    })

console.log(fruitsWithMoreThanFiveLetters) // [ 'banana', 'orange' ]


//example 3 - forEach for array 

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const nums = []

myNumbers.forEach((num) => {
    if (num >5){
        nums.push(num)
    }
})

console.log(nums); // [ 6, 7, 8, 9 ]


