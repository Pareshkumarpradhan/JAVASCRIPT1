class Employee{
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
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves){
        super.requestLeaves(4)
        console.log("one extra leaves is granted")
        // console.log(`Employee has requested ${leaves+1} leaves (one extra)`)
    }
}

let e = new Programmer()
e.login()
e.requestLeaves(3)