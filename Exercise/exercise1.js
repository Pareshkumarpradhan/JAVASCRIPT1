let a = Math.random() * 100;
a = Number.parseInt(a);
// console.log(a)
let inp;
let score = 100;

while (inp != a){
    score = score-1;
    inp = prompt("Enter the Number:");
    if(inp == a){
        console.log("Congratulation! You guess the correct number.")
        console.log(`You guess the actual number in ${100-score} chance. `)
    }
    else if(inp>a && inp<100){
        console.log("Your number is gratter than actual number.")
    }
    else if(inp<a && inp>0){
        console.log("Your number is less than actual number.")
    }
    else{
        console.log("enter number between 1 to 100")
    }

}