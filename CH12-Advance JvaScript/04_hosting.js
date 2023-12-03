// following two lines will run successfully due to javaScript hosting
console.log(a)
greet()
function greet(){
    console.log("Good morning")
}

var a=9; // declaration hoisted to the top but initialization is not
console.log(a)