// let a = prompt("hey whats your age?")
// console.log(typeof a)

// let a = "45"
// console.log(a)
// console.log(typeof a)
// b = parseInt(a)
// console.log(b)
// console.log(typeof b)

if(a>0){
    alert("This is an invalid age")
}
else if(a<9){
    alert("you are a kid and you cannot even think of driving")
}
else if(a<18 && a>=9){
    alert("you are a kid and you can  think of driving after 18")
}
else if(a>=18 && a<54){
    alert(" you can drive")
}
else{
    alert("you can't drive")
}