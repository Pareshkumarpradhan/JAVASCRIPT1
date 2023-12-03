class Animal {
    constructor(name){
        this.name = Animal.capitalize(name)
    }
    walk(){
        alert("Animla " + this.name + " is walking")
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }

}

j = new Animal("jack")
j.walk()