console.log("log")
console.info("info")
console.warn("warn")
console.error("error")
console.assert("err" != false)
console.assert("err" == false)


console.time("forLoop")
for(let i=0;i<5;i++){
    console.log(233)
}
console.timeEnd("forLoop")