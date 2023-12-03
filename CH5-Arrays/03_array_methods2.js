// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num1 = [11, 12, 13, 14, 15, 16]
// delete num[0]
// console.log(num.length) 

//concat method
// let newArray = num.concat(num1)
// console.log(newArray)
// console.log(num, num1)


// sort method
// let compare = (a ,b) =>{
//    return a - b
// }
// let num = [551, 234, 45, 67, 56]
// num.sort(compare)
// console.log(num)


// reverse method
// let num = [551, 234, 45, 67, 56]
// console.log(num.reverse())


// Splice and Slice method
// let num = [551, 234, 45, 67, 56, 34, 56, 9, 64]
// num.splice(2, 4, 1022, 1033, 1044, 1055)
// console.log(num)

let num = [551, 234, 45, 67, 56, 34, 56, 9, 64]
// let newNum = num.slice(3)
let newNum = num.slice(3,7)
console.log(newNum)