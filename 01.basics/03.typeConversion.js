let score = "99abc";
console.log(typeof score);


// Type Conversion
let score1 = Number(score);
console.log(typeof score1);
console.log(score1);

// Note :
// 1. Number() is use to convert string to number
// 2. String() is use to convert number to string
// 3. Boolean() is use to convert number to boolean
// 4. Boolean() is use to convert string to boolean
// 5. Boolean() is use to convert undefined to boolean
// 6. Boolean() is use to convert null to boolean
// 7. Boolean() is use to convert NaN to boolean
// 8. Boolean() is use to convert Infinity to boolean
// 9. Boolean() is use to convert -Infinity to boolean
// 10. Boolean() is use to convert 0 to boolean

// Note :
// 1= true
// 0 = false
// 99abc= NaN(Not a Number)



// Type conversion from number to string
let date= 26;
console.log(typeof date);

let date1 = String(date);
console.log(typeof date1);
console.log(date1);




// ********************************OperationsConversion****************************************

let value = 5;
let negative = -value;

console.log(negative); // -5

// Arithematic Operation
/* 
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)  ===> 2 power 3
cosole.log(2%2)  ====> remainder
console.log (2/2)
*/


console.log("1" + 2) //12
console.log(1+ "2") //12
console.log("1" + 2 + 6) //126
console.log(2+6+"1") //81

console.log(+true) //1

console.log(+"")
