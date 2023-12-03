let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
          alert("Hey i am  not resolve")
              resolve(1);
    },2000)
})

p1.then(()=>{
    console.log("Congratulation this promise is now resolve")
})

p1.then(()=>{
    console.log("Hurray")
})