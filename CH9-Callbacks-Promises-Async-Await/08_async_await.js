async function harry(){
let  delhiWeather = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("27 Deg")
    }, 2000)
})
let  bangaloreWeather = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("21 Deg")
    }, 5000)
})
    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)

     console.log("Fatching Delhi Weather please wait ...")
    let delhiW = await delhiWeather
    console.log("Fatched Delhi weather: " + delhiW)
    console.log("Fatching bangalore Weather please wait ...")
    let bangaloreW = await bangaloreWeather
    console.log("Fatched Bangalore weather: " + bangaloreW)
    return[delhiW,bangaloreW]

}
console.log("Welcome to weather control room")
let a =harry()
a.then((value)=>{
console.log(value)
}) 
