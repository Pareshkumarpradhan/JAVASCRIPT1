let arr = [3,5,8,9,12,14]
// no need to do thid
// let a = arr[0]
// let b = arr[1]
// let [a, b, c,d, ...rest] = arr
// console.log(a,b,c,d,rest)
// let [a, , ,d, ...rest] = arr
// console.log(a,d,rest)
// let {a,b} = {a:1,b:5}
// console.log(a,b)


//spread operator
let arr1 = [3,5,8]
let obj1 = { ...arr1}
console.log(obj1)

function sum(v1, v2,v3){
    return v1+v2+v3 
}
console.log(sum(...arr1))

let obj2 ={
    name: "Paresh",
    company: "company xyz",
    address: "abc"
}
// console.log({...obj2, name:"john"})
console.log({ name:"john",...obj2})  //this will print the obj2 object without chainging any value