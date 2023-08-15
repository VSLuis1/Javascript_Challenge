// This Keyword - Refer to the current object

const user = {
    username: 'Luis',
    age: 20,

    welcomeMessage: function (){
        console.log(`${this.username} Welcome`);
        console.log(this);
    }
}

user.welcomeMessage()
console.log(this);  //{}

// It will return Window Object because it is not inside an object
// window global object means open browser and right click open console and see there window methods

// we can't use This keyword in function
function chai (){
    let patti = "Red Label"
    console.log(this.patti); // undefined
}

chai()


// Arrow Function
const chai = () => {
    let patti = "Red Label"
    console.log(this.patti); // undefined
}    

chai()