// for each loop
const fruits = ["banana", "Mango", "watermelon"]

fruits.forEach(function (fruit){   //callback function
    console.log(fruit)
});

//for each loop using arrow function
const colors = ["red", "blue", "green"]

colors.forEach(color => console.log(color));   //callback function


//loop using printMe function
function printMe(item){
    console.log(item)
}

fruits.forEach(printMe);

//++++++++++++++++++++++++++++++++++++++
colors.forEach((color,index, array) => {
        console.log(color, index, array)
}) 

// output - red 0 (3) ["red", "blue", "green"]
//          blue 1 (3) ["red", "blue", "green"]
//          green 2 (3) ["red", "blue", "green"]


// Iterating over an array of objects
const users = [
    {
    programmingLanguages: "JavaScript",
    framework: "React",
    },
    {
    programmingLanguages: "Python",
    framework: "Django",
    },
    {
    programmingLanguages: "Java",
    framework: "Spring",
    },
    {
    programmingLanguages: "C#",
    framework: ".NET",
    }
]

users.forEach(user => {
    console.log(user.programmingLanguages, ":" ,user.framework)
})