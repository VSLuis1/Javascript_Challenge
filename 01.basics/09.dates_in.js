// Dates

let myDate = new Date();
console.log(myDate) //2023-08-11T14:20:18.669Z


// Dates Methods
console.log(myDate.toDateString()) //Fri Aug 11 2023
console.log(myDate.toISOString()) //2023-08-11T14:23:04.389Z
console.log(myDate.toJSON())  //2023-08-11T14:23:04.389Z
console.log(myDate.toLocaleDateString())  //11/8/2023
console.log(myDate.toUTCString()) //Fri, 11 Aug 2023 14:23:04 GMT

// custom date syntax

let myCreatedDate = new Date('2023-08-11');
console.log(myCreatedDate.toLocaleString) //11/8/2023

let myCreatedDate3 = new Date('2023-08-11 12:00:00');
console.log(myCreatedDate3.toLocaleDateString) //11/8/2023

/*Note: 1.Date is a object in javascript
        2.Months are start from 0 to 11 */


// Timestamps --- use in quiz app, exam app etc
let timeStamp = new Date();
console.log(timeStamp.getTime()) //1628695644989

// Get the floor value date
let myTimeStmap= Date.now();
//syntax for floor (round figure) date value
console.log(Math.floor(myTimeStmap.getTime() / 1000)) //1628695644


// Get Method for getting custom month and dates
let myDOB = new Date('2003-10-13');
console.log(myDOB.toLocaleDateString());
console.log(myDOB.getDate()) //Get only date
console.log(myDOB.getFullYear()) //Get only year))  