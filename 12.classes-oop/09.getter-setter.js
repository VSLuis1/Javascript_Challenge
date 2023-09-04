class chai {
    constructor(name , password) {
        this.name = name
        this.password = password
    }

    get name () {
        return this._name.toUpperCase()
    }

    set name (userName) {
       this._name = userName
    }
}


const luis = new chai ("vsuis", "123")
console.log(luis._name)


