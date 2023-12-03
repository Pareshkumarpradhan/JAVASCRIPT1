try{
    console.log(Paresh)
    throw new ReferenceError("Paresh Kumar Pradhan")
} catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}