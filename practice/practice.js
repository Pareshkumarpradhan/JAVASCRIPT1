function checkPalindromeNumber(number)
{
  let remainder, temp ,reversrNumber=0;
  temp = number 
  while(number>0){
    remainder = number%10;
    number = parseInt(number/10);
    reversrNumber = reversrNumber*10 + remainder
  }
  if(reversrNumber == temp){
    console.log("The given number is palindrome")
  }
  else{
    console.log("The given number is not a palindrome")
  }
}
checkPalindromeNumber(12321)



