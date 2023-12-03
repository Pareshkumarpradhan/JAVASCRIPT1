console.log(document.cookie)
document.cookie = "name1=paresh112233"
document.cookie = "name2=paresh2112233"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
console.log(document.cookie)