// Q1

class Complex{
    constructor(real,imaginary){
        this.real = real
        this.imaginary = imaginary
    }

    add(num){
         this._real = this.real + num.real
         this.imaginary = this.imaginary + num.imaginary
    }

    get real(){
        return this._real
    }
    get imaginary(){
        return this._imaginary
    }
    set imaginary(newImaginary){
     this._imaginary = newImaginary
    }
    set real(newReal){
       this._real = newReal
    }
}

let a = new Complex(2, 4)
a.real = 10
a.imaginary = 10
let b = new Complex(6, 5)
a.add(b)
console.log(a.real, a.imaginary)

//Q3

// class Human{
//     constructor(name,favfood){
//         this.name = name
//         this.favfood = favfood
//     }
//     walk(){
//         console.log(this.name + "Human is Walking")
//     }
// }

// class Student extends Human{
//     walk(){
//         console.log(this.name +  " student is walking")
//     }
// }
//  let o = new Student("Paresh")
//  o.walk()

//  console.log(o instanceof Human)