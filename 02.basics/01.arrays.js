// // Arrays
let myArr = [0,1,2,3,4,5]
// console.log(myArr)

// // array index position of elements
// console.log(myArr[3]);

// // Array Methods
// myArr.push(6)  //push adds element to the last of the array
// myArr.pop()   //pop removes element from the last of the array

// myArr.unshift(1)  //unshift adds element to the start of the array
// myArr.shift()  //shift removes first element of array


// let newArr = myArr.join();
// console.log (myArr) //array
// console.log(newArr) //join binds the array and form the new string of existing array

// What is difference between the slice and splice 
// slice vs splice 
console.log("A ", myArr)  //A  [ 1, 2, 3, 4, 5 ]

const luis = myArr.slice(1,3)
console.log(luis)   //[ 1, 2 ]
console.log("B ", myArr); //B  [ 0, 1, 2, 3, 4, 5 ]

const luis2 = myArr.splice(1,3)
console.log(luis2) //[ 1, 2, 3 ]

console.log("C ", myArr) //C  [ 0, 4, 5 ]
 
//splice manipulate the original array  and slice not








