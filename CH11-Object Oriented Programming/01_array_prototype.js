let a = {
    name: "Paresh",
    language: "JavaScript"
}
console.log(a)

let p = {
    run: ()=>{
        alert("run")
    }
}
a.__proto__ = p
a.run()