const name= "luis";
const repoCount = 19;

// ******************Concatenation*************************

// ES5 Method to declare the string
console.log("Hello " + name + " you have " + repoCount + " repos");

// ES6 Method to declare the string
console.log(`Hello my name is ${name} and i have ${repoCount} repos`);

// new way to declare the string
const gameName = new String("GTA V");
console.log(gameName);

// ******************String Methods*************************
console.log(gameName.length); //length of string
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(0));  //position of the character
console.log(gameName.indexOf("G")); //position of the index
console.log(gameName.substring(0,2));

// imporatant methods
console.log(gameName.slice(0,2));
console.log(gameName.split("")); //split the string into array
console.log(gameName.replace("GTA","GTA 5"));
console.log(gameName.includes("GTA")); //return true or false
console.log(gameName.trim()); //remove the white space from the string
