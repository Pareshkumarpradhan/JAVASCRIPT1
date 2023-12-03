// Syncronous programming
// let a= prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("what is your favorite color?");  
// console.log(a + " is " + b + " years old and has " + c + " favorite color");

// //Asyncronous programming
// console.log("Start")
// setTimeout(() => {
//     console.log("Hey i am good");
// }, 3000);
// console.log("End")


// Callbacks

function loadScript(src,Callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Loaded script with SRC: "+src)
        Callback(null,src);
    }
    script.onerror = function(){
        console.log(" Error loaded script with SRC: "+src)
        Callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}

function hello(error,src){
    if(error){
        console.log(error)
        return
    }
    alert('Hello ' + src);
}
function goodmorning(src){
    alert('goodmorning ' + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",hello);