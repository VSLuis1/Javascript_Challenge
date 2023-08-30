let promiseOne = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        console.log("promise one is created")
        resolve()
    },2000)
  
})

promiseOne.then(()=>{
    console.log("promise is consumed")
})

// Method 2

new Promise((resolve, reject) =>{
    setTimeout(()=>{
     console.log("promise 2 is created");
     resolve();
    },3000)
}).then(()=>{
    console.log("promises is consumed")
})


// Method 3

new Promise ((resolve, reject) =>{
    setTimeout(()=>{
        console.log("hii luis")
        resolve({name: "luis" , userId: "420"})
    },2000)
}).then((user)=>{
    console.log(user)
})

// Method 4

new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
           resolve({user: "luis" , pass: "123"}) 
        }
        else{
            reject("please enter valid details")
        };

    },2000)
}).then((user)=>{
    console.log(user)
    return user.pass;
}).then((pass)=>{
    console.log(pass)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("the promise is either resolve or rejected")
});