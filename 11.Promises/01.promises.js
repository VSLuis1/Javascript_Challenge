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