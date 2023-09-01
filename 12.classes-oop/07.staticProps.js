class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        console.log(`${this.name} has logged in`);
    }

    static createId () {
        return `420`
    }
    
}

const luis = new user('Luis', 'luis@gmail.com');
console.log(luis.createId()); 

// Static methods are methods that are not accessible from the instance of the class, but from the class itself.

// Static methods are useful for creating utility functions for an application, as they are not tied to a particular object instance.

class vsluis extends user {
    constructor(name, email, age) {
        super(name, email);
        this.age = age;
    }
    
}

const android = new vsluis('Android', 'and@gmail.com', 20);
console.log(android.createId()); 