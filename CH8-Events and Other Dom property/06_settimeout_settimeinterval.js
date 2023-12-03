document.write("hello")

const sum = (a,b)=>{
    console.log("Yes i am running " + (a+b))
    a+b
}
setTimeout(sum, 1000,1,2)
// setInterval(function(){
//     alert("setInterval")
// },3000)

//  let a = setTimeout(function(){
//     alert("I am inside of settimeout")
// },5000)

// let b= prompt("do you want to run the settime out?")
// if ("n" == b){
//     clearTimeout(a)
// }
// console.log(a)
