// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    }
    // Create a new instance
    const person1 = new Person('John', 20);
    const person2 = new Person('Mark', 30);
    console.log(person1.name); // John
    console.log(person2.name); // Mark
    console.log(person1.age); // 20
    console.log(person2.age); // 30


// example 2

function cars (name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
}

const car1 = new cars('BMW', 'X5', 2019);
const car2 = new cars('Mercedes', 'C200', 2018);

console.log(car1.name);
console.log(car2.name);