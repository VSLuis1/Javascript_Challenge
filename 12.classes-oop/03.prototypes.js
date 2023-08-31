// here's is what happpend behind the scenes when the new keyword is used :

// 1. a new empty object is created : the new keyword initiates the creation of a new js object

// 2. a prototype is linked : the newly created object is linked to a prototype property of the constructor function (the function that was called with the new keyword). this means that it has access to properties and methods defined on the constructor's prototype property.

// 3. the constructor function is called : the constructor function is called with the specified argument and this is bound to the newly created object . if no explicit returns value is specified from the constructor. javascript assumes this, the newly created object, to be the intended return value.

// 4. the new object is returned : after the constructor function has been called, if it doesn't return  a non primitive value(array, objects, function etc.) the newly created object is returned . 

// example : for prototype property and new keyword

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}

const person1 = new Person('Luis', 30);
const person2 = new Person('Riya', 25);

person1.greet();



//Inheritance - the child classes inherit all the code from the parent class and can contain their own code as well.

const user = {
    name: 'Luis',
    email: 'luis@google.com',
}

const admin = {
    name: 'Riya',
    email: 'riya@google.com',
    access: true,
}
// /Old approach method
admin.__proto__ = user;
console.log(admin.name);
console.log(admin.email);    
console.log(admin.access);

// New approach method
Object.setPrototypeOf(admin, user);


// Inheritance with custom methods
const newUser = "Luis      ";

String.prototype.trueLength = function() {
    console.log('Trimming the string');
    console.log(this);
    console.log(`true length is : ${this.trim().length}`);
}

newUser.trueLength();
"luis".trueLength();
"rajesh bilal".trueLength();