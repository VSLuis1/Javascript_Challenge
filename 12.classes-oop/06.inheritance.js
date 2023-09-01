class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(this.username)
    }
}

class Admin extends User {
    constructor(username, password){
        super(username)
        this.password = password
    }
    logMe(){
        console.log(this.username, this.password)
    }
}

const chai = new Admin ("chai", "1234")
chai.logMe() // chai 1234

const gudachaChai = new Admin("masalachai")
gudachaChai.logMe() // masalachai undefined