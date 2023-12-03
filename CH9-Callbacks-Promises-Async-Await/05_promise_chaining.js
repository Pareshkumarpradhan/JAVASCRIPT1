// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Resolved after 2 seconds")
//         resolve(56)
//     }, 2000)
// })

// p1.then((value)=>{
//     console.log(value)

//     let p2 = new Promise((resolve, reject)=>{

//         setTimeout(()=>{
//             resolve("Promise 2")  
//         }, 2000) 

            
//     })
//     return p2
    
// }).then((value)=>{
//     console.log("We are done")
// })

const loadScript = (src) =>{
    return new Promise((resolve, reject) =>{
    let script = document.createElement("script")
    scripttype ="text/javascript"
    script.src = src
    document.body.appendChild(script)
    script.onload = ()=>{
        resolve("Script has been loaded sir!")
    }
      script.onerror = ()=>{reject(0)}
})
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
p1.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log("We are sorry but we are having problems loading this seript.")
})
