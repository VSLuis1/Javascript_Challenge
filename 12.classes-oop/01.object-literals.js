const user = {
    userName: "Luis",
    Id: 420,
    sayHello: function (){
        
        console.log(`username :  ${this.userName}`)
    },

}

console.log(user.userName)
console.log(user.sayHello())