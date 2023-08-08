//basic comparison operators
console.log(2 > 1) //true
console.log(2 == 1) //false
console.log(2 != 1) //true



//string comparison
console.log("2" > 2) //true
console.log("02" > 1) //true

//comparison of different types
console.log(null > 0) //false 
console.log(null == 0) //false
console.log(null >= 0) //true

// the reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

//==  loose equality operator
// === strict equality operator
//it checks the datatypes and equality without type conversion
console.log(0 === "0") //false


