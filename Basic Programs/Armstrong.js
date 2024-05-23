// JavaScript Program for Armstrong Numbers :

// Using toString() and split() Method :
function Armstrong (number) {
  const digits = number.toString().split('') // [ '9' '4' '7' '4' ]
  console.log(digits)
  const order = digits.length // 4
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(parseInt(digit), order), 0)

  if (sum === number) {
    console.log(
      number + ' is an Armstrong Number')
  }else {
    console.log(
      number + ' is not an Armstrong Number')
  }
}

Armstrong(9474)
Armstrong(520)

// Naive or normal Method :
function arm (number) {
  let sum = 0
  const digits = number.toString().split('')
  const order = digits.length
  for (let i = 0; i < order; i++) {
    sum = sum + Math.pow(parseInt(digits[i]), order)
  }
  if (sum === number) {
    console.log(number + ' is an Armstrong Number')
  }else {
    console.log(number + ' is Not an Armstrong Number')
  }
}

arm(153)

// Using Reduce :
function isArmstrong (number) {
  const numStr = number.toString()
  const numDigits = numStr.length

  const sum = [...numStr].reduce((acc, digit) => acc + Math.pow(parseInt(digit), numDigits), 0)

  return sum === number
}

console.log(isArmstrong(153))
