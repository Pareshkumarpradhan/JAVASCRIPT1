// program to add first n numbers
// let sum =0
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// for(let i =0;i<n;i++){
//     sum = sum + (i+1)
// }
// console.log("sum of first "+ n + "natural nimbers is" + sum)

/*let factorial =1 
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for(let i =1;i<n;i++){
    factorial = factorial * (i+1)
}
console.log("factorial of  "+ n + " is " + factorial)*/

let obj = {
    paresh:99,
    ajit:67,
    milan:78,
    sourav:89,
    jogesh:90
}

// For in loop
for (let a in obj){
    console.log("Marks of "+ a +" are "+ obj[a])
}

// For of loop
for (let b of "Paresh"){
    console.log(b)
}