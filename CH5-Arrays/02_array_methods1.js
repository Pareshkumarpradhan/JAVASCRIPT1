let num = [1, 2, 3, 34, 4]
let b = num.toString() //b is now a string
console.log(b)
let c = num.join("_")
console.log(c, typeof c)
// let r = num.pop()   // pop returns the popped element
// console.log(num ,r)
// let r = num.push(45)   // push returns the new array length
// console.log(num ,r)
// let r = num.shift()
// console.log(r,num)   // Remove an element from the start of the array
let r = num.unshift(36)
console.log(r,num)