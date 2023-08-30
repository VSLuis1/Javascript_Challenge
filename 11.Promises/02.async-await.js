// 1
const promise5 = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
           resolve({user: "Javascript" , pass: "123"}) 
        }
        else{
            reject("Something went wrong in JS")
        };
    },2000)

});

async ()=>{
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

promise5()

// 2
async function getAllUsers (){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("E:", error)
    }
}

getAllUsers();

//.then and .catch()
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) =>{
    return response.json()

})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})