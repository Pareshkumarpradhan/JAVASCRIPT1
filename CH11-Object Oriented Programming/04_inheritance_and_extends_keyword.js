class Animal{
    constructor(name, color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(this.name + " is running!")
    }
    shout(){
        console.log(this.name + " is Barking!")
    }
}

class Monkey extends Animal{
    eatBanana() {
        console.log(this.name + " is eating banana")
    }
    hide() {
        console.log(`${this.name} is hiding`)
    }
}

let ani = new Animal("Brown", "white")
let m = new Monkey("Chimpu", "orange")

ani.shout()
m.eatBanana()
m.hide()
// ani.hide() // 