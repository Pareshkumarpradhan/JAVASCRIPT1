let p1 = new Promise((resolve, reject)=>{
    console.log("Promise is prnding")
    setTimeout(() => {
        // console.log("I am a promise and I am resulved")
        resolve(true)
    }, 5000);
})
let p2 = new Promise((resolve, reject)=>{
    console.log("Promise is prnding")
    setTimeout(() => {
        // console.log("I am a promise and I am rejected")
        reject(new Error("I am in error"))
    }, 5000);
})
// To get the value
p1.then((value)=>{
    console.log(value)
})
// To catch the errors
p2.catch((error)=>{
    console.log("Some error occurred in p2")
})

// p2.then((value)=>{
//     console.log(value)
// })