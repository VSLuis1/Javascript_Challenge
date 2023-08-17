// Filter
const tooNumbers = [2,4,6,8,10]
const tooNum =tooNumbers.filter((num)=>{
     return num > 4
});

console.log(tooNum);



// for each loop
const table = [5,10,15,20,25,30,35,40,45,50]
table.forEach ((num) => {
    console.log(num);
});



// Map
const numbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = numbers.map((num) => {
    return num + 10
})

console.log(newNums);


//Chaining
const numbers1 = [1,2,3,4,5,6,7,8,9,10]

const newNums1 = numbers1
.map((num) => {
    return num * 10
})
.map((num) => {
    return num + 1
})
.filter((num) => {
    return num > 15
})

console.log(newNums1);
