// Map
// let arr = [45, 23, 21]
// // console.log(arr)
// let a = arr.map((value, index, array) =>{
//     console.log(value, index, array)
//     return value +1
// })
// console.log(a)


// array filter
// let arr2 = [24, 45, 56, 0, 1, 2, 3, 4]
// let a2 = arr2.filter((a)=>{
//     return a<10
// })
// console.log(a2)

//array reduce method
let arr3 = [1, 2, 3, 4, 5, 2, 1]
const reduce_func = (h1, h2)=>{
    return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)