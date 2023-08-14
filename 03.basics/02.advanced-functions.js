// Normal function
function calculateCartPrice(price) {
  return price
}

console.log(calculateCartPrice(100)) // 100

// Passing multiple arguments using rest operator
function amazon (...shirt) {
  return shirt
}

console.log(amazon("blue","red","green")) // [ 'blue', 'red', 'green' ]

// Critical case
function amazon (pant,tshirt,...shirt) {
  return shirt
}
//it will return only the third argument beacuse the first two arguments are already assigned to pant - green and tshirt - blue
console.log(amazon("blue","red","green")) // [ 'green' ]


//handle object
function handleObject(user){
  console.log(`user name is ${user.name} and age is ${user.age}`)
}

handleObject({
  name:"Luis",
  age:20,
}) // user name is Luis and age is 20


//handling array and passing values
const myArray = ["Luis",20, "blue"]

function handleArray(myArray){
return myArray[0]
}
//method 1
console.log(handleArray(myArray)) // Luis

//method 2
//handling array and passing values
console.log(handleArray(["Luis",20, "blue"])) // Luis