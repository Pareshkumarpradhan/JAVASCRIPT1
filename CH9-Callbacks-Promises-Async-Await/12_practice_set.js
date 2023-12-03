
// Q1
// const loadScript = async(src)=>{
//     return new Promise((resolve,reject)=>{
//         let script = document.createElement("script")
//         script.src = src
//         script.onload = () =>{
//             resolve(src)
//         }
//         document.head.append(script)
//     })
// }

// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
//     console.log(value)
// })

//Q2
// const main2 = async() =>{
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
// }
// main2()

//Q3

// let p = ()=>{

//  return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        reject(new Error("Please this is not acceptible"))
//     }, 3000)
// })
// }

// let a = async ()=>{
//     try {
//         let c = await p()
//         console.log(c)
//     }
//     catch(err){
//       console.log("this error has been handale")
//     }
// }
// a()

//Q4
let p1 = async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10)
        }, 2000)
    })
}
let p2 = async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20)
        }, 1000)
    })
}
let p3 = async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(30)
        }, 3000)
    })
}

const run =async ()=>{
    console.time("run")
    // let a1 = await p1()
    // let a2 = await p2()
    // let a3 = await p3() 

    let a1 = p1()
    let a2 = p2()
    let a3 = p3()
    let a1a2a3 = await Promise.all([a1,a2,a3])
    console.log(a1a2a3)
    // console.log(a1,a2,a3)
    console.timeEnd("run")
}
run()