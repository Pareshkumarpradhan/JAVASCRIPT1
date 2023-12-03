class Employee{
    constructor(name){
        console.log(`${name}-Employee constructor is here`)
        this.name = name
    }
    login(){
        console.log(`Employee has logged in`)
    }
    logout(){
        console.log(`Employee has logged out`)
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
}

class Programmer extends Employee{
    constructor(name){
        super(name)
        console.log(`this is newly written constructor`)
    
    }
    // constructor(...args){   --> if there is no constructor in child class. it is created automatically
    //     super(...args)
    // }
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves){
        super.requestLeaves(4)
        console.log("one extra leaves is granted")
        // console.log(`Employee has requested ${leaves+1} leaves (one extra)`)
    }
}

let e = new Programmer("Paresh")
e.login()
e.requestLeaves(3)