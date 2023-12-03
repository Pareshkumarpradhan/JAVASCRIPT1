const sayHello = (name,greeting) =>console.log(greeting + " " + name)

const x = {
    name:"Paresh",
    role:"Js Developer",
    exp:"30",
    show: function(){
        // let that = this
        // console.log(this)
        setTimeout(() =>{
            console.log(`The name is ${this.name}\nThe role is ${this.role}`)
        }, 2000);
    }
}
// sayHello("Parseh","Good Afternoon")
// console.log(x.name,x.exp)
x.show()