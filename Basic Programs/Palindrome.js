// JavaScript Program to Check for Palindrome Number :

// Using String Reversal :
function palindromeCheck (num) {
  let numStr = num.toString().split('')
  let result = numStr.reverse().join('')

  return numStr === result
}

console.log(palindromeCheck(121)) // true 
console.log(palindromeCheck(128)) // false  

// Using for Loop and Math.floor() Method :
function palindromeCheck (number) {
  let reversed = 0

  for (let i = number; i > 0; i = Math.floor(i / 10)) {
    reversed = reversed * 10 + i % 10
  }

  return number === reversed
}
console.log(palindromeCheck(121))
console.log(palindromeCheck(12321))
console.log(palindromeCheck(12345))
