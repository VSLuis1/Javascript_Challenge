class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User('chai', 'chai@gmail.com', '123456')
console.log(chai.encryptPassword()) // 123456abc
console.log(chai.changeUsername()) // CHAI


// Behind the scenes

function User (username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function (){
    return `${this.password}abc`
}

User.prototype.changeUsername = function (){
    return `${this.username.toUpperCase()}`
}

const coffee = new User('coffee', 'coffe@gamil.com', '123456')
console.log(coffee.encryptPassword()) // 123456abc
console.log(coffee.changeUsername()) // COFFEE