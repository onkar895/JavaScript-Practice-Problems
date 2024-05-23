// JavaScript Program to Check if Two Numbers have Same Last Digit :

function haveSameLastDigit (num1, num2) {
  const lastDigit1 = num1 % 10
  const lastDigit2 = num2 % 10

  return lastDigit1 === lastDigit2
}

const number1 = 123
const number2 = 453

const result = haveSameLastDigit(number1, number2)

console.log(result)
