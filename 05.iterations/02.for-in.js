// For in loop for objects
const myObject = {
    js : 'Javascript',
    php : 'PHP',
    rb : 'Ruby',
    py : 'Python'
};


for (const key in myObject){
    console.log(`${key} long form is ${myObject[key]}`)
}


const user = {
    luis : 'brogrammer',
    uday : 'backend',
    josh : 'frontend',
    riya : 'designer'
}

for (const key in user){
    console.log(`${key} is a ${user[key]}`)
}


// For in loop for arrays
const myArray = ['Javascript', 'PHP', 'Ruby', 'Python'];

for (const key in myArray){
    console.log(`${key} is ${myArray[key]}`)
}
