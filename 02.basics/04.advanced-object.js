const threaduser = new Object();  // Singleton object 

const threadUser = {}   //non singleton object

const tinderUser = {
    name: 'John',
    age: 25,
    isPremium: true,
    matches: ['Jane', 'Kate', 'Alice'],
    userDetail: {
        id: 101,
        email: 'luis@gmail.com',
        phone: 1234567890,
        userName: 'luis',
    },
    sendMessage: function (message) {
        console.log(message);
    }
};


console.log(tinderUser.name);  // John

console.log(tinderUser.matches);  // ['Jane', 'Kate', 'Alice']

console.log(tinderUser.userDetail.userName);  // luis Internal objects accesing 

tinderUser.sendMessage('Hello');  // Hello


// object concatenation
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = Object.assign({}, obj1, obj2); //empty object make changes in obj3 not in obj1 and obj2

console.log(obj3);  // { a: 1, b: 2, c: 3, d: 4 }

// object concatenation using spread operator
const obj4 = { ...obj1, ...obj2 };
console.log(obj4);  // { a: 1, b: 2, c: 3, d: 4 }


// When values coming from the database  
//returns the value in the form of array of objects
const user = [
    {
        name: 'John',
        isPremium: true,
    },

    {
        name: 'Jane',
        isPremium: false,
    },

    {
        name: 'Kate',
        isPremium: true,
    },
];

user[0].name;  // John
user[1].isPremium;  // false


console.log(Object.keys(tinderUser));  // ['name', 'age', 'isPremium', 'matches', 'userDetail', 'sendMessage']
console.log(Object.values(tinderUser));  // ['John', 25, true, ['Jane', 'Kate', 'Alice'], { id: 101, email: '