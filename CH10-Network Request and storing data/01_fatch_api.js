let p = fetch("https://goweather.herokuapp.com/weather/India")
p.then((response)=>{
    // console.log(response.status)
    // console.log(response.ok)
    //  console.log(response.text())
    //     console.log(response.heatders)
    return response.json()

}).then((value2)=>{
    console.log(value2)
})